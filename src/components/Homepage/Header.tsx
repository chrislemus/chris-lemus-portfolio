import Button from '@material-ui/core/Button';
import Slide from '@material-ui/core/Slide';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import styles from './Header.module.scss';
import { useWindowOffset } from '@app/hooks';

export default function MainHeader() {
  const offset = useWindowOffset((val) => val / 1.5);

  return (
    <Box
      id="main-header"
      className={styles.header}
      style={{ backgroundPositionY: offset }}
    >
      <Box className={styles.headerContentWrapper}>
        <Slide direction="right" in mountOnEnter unmountOnExit timeout={700}>
          <Box className={styles.headerText}>
            <Typography variant="subtitle1">Hello I'm</Typography>
            <Typography variant="h2" component="h1">
              Chris Lemus
            </Typography>
            <p>
              Fullstack Software Engineer delivering reliable and scalable
              enterprise solutions. Whether strategizing with stakeholders to
              improve the user experience or working with my team to
              continuously integrate and deploy cloud services. My
              entrepreneurial spirit allows me to create efficient and
              innovative experiences that balance user needs and business goals.
            </p>
            <Button variant="contained" color="secondary">
              <a href="https://calendly.com/chrislemus" target="_blank">
                Let's Meet
              </a>
            </Button>
            {/* <Button variant="contained">
              <a href="/files/Cristian_Lemus.vcf" target="_blank">
                Download VCard
              </a>
            </Button> */}
          </Box>
        </Slide>
        <Box className={styles.headerImage}>
          <Slide direction="down" in mountOnEnter unmountOnExit timeout={500}>
            <img src="./images/profile.png" alt="chris" />
          </Slide>
        </Box>
      </Box>
    </Box>
  );
}
