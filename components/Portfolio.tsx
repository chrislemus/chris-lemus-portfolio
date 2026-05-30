'use client';
import { useState } from 'react';
import { portfolio } from '@/content';
import cn from 'classnames';
import { Transition, TransitionChild } from '@headlessui/react';
import { useWindowSize } from 'react-use';

export default function Portfolio() {
  const { width } = useWindowSize();
  const resultsPerPage = width < 1326 ? 1 : 2;

  const pageCount = Math.ceil(portfolio.length / resultsPerPage);
  const [cardDisplayed, setCardDisplayed] = useState(true);

  const [activePage, _setActivePage] = useState(1);
  const safeActivePage = Math.max(1, Math.min(activePage, pageCount));

  const changePage = (page: number) => {
    setCardDisplayed(false);
    setTimeout(() => {
      _setActivePage(page);
      setCardDisplayed(true);
    }, 100);
  };

  const projectsToDisplay = portfolio.filter((_p, idx) => {
    const top = safeActivePage * resultsPerPage;
    const bottom = top - resultsPerPage;
    return idx >= bottom && idx < top;
  });

  return (
    <section
      id="portfolio"
      className="flex-col bg-base-200 justify-around min-h-screen py-40 relative"
    >
      <h1 className="text-6xl sm:text-8xl font-bold text-center">Portfolio</h1>
      <img
        src="./images/decorations/dotted-square-blue.svg"
        alt="dotted-square-decoration"
        className="absolute left-4 top-1/3 lg:top-1/4 pointer-events-none"
      />
      <img
        src="./images/decorations/dotted-square-blue.svg"
        alt="dotted-square-decoration"
        className="absolute right-4 bottom-1/4 pointer-events-none "
      />
      <div className="flex justify-center pt-24">
        <div className="flex">
          <button
            // className="btn btn-ghost disabled:bg-transparent"
            disabled={safeActivePage === 1}
            onClick={() => changePage(safeActivePage - 1)}
          >
            «
          </button>

          {Array.from({ length: pageCount }, (_, i) => {
            const page = i + 1;
            const isActive = safeActivePage === page;
            return (
              <button
                key={`portfolioPage${page}`}
                className={cn('btn', {
                  'btn-primary': isActive,
                  'btn-ghost': !isActive,
                })}
                onClick={() => changePage(page)}
              >
                {page}
              </button>
            );
          })}
          <button
            className="btn btn-ghost disabled:bg-transparent"
            disabled={safeActivePage === pageCount}
            onClick={() => changePage(safeActivePage + 1)}
          >
            »
          </button>
        </div>
      </div>
      <Transition show={cardDisplayed}>
        <div className="flex justify-center pt-28 gap-5">
          {projectsToDisplay.map(
            ({ id, thumbnail, projectName, description, repoUrl, status }) => (
              <TransitionChild
                enter="transition-opacity ease-linear duration-50"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity ease-linear duration-50"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
                key={`project-card${id}`}
              >
                <div className="card w-96 bg-base-100 shadow-xl ">
                  <figure>
                    <img
                      src={thumbnail}
                      alt={`project thumbnail ${projectName}`}
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">
                      {projectName}
                      {status !== 'done' && (
                        <div className="badge badge-primary badge-outline">
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
              </TransitionChild>
            ),
          )}
        </div>
      </Transition>
    </section>
  );
}
