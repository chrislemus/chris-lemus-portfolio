import React from 'react';
import projectsDB from '../../data/projectsData';

export default (props) => {

    return (
      <>
        {getProjects()}
      </>
    );

    function getProjects ()  {
      const {activePage, resultsPerPage} = props

      let projectCards = [];
  
      const lastProject = activePage * resultsPerPage;
      const  firstProject = lastProject - resultsPerPage;
      
      for (let projectIndex = firstProject; projectIndex < lastProject; projectIndex++) {
        let project = projectsDB[projectIndex]
        projectCards.push(
          <div className="project--card " key={project.id}>
            <img 
                  src={project.thumbnail.default}
                  alt="project-thumbnail"/>
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
              <a href={project.github_repo} target="_blank" rel="noopener noreferrer" projectid={project.id}>Github Repo</a>
              <a href={project.live_demo_url} target="_blank" rel="noopener noreferrer" projectid={project.id}>Live Demo</a>
            </div>
          </div>
        );
      }  
  
      return projectCards
    }

    function getTechIcons(project) {
      let icons = []
      project.technologies.forEach(getImgs)
      function getImgs(img, index) {
        icons.push(<img id="project-tech-icons" key={index} src={img} alt="tech-icon"/>)
      }
        
      return icons
  }

 }