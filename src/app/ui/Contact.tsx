import { useWindowScroll } from 'react-use';

export default function Contact() {
  const { y } = useWindowScroll();

  return (
    <section
      id="contact"
      style={{ backgroundPositionY: y }}
      className="flex flex-col justify-between items-center gap-40 py-28 bg-cover bg-top bg-[url('/images/decorations/contact-section-bg.svg')]"
    >
      <div className="card shadow-xl w-10/12 max-w-4xl bg-base-100 py-14">
        <div className="card-body text-center">
          <h1 className="text-6xl sm:text-8xl font-bold mb-1">Contact</h1>
          <p>Would love to talk? Shout me out here...</p>
          <div className="card-actions justify-evenly pt-12 gap-16">
            <p className="flex flex-col justify-center items-center gap-5 select-text">
              <img
                className="h-14"
                src="./images/icons/phone-icon3.png"
                alt="phone-icon"
              />
              (984) 212-6122
            </p>
            <p className="flex flex-col justify-center items-center gap-5 select-text">
              <img
                className="h-14"
                src="./images/icons/email-icon3.png"
                alt="email-icon"
              />
              dev@chrislemus.io
            </p>
          </div>
        </div>
      </div>
      <div>
        <button
          className="btn btn-primary"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          BACK TO TOP
        </button>
      </div>
    </section>
  );
}
