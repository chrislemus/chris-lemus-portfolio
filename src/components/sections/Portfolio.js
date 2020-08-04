import React, { Component } from 'react';
import projectsDB from '../../data/projectsData';


export default class Portfolio extends Component{

  render() {

    return (
      <section className="portfolio">

        <h2>Portfolio</h2>

        <div className="portfolio--subhead">
          <p>Creating a digital product is full of rewards and challenges.</p>
          <p>This is why there are certain skills .</p>
        </div>

        <div className="projects--container">
            {this.getThumbnails()}
          </div>
      </section>
    );
  }

  getTechIcons = () => {
    const project = projectsDB.find(x => x.id === 1 );
    let happy = []
    project.technologies.forEach(getImgs)
    function getImgs(img, index, arr) {
      happy.push(<img id="project-tech-icons" key={arr[index]} src={img} alt="tech-icon"/>)
    }
      
    return happy
  }

  handleClose = () => {
    this.setState({displayLightbox: false})
  }

  handleShow = (pid) => {
    const projectId = pid;
    const project = projectsDB.find(x => x.id === parseInt(projectId) );
    const projectName = project.project_name;
    const projectDesc = project.description;
    const projectGithub = project.github_repo
    const projectDemo = project.live_demo_url

    const displayLightbox = true;

    this.setState({
      displayLightbox,
      projectName,
      projectDesc,
      projectGithub,
      projectDemo
    })
    
  }

  loggy = () => {
    console.log("hi")
  }

  getThumbnails = () => projectsDB.map( (project) => {
    return (  
        <div key={project.id} className="project--card">
            <img 
                    src={project.thumbnail.default}
                    alt="project-thumbnail"/>
              <div className="project--card--text">
                <h6 className="project-name-text">{project.project_name}</h6>
                <p>{project.description} </p>
                <h6 className="project-tech-header">Technologies</h6>
                <div>
                  {this.getTechIcons()}
                </div>
                <div className="project-card-buttons">
                  <a href={project.github_repo} target="_blank" projectid={project.id}>Github Repo</a>
                  <a href={project.live_demo_url} target="_blank" projectid={project.id}>Live Demo</a>
                </div>
              </div>
        </div>                 
    )
  })

   
 }