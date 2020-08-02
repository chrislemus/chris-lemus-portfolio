import React from 'react';
import projects from '../../data/projectsData';
import thumb from '../../imgs/portfolio/thumbnails/project-1-thumbnail.png'
import {Card, Button} from 'react-bootstrap'

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

        <Card style={{ width: '18rem' }} mb="1">
          <Card.Img variant="top" src={thumb} />
          <Card.Body>
            <Card.Title>Random Quote Generator</Card.Title>
            <Button variant="primary">Go somewhere</Button>
            <Button variant="secondary">Go somewhere</Button>
          </Card.Body>
        </Card>

        <div className="project--cards">
          {getThumbnails}
        </div>
      </section>
    );
 }