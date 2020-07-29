import React from 'react';
import projects from '../../data/projectsData';

export default () => {

    const getThumbnails = projects.map( (project) => {
      return (  
          <div key={project.id}>
              <img 
                  src={project.thumbnail.default}
                  alt="project thumbnail"/>
              <h6>Random Generator</h6>
          </div>                 
      )
    })


    return (
      <section className="portfolio content">

        <h2>Portfolio</h2>
        <div className="portfolio--subhead">
          <p>Creating a digital product is full of rewards and challenges.</p>
          <p>This is why there are certain skills .</p>
        </div>
        <div className="project--cards">
          {getThumbnails}
        </div>
      </section>
    );
 }