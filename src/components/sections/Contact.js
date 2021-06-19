import { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: '4rem',
    position: 'relative',
    paddingBottom: '18rem',
    position: 'relative',
    background: "url('./images/decorations/contact-section-bg.svg')",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
  contactBox: {
    boxShadow: theme.shadows[3],
    background:
      'linear-gradient( 164deg, rgba(255, 255, 255, 1) 74%, rgba(248, 252, 255, 1) 74% )',
    width: '90%',
    maxWidth: 1200,
    margin: '0 auto',
    borderRadius: '.5rem',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    padding: '6rem 0 ',
  },
  contactButton: {
    '& img': {
      maxHeight: '60px',
      marginBottom: '1rem',
      [theme.breakpoints.down('sm')]: {
        maxHeight: '40px',
      },
    },
  },
  contactButtonGroup: {
    margin: '3rem auto',
    display: 'flex',
    justifyContent: 'space-around',
    width: '50%',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  backToTopButton: {
    position: 'absolute',
    bottom: '2rem',
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
  },
}));

export default function Contact() {
  const classes = useStyles();
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    window.addEventListener('scroll', parallaxShift);
    return () => window.removeEventListener('scroll', parallaxShift);
  }, []);
  const scrollToTop = () => window.scrollTo(0, 0);
  const parallaxShift = () => setOffset(window.pageYOffset);

  return (
    <div
      id="contact"
      style={{ backgroundPositionY: offset * 0.1 - 200 }}
      className={classes.root}
    >
      <Box className={classes.contactBox}>
        <h1>Contact</h1>
        <p>Would love to talk?. Shout me out here...</p>
        <div className={classes.contactButtonGroup}>
          <div className={classes.contactButton}>
            <a href="tel:9842126122">
              <img src="./images/icons/phone-icon3.png" alt="phone-icon" />
              <p>(984) 212-6122</p>
            </a>
          </div>
          <div className={classes.contactButton}>
            <a
              href="mailto:dev@chrislemus.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="./images/icons/email-icon3.png" alt="email-icon" />
              <p>dev@chrislemus.io</p>
            </a>
          </div>
        </div>
      </Box>
      <div className={classes.backToTopButton}>
        <Button onClick={scrollToTop} variant="contained" color="primary">
          BACK TO TOP
        </Button>
      </div>
    </div>
  );
}
