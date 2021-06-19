import { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import PhoneIcon from '../../imgs/icons/phone-icon3.png';
import EmailIcon from '../../imgs/icons/email-icon3.png';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    paddingTop: '5em',
    paddingBottom: '1em',
    position: 'relative',
    background: "url('./images/decorations/contact-section-bg.svg')",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
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
      <Container>
        <div className="contact-modal">
          <h1>Contact</h1>
          <p>Would love to talk?. Shout me out here...</p>
          <div>
            <div className="contact-info">
              <a href="tel:9842126122">
                <img src={PhoneIcon} alt="phone-icon" />
                <p>(984) 212-6122</p>
              </a>
            </div>
            <div className="contact-info">
              <a href="mailto:dev@chrislemus.io">
                <img src={EmailIcon} alt="email-icon" />
                <p>dev@chrislemus.io</p>
              </a>
            </div>
          </div>
        </div>
      </Container>
      <button className="page-top-button" onClick={scrollToTop}>
        BACK TO TOP
      </button>
    </div>
  );
}
