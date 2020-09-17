import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Jumbotron, Container, Col, Row} from 'react-bootstrap';
import profilePic from '../../imgs/profile.png';



export default class MainHeader extends Component {
    state = {
          offset: 0
    };

    render() {
        const offset = this.state.offset/2;
        return (
            <div id="main-header"  >
                <Jumbotron  fluid style={ { backgroundPositionY: offset}}>
                        <Container fluid="md" >
                            <Row >
                                <Col xs={12} sm={7} className="main-header-text" style={ { bottom: offset}}>
                                    <h5>Hello I'm</h5>
                                    <h1>Chris Lemus</h1>
                                    <p>
                                    A Full Stack JavaScript Developer from Raleigh, North Carolina. I create 
                                    efficient and innovative experiences that balance user needs and business goals.</p>
                                    <Link to="/files/Cristian_Lemus.vcf" target="_blank" className="header-btn">Download VCard</Link>
                                </Col>
                                <Col style={ { bottom: offset}}>
                                    <img 
                                        src={profilePic}
                                        alt="chris"
                                        className="main-header-img"/>
                                </Col>
                            </Row>
                        </Container>
                </Jumbotron>
            </div>

        );
    }

    //we'll listen for scroll and update component state to add parallax effect
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