import { useState, useEffect } from 'react';
import projectsDB from '../../../data/projectsData';
import Pagination from '@material-ui/lab/Pagination';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import styles from './Portfolio.module.scss';

export default function Portfolio() {
  const [resultsPerPage, setResultsPerPage] = useState(3);
  const [activePage, setActivePage] = useState(1);
  const totalPages = Math.ceil(projectsDB.length / resultsPerPage);

  useEffect(() => {
    resizeListenerFunc();
    window.addEventListener('resize', resizeListenerFunc);
    return () => window.removeEventListener('resize', resizeListenerFunc);
  }, []);

  const resizeListenerFunc = () => {
    const windowWidth = window.innerWidth;
    if (windowWidth < 650) {
      setResultsPerPage(1);
    } else if (windowWidth < 1326) {
      setResultsPerPage(2);
    } else {
      setResultsPerPage(3);
    }
    if (activePage > totalPages) setActivePage(totalPages);
  };

  const projectsToDisplay = projectsDB.filter((_p, idx) => {
    const top = activePage * resultsPerPage;
    const bottom = top - resultsPerPage;
    return idx >= bottom && idx < top;
  });

  return (
    <section id="portfolio" className={styles.portfolioContainer}>
      <Box textAlign="center" mb="7rem">
        <Typography variant="h2" component="h2">
          Portfolio
        </Typography>
      </Box>
      <img
        src="./images/decorations/dotted-square-blue.svg"
        alt="dotted-square-decoration"
        className={styles.decorationLeft}
      />
      <img
        src="./images/decorations/dotted-square-blue.svg"
        alt="dotted-square-decoration"
        className={styles.decorationRight}
      />
      <Box className={styles.cardDeckWrapper}>
        {projectsToDisplay.map(
          (
            {
              id,
              thumbnail,
              projectName,
              description,
              liveDemoUrl,
              githubRepo,
              status,
              serverWakeUpUrl,
            },
            idx
          ) => (
            <Card className={styles.cardContainer} key={'project-card-' + idx}>
              <CardActionArea>
                <CardMedia
                  className={styles.media}
                  image={thumbnail}
                  title={'project ' + projectName}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {projectName}
                  </Typography>

                  {status !== 'done' && (
                    <div className={styles.status}>{status}</div>
                  )}
                  <Typography color="textSecondary" component="p">
                    {description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <div className={styles.cardActions}>
                <Link
                  href={githubRepo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github Repo
                </Link>
                <Link
                  href={serverWakeUpUrl ? `/project-demo/${id}` : liveDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </Link>
              </div>
            </Card>
          )
        )}
      </Box>
      <Box mt="6rem" display="flex" justifyContent="center">
        <Pagination
          count={totalPages}
          color="primary"
          onChange={(_e, page) => setActivePage(page)}
        />
      </Box>
    </section>
  );
}
