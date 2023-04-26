import { useMemo } from 'react';

const navLinkData = [
  { label: 'Portfolio', link: '/#portfolio' },
  { label: 'Skills', link: '/#skills' },
  { label: 'Contact', link: '/#contact' },
];

export default function NavBar() {
  const navLinks = useMemo(
    () =>
      navLinkData.map((d) => (
        <li key={d.link}>
          <a href={d.link}>{d.label}</a>
        </li>
      )),
    []
  );

  return (
    <nav className="navbar bg-secondary">
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
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content text-neutral mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <ul className="menu menu-horizontal px-1 hidden sm:flex">{navLinks}</ul>
      </div>
    </nav>
  );
}
