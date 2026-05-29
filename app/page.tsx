'use client';
import NavBar from '@/components/Navbar';
import Header from '@/components/Header';
import Contact from '@/components/Contact';
import Portfolio from '@/components/Portfolio';
import Skills from '@/components/Skills';
import { Reviews } from '@/components/Reviews';

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
