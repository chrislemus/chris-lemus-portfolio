import React from 'react';
import Header from '../sections/Header';
import Contact from '../sections/Contact';
import Portfolio from '../sections/Portfolio';
import Skills from '../sections/Skills';

//main homepage
export default () => {
    return (
      <div>
        <Header/>
        <Portfolio/>
        <Skills/>
        <Contact/>
      </div>
    );
 }
