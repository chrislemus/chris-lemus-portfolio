'use client';
import { useEffect, useState, useMemo } from 'react';
import { useInterval } from 'react-use';
import { portfolioAll } from '@root/src/content';

export default function projectDemoRedirect(p) {
  const projectId = p.params['project-id'] as string;
  const [progress, setProgress] = useState(0);
  useInterval(
    () => {
      setProgress((p) => p + 1);
    },
    progress < 100 ? 160 : null
  );

  const getProject = () =>
    portfolioAll.find(({ id }) => id === parseInt(projectId));

  const goToLiveDemo = () => {
    const project = getProject();
    if (project) window.location.assign(project.demoUrl);
  };

  useEffect(() => {
    if (projectId) {
      const project = getProject();
      if (project?.serverWakeUpUrl) {
        fetch(project?.serverWakeUpUrl, { mode: 'no-cors' }).then(goToLiveDemo);
      } else {
        goToLiveDemo();
      }
    }
  }, [projectId]);

  useEffect(() => {
    if (progress >= 97) goToLiveDemo();
  }, [progress]);

  const progressText = useMemo(() => {
    if (progress < 15) return 'Booting up server';
    if (progress < 45) return 'Delivering packages';
    if (progress < 75) return 'Preparing for takeoff';
    return 'Finalizing';
  }, [progress]);

  return (
    <div className="flex flex-col items-center pt-16 ">
      <p className="text-4xl font-bold text-center text-primary pb-6 animate-pulse">
        {progressText}
      </p>
      <progress
        className="progress progress-primary w-56"
        value={progress}
        max="100"
      />
      <p>{progress}%</p>
    </div>
  );
}
