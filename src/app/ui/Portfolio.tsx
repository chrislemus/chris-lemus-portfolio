'use client';
import { useState, useEffect } from 'react';
import { portfolio } from '@app/content';
import cn from 'classnames';
import React from 'react';
import { Transition } from '@headlessui/react';
import { useWindowSize } from 'react-use';

export default function Portfolio() {
  const { width } = useWindowSize();
  const resultsPerPage = width < 1326 ? 1 : 2;
  const pageCount = Math.ceil(portfolio.length / resultsPerPage);
  const [cardDisplayed, setCardDisplayed] = useState(true);

  const [activePage, _setActivePage] = useState(1);
  const changePage = (page: number) => {
    setCardDisplayed(false);
    setTimeout(() => {
      _setActivePage(page);
      setCardDisplayed(true);
    }, 100);
  };

  useEffect(() => {
    if (activePage > pageCount) changePage(pageCount);
  }, [width]);

  const projectsToDisplay = portfolio.filter((_p, idx) => {
    const top = activePage * resultsPerPage;
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
            className="btn btn-ghost disabled:bg-transparent"
            disabled={activePage === 1}
            onClick={() => changePage(activePage - 1)}
          >
            «
          </button>

          {Array.from({ length: pageCount }, (_, i) => {
            const page = i + 1;
            const isActive = activePage === page;
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
            disabled={activePage === pageCount}
            onClick={() => changePage(activePage + 1)}
          >
            »
          </button>
        </div>
      </div>
      <Transition show={cardDisplayed}>
        <div className="flex justify-center pt-28 gap-5">
          {projectsToDisplay.map(
            ({ id, thumbnail, projectName, description, repoUrl, status }) => (
              <Transition.Child
                enter="transition-opacity ease-linear duration-50"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity ease-linear duration-50"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
                className="card w-96 bg-base-100 shadow-xl "
                key={`project-card${id}`}
              >
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
              </Transition.Child>
            )
          )}
        </div>
      </Transition>
    </section>
  );
}
