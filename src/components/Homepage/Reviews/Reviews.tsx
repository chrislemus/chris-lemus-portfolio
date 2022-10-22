import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './Reviews.module.scss';
import { Avatar, Box, Container, Typography } from '@material-ui/core';
import { reviews } from './reviews.content';

export const Reviews = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 50,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <Container className={styles.root}>
      <Typography variant="h2" component="h2">
        Reviews
      </Typography>
      <Slider {...sliderSettings} className={styles.sliderComponent}>
        {reviews.map((r, idx) => {
          return (
            <div key={`review-${idx}`}>
              <Box className={styles.reviewContainer}>
                <div>
                  <p>{r.review}</p>
                </div>
                <div className={styles.reviewPersonContainer}>
                  <Avatar
                    alt="LinkedIn Icon"
                    src={r.avatar}
                    className={styles.reviewPersonAvatar}
                  />
                  <a
                    href="https://www.linkedin.com/in/chrislemus#recommendations"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p className={styles.reviewPersonLink}>{r.person}</p>
                  </a>
                </div>
              </Box>
            </div>
          );
        })}
      </Slider>
    </Container>
  );
};
