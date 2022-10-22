import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './Reviews.module.scss';
import { Avatar, Box, Container, Typography } from '@material-ui/core';

export const Reviews = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const reviews = [
    {
      review:
        'Chris is a brilliant and gifted full stack software engineer who really understands how to get things done by understanding what customer needs. He was a part of a project which I was managing where he brought new ideas & constructive feedback on how we can improve development processes as well as customer experience. His biggest strength is his ability to deal with conflicting priorities in high-pressure situations. Even during intense moments, Chris knew how to release the pressure. Without hesitation, I recommend Chris if you are looking for best Full Stack Software Engineer.',
      person: 'Uday Patel',
    },
    {
      review:
        'Chris was the young-blood our team needed injected last year. He came in with a lot of energy, good development experience, and a desire to learn! Chris loves to learn anything new or utilitarian. He soaks up new information, and works to find ways and opportunities to apply what he learns. Chris has also had great working relationships with those around him and the senior engineers he has collaborated with have given him high praises for his deep technical prowess and abilities to sling out code.',
      person: 'Brian Goad',
    },
    {
      review:
        "Chris came to our team already facing challenges to improve and optimize then-current solutions and processes. It was interesting to watch him process all these challenges, and I found out that Chris never accepts things just as they are, and doesn't focus only on technology. Instead, he gets to the root of what is to be accomplished, then provides very creative solutions. In addition, he is extremely talented and knowledgeable as a Software Engineer and can deftly and cleanly develop the code to implement his solution.",
      person: 'Christopher Sisson',
    },
  ];

  return (
    <Container className={styles.root}>
      <Typography variant="h2" component="h2">
        Reviews
      </Typography>
      <Slider {...settings} className={styles.sliderContainer}>
        {reviews.map((r, idx) => {
          return (
            <div key={`review-${idx}`}>
              <Box className={styles.reviewContainer}>
                <div className={styles.reviewTextContent}>
                  <p>{r.review}</p>
                </div>
                <div className={styles.reviewPersonContainer}>
                  <Avatar
                    alt="LinkedIn Icon"
                    src="./images/icons/linkedin-icon-40x40.png"
                    className={styles.reviewPersonAvatar}
                  />
                  <a
                    href="https://www.linkedin.com/in/chrislemus#recommendations"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h3 className={styles.reviewPersonLink}>{r.person}</h3>
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
