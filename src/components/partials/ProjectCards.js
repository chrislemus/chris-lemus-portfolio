import React from 'react';
import projectsDB from '../../data/projectsData';
import {CardDeck, Card} from 'react-bootstrap'


export default (props) => {

    return (
      <CardDeck>
        {getProjects()}
      </CardDeck>
    );

    function getProjects ()  {
      const {activePage, resultsPerPage} = props;

      let projectCards = [];
  
      const lastProject = activePage * resultsPerPage;
      const  firstProject = lastProject - resultsPerPage;
      for (let projectIndex = firstProject; projectIndex < lastProject; projectIndex++) {
        let project = projectsDB[projectIndex]
        projectCards.push(
          <Card className="project-card " key={project.id}>
            <Card.Img variant="top" src={project.thumbnail.default} alt={project.project_name}/>
            <Card.Body>
              <div className="project--card--text">
                  <h6 className="project-name-text">{project.project_name}</h6>
                  <p>{project.description} </p>
                  <div className="project-tech-container">
                    <h6 className="project-tech-header">Technologies</h6>
                    <div>
                      {getTechIcons(project)}
                    </div>
                  </div>

                  {project.warnMsg ? 
                    <p id="project-warn-msg" style={{color: "rgb(126, 1, 7)", marginTop: "auto"}}>{project.warnMsg[0]}</p>
                  :
                    null
                  }
              </div>
              <div className="project-card-buttons">
                <Card.Link href={project.github_repo}>Card Link</Card.Link>
                <Card.Link href={project.github_repo}>Another Link</Card.Link>
              </div>
            </Card.Body>
          </Card>
        );
      }  
  
      return projectCards
    }

    function getTechIcons(project) {
      let icons = []
      project.technologies.forEach(getImgs)
      function getImgs(img, index) {
        icons.push(<img className="project-tech-icons" key={index} src={img} alt="tech-icon"/>)
      }
        
      return icons
  }

 }