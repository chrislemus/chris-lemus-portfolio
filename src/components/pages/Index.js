import React from 'react';
import Header from '../sections/Header';
import Contact from '../sections/Contact';
import Portfolio from '../sections/Portfolio';



export default () => {
    return (
      <div >
        <Header/>
        <Portfolio/>
        <Contact/>
        <div className="blank"/>
      </div>
    );
 }
