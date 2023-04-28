'use client';
import { useWindowScroll } from 'react-use';

export default function MainHeader() {
  const { y } = useWindowScroll();
  return (
    <header
      className="hero min-h-screen bg-primary bg-contain bg-top bg-[url('/images/main-header-decoration.png')]"
      style={{
        backgroundPositionY: y,
      }}
    >
      <div className="hero-content flex-col sm:flex-row text-white ">
        <div>
          <h1 className="text-6xl sm:text-8xl font-bold mb-1">Chris Lemus</h1>
          <p className="pb-9">
            Fullstack Software Engineer delivering reliable and scalable
            enterprise solutions. Whether strategizing with stakeholders to
            improve the user experience or working with my team to continuously
            integrate and deploy cloud services. My entrepreneurial spirit
            allows me to create efficient and innovative experiences that
            balance user needs and business goals.
          </p>
          <button className="btn btn-accent">
            <a href="https://calendly.com/chrislemus" target="_blank">
              Let's Meet
            </a>
          </button>
        </div>
        <img src="./images/profile.png" className="w-10/12 sm:w-1/2" />
      </div>
    </header>
  );
}
