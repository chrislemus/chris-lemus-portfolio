import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import styles from './Contact.module.scss';
import { useParallaxShift } from '@app/hooks';

export default function Contact() {
  const offset = useParallaxShift((val) => val * 0.1 - 200);

  return (
    <div
      id="contact"
      style={{ backgroundPositionY: offset }}
      className={styles.contactSection}
    >
      <Box className={styles.contactBox} boxShadow={3}>
        <Typography variant="h2" component="h4">
          Contact
        </Typography>
        <Typography variant="subtitle1">
          Would love to talk? Shout me out here...
        </Typography>

        <div className={styles.contactButtonGroup}>
          <div>
            <a href="tel:9842126122">
              <img src="./images/icons/phone-icon3.png" alt="phone-icon" />
              <Typography variant="subtitle1" color="textPrimary">
                (984) 212-6122
              </Typography>
            </a>
          </div>
          <div>
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
      <div className={styles.backToTopButton}>
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
