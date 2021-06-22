import Button from '@material-ui/core/Button';
import Slide from '@material-ui/core/Slide';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import { useState, useEffect } from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    background: '#0063f5',
    paddingTop: '10rem',
    paddingBottom: '12rem',
    backgroundImage: "url('../images/main-header-decoration.png')",
    backgroundSize: 'cover',
  },
  headerContentWrapper: {
    margin: '0 auto',
    maxWidth: 1400,
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  headerImage: {
    width: '40%',
    height: '100%',
    '& > img': {
      width: '100%',
      height: '100%',
    },
    [theme.breakpoints.down('sm')]: {
      width: '80%',
    },
  },
  headerText: {
    width: '40%',
    color: '#fff',
    '& > p': {
      color: '#b6d3ff',
      fontSize: '1.2rem',
    },
    '& > h1': {
      fontSize: '5rem',
    },
    '& > h5': {
      fontSize: '1.5rem',
    },
    '& > button': {
      backgroundColor: '#eff5ff',
    },
    [theme.breakpoints.down('sm')]: {
      marginBottom: '5rem',
      width: '80%',
    },
  },
}));

export default function MainHeader() {
  const classes = useStyles();
  const [offset, setOffset] = useState(0);
  const scrollEffect = () => {
    setOffset(window.pageYOffset / 1.5);
  };
  useEffect(() => {
    window.addEventListener('scroll', scrollEffect);
    return () => window.removeEventListener('scroll', scrollEffect);
  }, []);
  return (
    <Box
      id="main-header"
      className={classes.root}
      style={{ backgroundPositionY: offset }}
    >
      <Box className={classes.headerContentWrapper}>
        <Slide direction="right" in mountOnEnter unmountOnExit timeout={700}>
          <Box className={classes.headerText}>
            <Typography variant="subtitle1">Hello I'm</Typography>
            <Typography variant="h2" component="h1">
              Chris Lemus
            </Typography>
            <p>
              A Full Stack JavaScript Developer from Raleigh, North Carolina. I
              create efficient and innovative experiences that balance user
              needs and business goals.
            </p>
            <Button variant="contained">
              <a href="/files/Cristian_Lemus.vcf" target="_blank">
                Download VCard
              </a>
            </Button>
          </Box>
        </Slide>
        <Box className={classes.headerImage}>
          <Slide direction="down" in mountOnEnter unmountOnExit timeout={500}>
            <img src="./images/profile.png" alt="chris" />
          </Slide>
        </Box>
      </Box>
    </Box>
  );
}
