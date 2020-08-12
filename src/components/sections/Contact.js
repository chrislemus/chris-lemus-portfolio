import React, {Component} from 'react';
import {Container} from 'react-bootstrap';
// import dotsDeco from '../../imgs/dots-deco.png';
import PhoneIcon from '../../imgs/icons/phone-icon3.png';
import EmailIcon from '../../imgs/icons/email-icon3.png';


export default class Contact extends Component{
      
    state = {
        offset: 0
    };

    render() {
        return (
        <div id="contact" style={ { backgroundPositionY: ((this.state.offset*.1) - 200)}}>
            <Container >
                <div className="contact-modal">
                    <h1>Contact</h1>
                    <p>Would love to talk?. Shout me out here...</p>
                    <div>
                        <div className="contact-info">
                            <a href="callto:9199959906">
                                <img src={PhoneIcon} alt="phone-icon"/>
                                <p>(919) 995-9906</p>
                            </a>
                        </div>
                        <div className="contact-info">
                            <a href="mailto:icrislemus@gmail.com">
                                <img src={EmailIcon} alt="email-icon"/>
                                <p>icrislemus@gmail.com</p>
                            </a>
                        </div>
                    </div>
                </div>
            </Container>
            <button className="page-top-button" onClick={() => {this.scrollToTop()}}>BACK TO TOP</button>
        </div>
        );
    }
    
    scrollToTop() { 
        window.scrollTo(0, 0); 
    } 

    componentDidMount() {
        window.addEventListener('scroll', this.parallaxShift);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.parallaxShift);
    }

    parallaxShift = () => {
        this.setState({
        offset: window.pageYOffset
        });
    };

 }