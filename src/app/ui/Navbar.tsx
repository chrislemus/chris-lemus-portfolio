'use client';
import Link from 'next/link';
import { useEffect, useMemo, useRef } from 'react';
import {
  useIntersection,
  useInterval,
  useScrolling,
  useEffectOnce,
  useCounter,
} from 'react-use';

const navLinkData = [
  { label: 'Portfolio', link: '#portfolio' },
  { label: 'Skills', link: '#skills' },
  { label: 'Contact', link: '#contact' },
];

export default function NavBar() {
  const scrollRef = useRef<HTMLElement>();
  const [scrollTries, { inc, reset }] = useCounter(0, 5);

  useEffectOnce(() => {
    scrollRef.current = document as any;
  });
  const scrolling = useScrolling(scrollRef as any);
  const observingElementRef = useRef<HTMLElement>();
  const intersection = useIntersection(observingElementRef as any, {});

  useEffect(() => {
    console.log(scrollTries);
    if (intersection?.isIntersecting || scrollTries > 4) {
      observingElementRef.current = undefined;
      reset();
    }
  }, [intersection, scrollTries]);

  useInterval(
    () => {
      const element = observingElementRef.current;
      if (element) {
        inc();
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
          inline: 'nearest',
        });
      }
    },
    !scrolling && observingElementRef.current ? 300 : null
  );

  const navLinks = useMemo(
    () =>
      navLinkData.map((d) => (
        <li
          key={d.link}
          onClick={() => {
            const element = document.querySelector<HTMLElement>(d.link);
            if (element) observingElementRef.current = element;
          }}
        >
          <Link href={d.link} prefetch={false} scroll={false}>
            {d.label}
          </Link>
        </li>
      )),
    []
  );

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
