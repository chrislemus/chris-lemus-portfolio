import React from 'react';

export default ({project}) => {
    return (
        <div className="project--card">
          <img 
                  src={project.thumbnail.default}
                  alt="project-thumbnail"/>
            <div className="project--card--text">
              <h6 className="project-name-text">{project.project_name}</h6>
              <p>{project.description} </p>
              <h6 className="project-tech-header">Technologies</h6>
              <div>
                {getTechIcons()}
              </div>
              <div className="project-card-buttons">
                <a href={project.github_repo} target="_blank" rel="noopener noreferrer" projectid={project.id}>Github Repo</a>
                <a href={project.live_demo_url} target="_blank" rel="noopener noreferrer" projectid={project.id}>Live Demo</a>
              </div>
            </div>
      </div>  
    );

    function getTechIcons() {
        let happy = []
        project.technologies.forEach(getImgs)
        function getImgs(img, index, arr) {
          happy.push(<img id="project-tech-icons" key={arr[index]} src={img} alt="tech-icon"/>)
        }
          
        return happy
    }

 }