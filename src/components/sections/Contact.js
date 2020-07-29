import React from 'react';
import dotsDeco from '../../imgs/dots-deco.png';
import {ReactComponent as PhoneIcon} from '../../imgs/phone.svg';
import {ReactComponent as EmailIcon} from '../../imgs/hotmail.svg';


export default () => {
    return (
      <section id="contact--container">
        <div className="contact--modal content box--shadow">
            <div className="contact--modal--inner">


                <p className="contact--message">Love to talk? Shout me here...</p>
                    
                <div className="contact--blurb--items">
                    <a href="callto:9199959906" className="contact--blurb">
                        <PhoneIcon/>
                        <p>(919) 995-9906</p>
                    </a>
                    <a href="mailto:icrislemus@gmail.com" className="contact--blurb">
                        <EmailIcon/>
                        <p>icrislemus@gmail.com</p>
                    </a>
                </div>
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