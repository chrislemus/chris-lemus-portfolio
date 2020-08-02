import React, { Component } from 'react';
import {Jumbotron, Container} from 'react-bootstrap';
import thumbnail from '../../imgs/header-thumbnail.png';



export default class MainHeader extends Component {
    constructor() {
        super()
      
        this.state = {
          offset: 0
        };
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

    render() {
        return (
            <section className="header--bg">
                <Jumbotron fluid className="header--overlay"
                    style={ { backgroundPositionY: this.state.offset} }
                >
                    <div className="header content"
                        style={{ bottom: this.state.offset / 2 }}>
                        <Container className="header--text">
                            <h1>Chris Lemus</h1>
                            <p>
                                Hello, I'm Chris Lemus, ui/ux designer based in Raleigh, NC consectetur adipiscing elit.
                                Accuming ipsum magna dictum interdum.</p>
                        </Container>
                        <Container className="header--image">
                            <img 
                                src={thumbnail}
                                alt="chris"
                                className="header--thumbnail"/>
                        </Container>
                    </div>
                </Jumbotron>
            </section>
        );
    }

 }


//  export default () => {
//     return (
//         <Jumbotron fluid className="main--header--bg">
//             <div 
//                 className="main--header--overlay"
//                 style={}
//             >
//                 <div className="main--header content">
//                     <Container >
//                         <h1>Chris Lemus</h1>
//                         <p>
//                             Hello, I'm Chris Lemus, ui/ux designer based in Raleigh, NC consectetur adipiscing elit.
//                             Accuming ipsum magna dictum interdum.
//                         </p>
//                     </Container>
//                     <Container>
//                         <h1>Chris Lemus</h1>
//                         <p>
//                             Hello, I'm Chris Lemus, ui/ux designer based in Raleigh, NC consectetur adipiscing elit.
//                             Accuming ipsum magna dictum interdum.
//                         </p>
//                     </Container>
//                 </div>
//             </div>
//         </Jumbotron>
//     );
//  }