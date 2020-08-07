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
        return (

            <Jumbotron id="main-header" fluid>
                <Container fluid="md">
                    <Row>
                        <Col xs={12} sm={7} className="main-header-text">
                            <h5>Hello I'm</h5>
                            <h1>Chris Lemus</h1>
                            <p>
                            A Full Stack JavaScript Developer from Raleigh, North Carolina. I create 
                            efficient and innovative experiences that balance user needs and business goals.</p>
                        </Col>
                        <Col>
                            <img 
                                src={profilePic}
                                alt="chris"
                                className="main-header-img"/>
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>

        );
    }

 }


//  import React, { Component } from 'react';
// import {Jumbotron, Container} from 'react-bootstrap';
// import Navbar from '../partials/Navbar';
// import profilePic from '../../imgs/profile.png';



// export default class MainHeader extends Component {
//     constructor() {
//         super()
      
//         this.state = {
//           offset: 0
//         };
//     }

//     componentDidMount() {
//         window.addEventListener('scroll', this.parallaxShift);
//     }

//     componentWillUnmount() {
//         window.removeEventListener('scroll', this.parallaxShift);
//     }

//     parallaxShift = () => {
//         this.setState({
//           offset: window.pageYOffset
//         });
//     };

//     render() {
//         return (
//             <section className="header--section">
//                 <Jumbotron fluid className="header--overlay"
//                     style={ { backgroundPositionY: this.state.offset} }
//                 >
//                     <div className="header content"
//                         style={{ bottom: this.state.offset / 2 }}>
//                         <Container className="header--text">
//                         <h1>Bolder Hello Title</h1>
//                             <h1>Chris Lemus</h1>
//                             <p>
//                             Hello, I’m a Full Stack JavaScript Developer from Raleigh, North Carolina. I create 
//                             efficient and innovative experiences that balance user needs and business goals..</p>
//                         </Container>
//                         <Container className="header--image">
//                             <img 
//                                 src={profilePic}
//                                 alt="chris"
//                                 className="header--thumbnail"/>
//                         </Container>
//                     </div>
//                 </Jumbotron>
//             </section>
//         );
//     }

//  }