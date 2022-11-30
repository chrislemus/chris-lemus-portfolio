import { useState, useEffect, useMemo } from 'react';
import Pagination from '@material-ui/lab/Pagination';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import styles from './Portfolio.module.scss';
import { portfolio } from '@app/content';

export default function Portfolio() {
  const [resultsPerPage, setResultsPerPage] = useState(3);
  const [activePage, setActivePage] = useState(1);
  const [screenWidth, setScreenWidth] = useState(0);
  const pageCount = Math.ceil(portfolio.length / resultsPerPage);

  useEffect(() => {
    if (screenWidth < 650) {
      setResultsPerPage(1);
    } else if (screenWidth < 1326) {
      setResultsPerPage(1);
    } else {
      setResultsPerPage(2);
    }
    if (activePage > pageCount) setActivePage(pageCount);
  }, [screenWidth]);

  useEffect(() => {
    const resizeListenerFunc = () => setScreenWidth(window.innerWidth);
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
              demoUrl,
              repoUrl,
              status,
              serverWakeUpUrl,
            },
            idx
          ) => (
            <Card className={styles.cardContainer} key={'project-card-' + idx}>
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
              <div className={styles.cardActions}>
                {repoUrl && (
                  <Link
                    href={repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Repo
                  </Link>
                )}
                <Link
                  href={serverWakeUpUrl ? `/project-demo/${id}` : demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Demo
                </Link>
              </div>
            </Card>
          )
        )}
      </Box>
      <Box mt="6rem" display="flex" justifyContent="center">
        <Pagination
          page={activePage}
          count={pageCount}
          color="primary"
          onChange={(_e, page) => setActivePage(page)}
        />
      </Box>
    </section>
  );
}
