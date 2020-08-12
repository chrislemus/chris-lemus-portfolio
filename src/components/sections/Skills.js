import React, {Component} from 'react';
import skillsData from '../../data/skillsData';
import {Container, Row, Col, Tabs, Tab} from 'react-bootstrap';
import WaterSplash from '../../imgs/decorations/water-splash.svg'
import Circle from '../../imgs/decorations/sm-circle.svg'
import HalfCircle from '../../imgs/decorations/sm-half-circle.svg'
import Square from '../../imgs/decorations/sm-square.svg'


export default class Skills extends Component{



    state = {
        tabSelected: "Code",
        offset: 0
    }

    render() {

        const {tabSelected, offset} = this.state;



        return (
            <div id="skills">
                <img src={WaterSplash} alt="water-splash" className="water-deco"/>
                <img src={Circle} alt="circle" className="circle-deco-skill" style={ { bottom: (offset/20) }}/>
                <img src={HalfCircle} alt="half-circle" className="half-circle-deco-skill" style={ { bottom: (offset/5) }}/>
                <img src={Square} alt="square" className="square-deco-skill" style={ { bottom: offset/60 }}/>
                <Container>
                    <Row>
                        <Col xs="12" sm="6" className="skill-img" >
                            {this.getImg()}
                        </Col>
                        <Col className="tab-container">
                            <div className="skills-header">
                                <h1>My Skills</h1>
                            </div>
                            <Tabs
                                id="controlled-tab-example"
                                defaultActiveKey={tabSelected}
                                onSelect={this.tabClick.bind(this)}>
                                
                                <Tab eventKey="Code" title="Code" key="1">
                                    <p>
                                        Full Stack Javascript Developer. Creating responsive and fast WebApps.
                                        <a href="https://developers.google.com/speed/pagespeed/insights/?url=chrislemus.io" target="_blank" rel="noopener noreferrer"> View this site PageSpeed</a>
                                    </p>
                                    <p>
                                        <ul>
                                            <li>Express</li>
                                            <li>Node JS</li>
                                            <li>NPM</li>
                                            <li>MySQL</li>
                                            <li>Git</li>
                                            <li>Bootstrap and other front-end frameworks</li>
                                            <li>HTML5 stack</li>
                                            <li>CSS3</li>
                                        </ul>
                                    </p>
                                </Tab>


                                <Tab eventKey="Business" title="Business" key="2">
                                    <p>
                                        As someone who started two local service businesses, I will use my experience to deliver a 
                                        product that is tailored to your project/business needs. *check out businesses below
                                    </p>
                                    <ul>
                                        <li>
                                            <p>
                                                <a href="https://www.maidsnextdoor.com/" target="_blank" rel="noopener noreferrer">
                                                    Maids Next Door</a>: extensive use of data analytics for automatic scheduling, dispatch, and pricing
                                            </p>
                                        </li>
                                        <li>
                                            <p><a href="https://ncpropainters.com/" target="_blank" rel="noopener noreferrer">
                                                NC Pro Painters</a>: Managing large scale projects/crews, making sure everything is on schedule. And service is delivered to customer as promised.</p></li>
                                    </ul>    
                                </Tab>


                                <Tab eventKey="Media" title="Media" key="3">
                                    <p>
                                        In depth knowledge of Video/Image formats: Through my freelance work I have developed skills with PhotoShop, Premiere Pro,
                                         After Effects, and other Adobe Suite programs. Video has proven to help with branding and increase site conversion rate. Check out my latest projects below.
                                    </p>
                                    <iframe src="https://fast.wistia.net/embed/iframe/sizbswz78p" title="Maids Next Door Promo" allow="autoplay; fullscreen"  frameBorder="0" allowFullScreen width="45%" height="45%" style={{paddingRight: "8px"}}/>
                                    <iframe src="https://player.vimeo.com/video/389623594" title="Anchor Auto Outlet Promo" width="50%" height="50%" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen/>  
                                </Tab>


                                <Tab eventKey="Marketing" title="Marketing" key="4">
                                    <p>If content is King and distribution is Queen, why work on a project that people have a hard time finding? 
                                        With my experience of online SEO, I will make sure your project follows the search engine guidelines.
                                        This will give your project a better chance at appearing on top of search engine results for your audience to find.
                                    </p>
                                    <p>
                                        <a href="https://www.google.com/search?q=maids+next+door" target="_blank" rel="noopener noreferrer">Click here </a> 
                                        for example of Maids Next Door
                                    </p>
                                </Tab>
                            </Tabs>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }

    /**
     * 
     * @param {string} event tab name(event clicked) 
     */
    tabClick(e) {
        const tabName = e;
        this.setState({tabSelected: tabName})
    }

    //skill section main image will display using state 'tab selected'
    getImg() {
        const {tabSelected} = this.state;
        const skill = skillsData.find((skill) => skill.name === tabSelected)
        return <img src={skill.img} alt={skill.name} className="fade-in" key={skill.id}/>
    
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
