import React, { Component } from 'react';
import projects from '../../data/projectsData';

export default class Project extends Component {

  state ={
    projectTitle: null,
    projectDesc:null,
    screenshots: [],
  }

  render(){

    return (
      <section className="portfolio content">

        <h2>Portfolio</h2>
        <div className="portfolio--subhead">
          <p>Creating a digital product is full of rewards and challenges.</p>
          <p>This is why there are certain skills .</p>
        </div>
        <div className="projects">
            <img
              src="https://1drv.ms/u/s!Ai2_r7JZ5KbBw1g-bylJhHTd_Ce8"
              alt=""
            />
            {this.getThumbnails()}
        </div>
      </section>
    );
  }

  componentDidMount() {
    console.log("hie")
  }

  getThumbnails = () => projects.map( (project) => {
    return (  
        <div key={project.id}>
            <img 
                src={project.thumbnail.default}
                alt="project thumbnail"/>
            <h6>Random Generator</h6>
        </div>                 
    )
  })

}