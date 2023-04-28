'use client';
import { portfolioAll } from '@root/src/content';
import { useEffect } from 'react';

export default function projectRepoRedirect(p) {
  const projectId = p.params['project-id'] as string;
  const project = portfolioAll.find(({ id }) => id === parseInt(projectId));
  const repoUrl = project?.repoUrl;

  useEffect(() => {
    if (repoUrl) window.location.assign(repoUrl);
  }, [repoUrl]);

  return (
    <div className="pt-16 text-center ">
      {repoUrl ? (
        <h1 className="text-6xl font-bold animate-pulse">
          Redirecting to repo...
        </h1>
      ) : (
        <>
          <h1 className="text-4xl font-bold pb-10">
            Sorry, project repo not found.
          </h1>
          <a href="/" className="btn btn-primary">
            Return home
          </a>
        </>
      )}
    </div>
  );
}
