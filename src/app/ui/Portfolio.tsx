import { useState, useEffect } from 'react';
import styles from './Portfolio.module.scss';
import { portfolio } from '@app/content';
import cn from 'classnames';

export default function Portfolio() {
  const [resultsPerPage, setResultsPerPage] = useState(3);
  const [activePage, setActivePage] = useState(1);
  const pageCount = Math.ceil(portfolio.length / resultsPerPage);

  useEffect(() => {
    const resizeListenerFunc = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 1326) {
        setResultsPerPage(1);
      } else {
        setResultsPerPage(2);
      }
      if (activePage > pageCount) setActivePage(pageCount);
    };
    resizeListenerFunc();
    window.addEventListener('resize', resizeListenerFunc);
    return () => window.removeEventListener('resize', resizeListenerFunc);
  }, []);

  const projectsToDisplay = portfolio.filter((_p, idx) => {
    const top = activePage * resultsPerPage;
    const bottom = top - resultsPerPage;
    return idx >= bottom && idx < top;
  });

  return (
    <section
      id="portfolio"
      className="flex-col bg-sky-50 justify-around min-h-screen py-40"
    >
      <h1 className="text-8xl font-bold text-center">Portfolio</h1>

      {/* <img
        src="./images/decorations/dotted-square-blue.svg"
        alt="dotted-square-decoration"
        className={styles.decorationLeft}
      />
      <img
        src="./images/decorations/dotted-square-blue.svg"
        alt="dotted-square-decoration"
        className={styles.decorationRight}
      /> */}
      <div className="flex justify-center">
        {projectsToDisplay.map(
          ({ id, thumbnail, projectName, description, repoUrl, status }) => (
            <div
              className="card w-96 bg-base-100 shadow-xl"
              key={`project-card${id}`}
            >
              <figure>
                <img src={thumbnail} alt={`project thumbnail ${projectName}`} />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  {projectName}
                  {status !== 'done' && (
                    <div className="badge badge-secondary badge-outline">
                      {status}
                    </div>
                  )}
                </h2>

                <p>{description}</p>
                <div className="card-actions justify-end">
                  {repoUrl && (
                    <a
                      href={`/projects/${id}/repo`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      Repo
                    </a>
                  )}
                  <a
                    href={`/projects/${id}/demo`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                  >
                    Demo
                  </a>
                </div>
              </div>
            </div>
          )
        )}
      </div>
      <div className="flex justify-center">
        <div className="btn-group">
          <button
            className="btn btn-ghost btn-secondary"
            disabled={activePage === 1}
            onClick={() => setActivePage(activePage - 1)}
          >
            «
          </button>

          {Array.from({ length: pageCount }, (_, i) => {
            const page = i + 1;
            const isActive = activePage === page;
            return (
              <button
                className={cn('btn btn-secondary', {
                  'btn-active': isActive,
                })}
                key={`portfolioPage${page}`}
                onClick={() => setActivePage(page)}
              >
                {page}
              </button>
            );
          })}
          <button
            className="btn"
            disabled={activePage === pageCount}
            onClick={() => setActivePage(activePage + 1)}
          >
            »
          </button>
        </div>
      </div>
    </section>
  );
}
