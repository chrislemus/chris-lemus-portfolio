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
      <Portfolio />
      <Skills />
      <Reviews />
      <Contact />
    </>
  );
}
