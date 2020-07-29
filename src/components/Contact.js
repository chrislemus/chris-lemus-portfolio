import React from 'react';
import dotsDeco from '../imgs/dots-deco.png';
import {ReactComponent as PhoneIcon} from '../imgs/phone.svg';


export default () => {
    return (
      <section className="contact--container">
        <div className="contact--modal content box--shadow">
            <div className="contact--modal--inner">


                <p className="contact--message">Love to talk? Shout me here...</p>
                <p>hi there</p>
                <PhoneIcon/>
                <img 
                    src={dotsDeco}
                    alt="dots"
                    className="contact--dots--deco--bl"/>
                <img 
                    src={dotsDeco}
                    alt="dots"
                    className="contact--dots--deco--tr"/>
            </div>

        </div>
      </section>
    );
 }