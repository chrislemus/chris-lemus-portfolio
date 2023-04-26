import { useWindowOffset } from '@app/hooks';

export default function MainHeader() {
  const offset = useWindowOffset((val) => val * 1.2);

  return (
    <header
      className="hero min-h-screen bg-secondary bg-contain bg-no-repeat bg-top bg-[url('/images/main-header-decoration.png')]"
      style={{
        backgroundPositionY: offset + 50,
      }}
    >
      <div className="hero-content flex-col sm:flex-row text-white ">
        <div>
          <h1 className="text-8xl font-bold mb-1">Chris Lemus</h1>
          <p className="pb-9">
            Fullstack Software Engineer delivering reliable and scalable
            enterprise solutions. Whether strategizing with stakeholders to
            improve the user experience or working with my team to continuously
            integrate and deploy cloud services. My entrepreneurial spirit
            allows me to create efficient and innovative experiences that
            balance user needs and business goals.
          </p>
          <button className="btn btn-primary">
            <a href="https://calendly.com/chrislemus" target="_blank">
              Let's Meet
            </a>
          </button>
        </div>
        <img
          src="./images/profile.png"
          className="max-w-sm sm:max-w-xs md:max-w-md lg:max-w-lg "
        />
      </div>
    </header>
  );
}
