import React, {Component} from 'react';
import skillsData from '../../data/skillsData';
import {Container, Row, Col, Tabs, Tab} from 'react-bootstrap';

export default class Skills extends Component{



    state = {
        tabSelected: "Code",

    }

    render() {

        const {tabSelected} = this.state;



        return (
            <Container className="skills-section">
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
        return <img src={skill.img} alt={skill.name} />
    
    }
}
