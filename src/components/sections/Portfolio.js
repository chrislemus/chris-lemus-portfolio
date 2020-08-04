import React, { Component } from 'react';
import {Modal} from 'react-bootstrap'
import projectsDB from '../../data/projectsData';
// import thumbnail from '../../imgs/portfolio/employee-directory/ed-thumbnail.png';
// import ProjectLightbox from '../partials/ProjectLightbox';


export default class Portfolio extends Component{

  state ={
    displayLightbox: false,
    projectName: null,
    projectDesc: null,
    projectGithub: null,
    projectDemo: null
  }

  render() {
    const {
      displayLightbox,
      projectName,
      projectDesc,
      // projectGithub,
      // projectDemo
    } = this.state;

    return (
      <section className="portfolio content">

        <h2>Portfolio</h2>

      <Modal show={displayLightbox} animation={false} onHide={this.handleClose}>
        <Modal.Header closeButton>
            <h4>{projectName}</h4>
        </Modal.Header>
        <Modal.Body>
          <p className="modal-project-description">{projectDesc}</p>
          <div className="modal-project-tech">
            <h6>TECHNOLOGIES</h6>
            {this.getTechIcons()}
          </div>

          <div className="project-modal-btn-container">
            <button className="github-link project-modal-links" onClick={this.handleClose}>
              GitHub Repo
            </button>
            <button className="project-demo-link" onClick={this.handleClose}>
              Live Demo
            </button>
          </div>
          
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={this.handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={this.handleClose}>
            Save Changes
          </Button>
        </Modal.Footer> */}
      </Modal>


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
    // project.technologies.forEach(icon => {
    //     happy.push(<img key={icon.index} src={icon} alt=""/>)
    //   })
    project.technologies.forEach(getImgs)
    function getImgs(img, index, arr) {
      happy.push(<img key={arr[index]} src={img} alt="tech-icon"/>)
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
        <div key={project.id} className="project--card" onClick={() => this.handleShow(project.id)}>
            <img 
                    src={project.thumbnail.default}
                    alt="project-thumbnail"/>
            <div className="project--card--text">
              <h6>{project.project_name}</h6>
            </div>
        </div>                 
    )
  })

  // getThumbnails = () => projectsDB.map( (project) => {
  //   return (  
  //       <div key={project.id} className="project--card">
  //           <img 
  //                   src={project.thumbnail.default}
  //                   alt="project-thumbnail"/>
  //             <div className="project--card--text">
  //               <h6>{project.project_name}</h6>
  //               <hr className="divider--project--card"/>
  //               <p>{project.description} </p>
  //               <a id="learn--more--project--link" onClick={this.handleShow} projectid={project.id}>Learn More</a>
  //             </div>
  //       </div>                 
  //   )
  // })

   
 }


//  <Modal.Dialog className="project--lightbox">
//  <Modal.Header closeButton>
//    <Modal.Title>Modal title</Modal.Title>
//  </Modal.Header>

//  <Modal.Body>
//    <p>Modal body text goes here.</p>
//  </Modal.Body>

//  <Modal.Footer>
//    <Button variant="secondary">Close</Button>
//    <Button variant="primary">Save changes</Button>
//  </Modal.Footer>
// </Modal.Dialog>