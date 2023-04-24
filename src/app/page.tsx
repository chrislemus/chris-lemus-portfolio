'use client';
import NavBar from './ui/Navbar';
import Header from './ui/Header';
import Contact from './ui/Contact';
import Portfolio from './ui/Portfolio';
import Skills from './ui/Skills';
import { Reviews } from './ui/Reviews';
import { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Dialog } from '@headlessui/react';
import { useState } from 'react';

import {
  Bars3Icon,
  ChevronRightIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}
export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <NavBar />
      <div className="bg-blue-600 relative isolate overflow-hidden pt-14 ">
        <img
          src="./images/main-header-decoration.png"
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className=" mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-40">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
            <h1 className="mt-10 max-w-lg text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Chris Lemus
            </h1>
            <p className="mt-6 text-lg leading-8 text-white">
              Fullstack Software Engineer delivering reliable and scalable
              enterprise solutions. Whether strategizing with stakeholders to
              improve the user experience or working with my team to
              continuously integrate and deploy cloud services. My
              entrepreneurial spirit allows me to create efficient and
              innovative experiences that balance user needs and business goals.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <a
                href="https://calendly.com/chrislemus"
                target="_blank"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-blue-700 shadow-sm hover:bg-blue-100"
              >
                Let's Meet
              </a>
              {/* <Button variant="contained">
              <a href="/files/Cristian_Lemus.vcf" target="_blank">
                Download VCard
              </a>
            </Button> */}
            </div>
          </div>
          <div className="mt-16 sm:mt-24 lg:mt-0 md:flex-shrink ">
            <img
              src="./images/profile.png"
              alt="chris"
              className=" md:max-w-sm"
            />
          </div>
        </div>
      </div>
      <Header />
      <Portfolio />
      <Skills />
      <Reviews />
      <Contact />
    </>
  );
}
