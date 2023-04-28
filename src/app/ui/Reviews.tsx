import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider, { Settings } from 'react-slick';
import { useRef } from 'react';

const avatar = '/images/icons/linkedin-icon-40x40.png';

export const reviews = [
  {
    review:
      'Chris is a brilliant and gifted full stack software engineer who really understands how to get things done by understanding what customer needs. He was a part of a project which I was managing where he brought new ideas & constructive feedback on how we can improve development processes as well as customer experience. His biggest strength is his ability to deal with conflicting priorities in high-pressure situations. Even during intense moments, Chris knew how to release the pressure. Without hesitation, I recommend Chris if you are looking for best Full Stack Software Engineer.',
    person: 'Uday Patel',
    avatar,
  },
  {
    review:
      'Chris was the young-blood our team needed injected last year. He came in with a lot of energy, good development experience, and a desire to learn! Chris loves to learn anything new or utilitarian. He soaks up new information, and works to find ways and opportunities to apply what he learns. Chris has also had great working relationships with those around him and the senior engineers he has collaborated with have given him high praises for his deep technical prowess and abilities to sling out code.',
    person: 'Brian Goad',
    avatar,
  },
  {
    review:
      "Chris came to our team already facing challenges to improve and optimize then-current solutions and processes. It was interesting to watch him process all these challenges, and I found out that Chris never accepts things just as they are, and doesn't focus only on technology. Instead, he gets to the root of what is to be accomplished, then provides very creative solutions. In addition, he is extremely talented and knowledgeable as a Software Engineer and can deftly and cleanly develop the code to implement his solution.",
    person: 'Christopher Sisson',
    avatar,
  },
];

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
    <div className="flex flex-col bg-base-200 py-36 gap-10 lg:items-center">
      <h1 className="text-6xl sm:text-8xl font-bold text-center">Reviews</h1>

      <div className="flex justify-evenly gap-1 items-center relative max-w-7xl">
        <button
          className="btn btn-primary btn-circle hidden md:block"
          onClick={sliderPrev}
        >
          «
        </button>

        <Slider {...settings} ref={sliderRef} className="w-10/12 max-w-5xl">
          {reviews.map((r, idx) => {
            return (
              <div
                key={`review-${idx}`}
                className="flex flex-col justify-between py-5"
              >
                <p className="text-center">{r.review}</p>

                <div className="flex justify-center pt-12">
                  <div className="avatar">
                    <div className="w-10 h-10 rounded-full">
                      <img src={r.avatar} />
                    </div>
                  </div>

                  <a
                    className="btn btn-ghost"
                    target="_blank"
                    href="https://www.linkedin.com/in/chrislemus#recommendations"
                  >
                    {r.person}
                  </a>
                </div>
              </div>
            );
          })}
        </Slider>
        <button
          aria-label="next"
          className="btn btn-primary btn-circle hidden md:block"
          onClick={sliderNext}
        >
          »
        </button>
      </div>
    </div>
  );
};
