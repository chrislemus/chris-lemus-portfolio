import React, { Component } from 'react';
import {Jumbotron, Container, Col, Row} from 'react-bootstrap';
import profilePic from '../../imgs/profile.png';



export default class MainHeader extends Component {
    constructor() {
        super()
      
        this.state = {
          offset: 0
        };
    }


    /*======================*/
    /*===========  do i need state component?  ===========*/
    /*======================*/
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