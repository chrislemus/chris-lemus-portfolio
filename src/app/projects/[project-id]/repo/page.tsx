'use client';
import { Box, Typography } from '@mui/material';
import { portfolioAll } from '@root/src/content';
import { useEffect } from 'react';
import Link from 'next/link';

export default function projectRepoRedirect(p) {
  const projectId = p.params['project-id'] as string;
  const project = portfolioAll.find(({ id }) => id === parseInt(projectId));
  const repoUrl = project?.repoUrl;

  useEffect(() => {
    if (repoUrl) window.location.assign(repoUrl);
  }, [repoUrl]);

  return (
    <Box paddingTop={5} textAlign="center">
      {repoUrl ? (
        <Typography variant="h3">Redirecting to repo</Typography>
      ) : (
        <Typography variant="h3">
          Sorry, project Repo not found. <Link href="/">Return home</Link>.
        </Typography>
      )}
    </Box>
  );
}
