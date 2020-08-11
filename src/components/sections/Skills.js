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
            <div id="skills-section">
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
                                
                                {this.getTabs()}
                            </Tabs>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }

    tabClick(e) {
        const tabName = e;
        this.setState({tabSelected: tabName})
    }

    getTabs() {        
        return skillsData.map(skill => {   
            return (<Tab eventKey={skill.name} title={skill.name} key={skill.id}>
                        <p>{skill.description}</p>
                    </Tab>)
        })
    }

    getImg() {
        const {tabSelected} = this.state;
        const skill = skillsData.find((skill) => skill.name === tabSelected)
        return <img src={skill.img} alt={skill.name} className="blow-out"/>
    
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
