'use client';
import NavBar from './ui/Navbar';
import Header from './ui/Header';
import Contact from './ui/Contact';
import Portfolio from './ui/Portfolio';
import Skills from './ui/Skills';
import { Reviews } from './ui/Reviews';

export default function Home() {
  return (
    <>
      <NavBar />
      <Header />
      <div className="navbar bg-secondary">
        <div className="navbar-start">
          <img src="./images/icons/logo.png" alt="site-logo" />
        </div>
        <div className="navbar-end text-white">
          <div className="dropdown dropdown-end sm:hidden">
            <label tabIndex={0} className="btn btn-ghost ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-5 h-5 stroke-current"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Item 1</a>
              </li>

              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <ul className="menu menu-horizontal px-1 hidden sm:flex">
            <li>
              <a>Item 1</a>
            </li>

            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="hero min-h-screen bg-secondary">
        <div className="hero-content flex-col sm:flex-row text-white ">
          <div>
            <h1 className="text-8xl font-bold mb-1">Chris Lemus</h1>
            <p className="pb-9">
              Fullstack Software Engineer delivering reliable and scalable
              enterprise solutions. Whether strategizing with stakeholders to
              improve the user experience or working with my team to
              continuously integrate and deploy cloud services. My
              entrepreneurial spirit allows me to create efficient and
              innovative experiences that balance user needs and business goals.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
          <img
            src="./images/profile.png"
            className="max-w-sm sm:max-w-xs md:max-w-md lg:max-w-lg "
          />
        </div>
      </div>
      <Portfolio />
      <Skills />
      <Reviews />
      <Contact />
    </>
  );
}
