import React, {Component} from 'react';
import projectsDB from '../../data/projectsData';
import {Container, Row, Col,} from 'react-bootstrap'
import dottedSquare from '../../imgs/decorations/dotted-square-blue.svg'

export default class ProjectCards extends Component {

  state = {
    offset: 0,
  }

  render() {
    return (
        <Container >
          <Row className="card-deck" key={this.props.activePage}>
            {this.getProjects()}
          </Row>
        </Container>
    );
  }

    getProjects ()  {

      const {
        activePage,
        resultsPerPage,
      } = this.props

      let projectCards = [];
  
      const lastProject = activePage * resultsPerPage;
      const  firstProject = lastProject - resultsPerPage;


      for (let projectIndex = firstProject; projectIndex < lastProject; projectIndex++) {
        let project = projectsDB[projectIndex]
        projectCards.push(
          <Col key={project.id}>
            {this.getDecoration(firstProject, lastProject, projectIndex)}
            <div className="project-card fade-in">
              <img className="card-img" src={project.thumbnail.default} alt={project.project_name} />
              <div className="card-body">
                <h5>{project.project_name}</h5>
                <p>{project.description}</p>

                {/*will add this soon*/}
                {/* {this.getProjectIcons(project)} */}

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


    /**
     * 
     * @param {object} project object contains project information
     */
    getProjectIcons(project) {
      let icons = []
      project.technologies.forEach(getImgs)

      function getImgs(img, index) {
        icons.push(<li key={index}><img className="project-icons" src={img} alt="tech-icon"/></li>)
      }
      return (<ul className="project-icons-container">{icons}</ul>)
    }

    /**
     * 
     * @param {Int} firstProject if project on page active, is first project. We'll add a background decoration
     * @param {Int} lastProject if project on page active, is last project. We'll add a background decoration
     * @param {Int} projectIndex current project index(identifier)
     */
    getDecoration(firstProject, lastProject, projectIndex) {
      if(firstProject === projectIndex) {
        return <img src={dottedSquare} alt="dotted-squares" className="card-deco-first" style={ { transform: 'translateY('+this.state.offset*.1+'%)'}}/>
      } else if(lastProject - 1 === projectIndex) {
        return <img src={dottedSquare} alt="dotted-squares" className="card-deco-last" style={ { transform: 'translateY('+this.state.offset*.1+'%)'}}/>
      }
    }

    //we'll listen for scroll and update component state to add parallax effect
    componentDidMount() {
      window.addEventListener('scroll', this.parallaxShift);
    }
  
    componentWillUnmount() {
        window.removeEventListener('scroll', this.parallaxShift);
    }
  
    parallaxShift = () => {
        this.setState({
          offset: window.pageYOffset
        });
    };

 }