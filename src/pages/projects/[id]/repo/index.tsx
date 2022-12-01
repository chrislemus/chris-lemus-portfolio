import { useRouter } from 'next/router';
import { Box, Typography } from '@material-ui/core';
import { portfolio } from '@root/src/content';
import { useEffect } from 'react';
import Link from 'next/link';

export default function projectRepoRedirect() {
  const router = useRouter();
  const projectId = router.query.id as string;
  const project = portfolio.find(({ id }) => id === parseInt(projectId));
  const repoUrl = project?.repoUrl;

  useEffect(() => {
    if (repoUrl) window.location.assign(project.repoUrl);
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
