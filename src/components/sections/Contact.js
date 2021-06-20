import { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: '4rem',
    position: 'relative',
    paddingBottom: '18rem',
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
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  const parallaxShift = () => setOffset(window.pageYOffset);

  return (
    <div
      id="contact"
      style={{ backgroundPositionY: offset * 0.1 - 200 }}
      className={classes.root}
    >
      <Box className={classes.contactBox}>
        <Typography variant="h2" component="h4">
          Contact
        </Typography>
        <Typography variant="subtitle1">
          Would love to talk?. Shout me out here...
        </Typography>

        <div className={classes.contactButtonGroup}>
          <div className={classes.contactButton}>
            <a href="tel:9842126122">
              <img src="./images/icons/phone-icon3.png" alt="phone-icon" />
              <Typography variant="subtitle1" color="textPrimary">
                (984) 212-6122
              </Typography>
            </a>
          </div>
          <div className={classes.contactButton}>
            <a
              href="mailto:dev@chrislemus.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="./images/icons/email-icon3.png" alt="email-icon" />
              <Typography variant="subtitle1" color="textPrimary">
                dev@chrislemus.io
              </Typography>
            </a>
          </div>
        </div>
      </Box>
      <div className={classes.backToTopButton}>
        <Button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          variant="contained"
          color="primary"
        >
          BACK TO TOP
        </Button>
      </div>
    </div>
  );
}
