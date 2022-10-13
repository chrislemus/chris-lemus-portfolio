import NavBar from '../components/Navbar';
import Header from '../components/Homepage/Header';
import Contact from '../components/Homepage/Contact';
import Portfolio from '../components/Homepage/Portfolio';
import Skills from '../components/Homepage/Skills';

export default function Home() {
  return (
    <>
      <NavBar />
      <Header />
      <Portfolio />
      <Skills />
      <Contact />
    </>
  );
}
