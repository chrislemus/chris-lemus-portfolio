import React from 'react';
import projectsDB from '../../data/projectsData';
import {Container, Row, Col,} from 'react-bootstrap'
import dottedSquare from '../../imgs/decorations/dotted-square-blue.svg'


export default (props) => {

    return (
      <Container >
        <Row className="card-deck">
          {getProjects()}
        </Row>
      </Container>
    );

    function getProjects ()  {
      const {activePage, resultsPerPage} = props;

      let projectCards = [];
  
      const lastProject = activePage * resultsPerPage;
      const  firstProject = lastProject - resultsPerPage;


      for (let projectIndex = firstProject; projectIndex < lastProject; projectIndex++) {
        let project = projectsDB[projectIndex]
        projectCards.push(
          <Col key={project.id}>
            {getDecoration(firstProject, lastProject, projectIndex)}
            <div className="project-card" >
              <img className="card-img" src={project.thumbnail.default} alt={project.project_name} />
              <div className="card-body">
                <h5>{project.project_name}</h5>
                <p>{project.description}</p>

                {getProjectIcons(project)}

                {project.warnMsg ? <p>{project.warnMsg[0]}</p> : null }

                <div className="project-card-buttons">
                  <a href={project.github_repo} target="_blank" rel="noopener noreferrer">Github Repo</a>
                  <a href={project.live_demo_url} target="_blank" rel="noopener noreferrer">Live Demo</a>
                </div>
              </div>
            </div>
          </Col>
        );
      }  
  
      return projectCards
    }



    function getProjectIcons(project) {
      let icons = []
      project.technologies.forEach(getImgs)

      function getImgs(img, index) {
        icons.push(<li key={index}><img className="project-icons" src={img} alt="tech-icon"/></li>)
      }
        
      return (<ul className="project-icons-container">{icons}</ul>)
    }

    function getDecoration(firstProject, lastProject, projectIndex) {
      if(firstProject === projectIndex) {
        return <img src={dottedSquare} alt="dotted-squares" className="card-deco-first"/>
      } else if(lastProject - 1 === projectIndex) {
        return <img src={dottedSquare} alt="dotted-squares" className="card-deco-last"/>
      }
    }

 }