'use client';
import Link from 'next/link';

const navLinkData = [
  { label: 'Portfolio', link: '#portfolio' },
  { label: 'Skills', link: '#skills' },
  { label: 'Contact', link: '#contact' },
];

export default function NavBar() {
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    link: string,
  ) => {
    e.preventDefault();
    const element = document.querySelector<HTMLElement>(link);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.history.replaceState(null, '', link);
    }
  };

  const navLinks = navLinkData.map((d) => (
    <li key={d.link}>
      <Link
        href={d.link}
        prefetch={false}
        scroll={false}
        onClick={(e) => handleNavClick(e, d.link)}
      >
        {d.label}
      </Link>
    </li>
  ));

  return (
    <nav className="navbar bg-primary">
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
            className="menu menu-compact dropdown-content text-neutral mt-3 p-2 shadow-sm bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <ul className="menu menu-horizontal px-1 hidden sm:flex">{navLinks}</ul>
      </div>
    </nav>
  );
}
