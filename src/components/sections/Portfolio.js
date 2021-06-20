import { useState, useEffect } from 'react';
import projectsDB from '../../data/projectsData';
import Pagination from '@material-ui/lab/Pagination';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    background: '#f4f5fa',
    padding: '10rem 0',
    position: 'relative',
  },
  CardContainer: {
    maxWidth: 345,
    minHeight: 400,
    marginLeft: '1rem',
    marginRight: '1rem',
    paddingBottom: '4rem',
    position: 'relative',
  },
  cardActions: {
    width: '100%',
    padding: '1rem',
    position: 'absolute',
    bottom: '0',
    display: 'flex',
    justifyContent: 'space-around',
  },
  media: {
    height: 140,
  },
  cardDeckWrapper: {
    display: 'flex',
    justifyContent: 'space-around',
    maxWidth: '1300px',
    margin: '0 auto',
  },
  decorationLeft: {
    position: 'absolute',
    bottom: '55%',
  },
  decorationRight: {
    position: 'absolute',
    right: 0,
    bottom: '15%',
  },
});

export default function Portfolio() {
  const classes = useStyles();
  const [resultsPerPage, setResultsPerPage] = useState(3);
  const [activePage, setActivePage] = useState(1);

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
  };
  const shouldDisplay = (idx) => {
    const top = activePage * resultsPerPage;
    const bottom = top - resultsPerPage;
    const comparison = idx >= bottom && idx < top;
    return !comparison;
  };

  const totalPages = Math.ceil(projectsDB.length / resultsPerPage);
  return (
    <section id="portfolio" className={classes.root}>
      <Box textAlign="center" mb="7rem">
        <Typography variant="h2" component="h2">
          Portfolio
        </Typography>
      </Box>
      <img
        src="./images/decorations/dotted-square-blue.svg"
        alt="dotted-square-decoration"
        className={classes.decorationLeft}
      />
      <img
        src="./images/decorations/dotted-square-blue.svg"
        alt="dotted-square-decoration"
        className={classes.decorationRight}
      />
      <Box className={classes.cardDeckWrapper}>
        {projectsDB.map(
          (
            { thumbnail, projectName, description, liveDemoUrl, githubRepo },
            idx
          ) => (
            <Card
              className={classes.CardContainer}
              hidden={shouldDisplay(idx)}
              key={'project-card-' + idx}
            >
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={thumbnail}
                  title={'project ' + projectName}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {projectName}
                  </Typography>
                  <Typography color="textSecondary" component="p">
                    {description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <div className={classes.cardActions}>
                <Link href={githubRepo}>Github Repo</Link>
                <Link href={liveDemoUrl}>Live Demo</Link>
              </div>
            </Card>
          )
        )}
      </Box>
      <Box mt="6rem" display="flex" justifyContent="center">
        <Pagination
          count={totalPages}
          color="primary"
          onChange={(event, page) => setActivePage(page)}
        />
      </Box>
    </section>
  );
}
