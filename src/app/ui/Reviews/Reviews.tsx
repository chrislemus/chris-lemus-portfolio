import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider, { Settings } from 'react-slick';
import { Avatar, Button, IconButton, Typography } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Grid from '@mui/material/Unstable_Grid2';
import { reviews } from './reviews.content';
import { useRef } from 'react';
import Stack from '@mui/material/Stack';

function NextBtn(props: { onClick: () => void }) {
  const { onClick } = props;
  return (
    <IconButton aria-label="next" size="small" onClick={onClick}>
      <ArrowForwardIosIcon fontSize="inherit" />
    </IconButton>
  );
}
function PrevBtn(props: { onClick: () => void }) {
  const { onClick } = props;

  return (
    <IconButton
      aria-label="prev"
      size="small"
      onClick={onClick}
      // style={{ position: 'absolute', left: 0, top: '25%', display: 'block' }}
    >
      <ArrowBackIosIcon fontSize="inherit" />
    </IconButton>
  );
}

export const Reviews = () => {
  const sliderRef = useRef<Slider>(null);
  const { current: slider } = sliderRef;
  const sliderNext = () => slider?.slickNext();
  const sliderPrev = () => slider?.slickPrev();
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 50,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <Stack textAlign="center" spacing={6} paddingY={13} bgcolor={'#f7f7ff'}>
      <Typography variant="h2" component="h2">
        Reviews
      </Typography>
      <Grid container spacing={2}>
        <Grid xs={1} display="flex" justifyContent="center" alignItems="center">
          <IconButton aria-label="prev" size="small" onClick={sliderPrev}>
            <ArrowBackIosIcon fontSize="inherit" />
          </IconButton>
        </Grid>
        <Grid xs={10}>
          <Slider {...settings} ref={sliderRef}>
            {reviews.map((r, idx) => {
              return (
                <Stack key={`review-${idx}`} spacing={2} paddingBottom={3}>
                  <Typography variant="body1">{r.review}</Typography>

                  <Stack
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Avatar
                      alt="LinkedIn Icon"
                      sx={{ width: 30, height: 30 }}
                      src={r.avatar}
                    />

                    <Button
                      variant="text"
                      target="_blank"
                      href="https://www.linkedin.com/in/chrislemus#recommendations"
                    >
                      {r.person}
                    </Button>
                  </Stack>
                </Stack>
              );
            })}
          </Slider>
        </Grid>
        <Grid xs={1} display="flex" justifyContent="center" alignItems="center">
          <IconButton aria-label="next" size="small" onClick={sliderNext}>
            <ArrowForwardIosIcon fontSize="inherit" />
          </IconButton>
        </Grid>
      </Grid>
    </Stack>
  );
};
