import React, { Component } from 'react';
import projectsDB from '../../data/projectsData';
import Pagination from '../partials/Pagination'
// import {Pagination} from 'react-bootstrap'
import ProjectCards from '../partials/ProjectCards';


export default class Portfolio extends Component{

  constructor() {
    super()
    this.cardDeck = React.createRef();
  }
  state = {
    activePage: 1,
    screenSize: "sm",
    resultsPerPage: null,
    totalPages: 1,
    totalProjects: projectsDB.length,
    windowWidth: window.innerWidth,
  }

  render() {
      const {
        activePage,
        totalPages,
        screenSize,
      } = this.state

      return (
        <section id="portfolio" >
          <div className="portfolio-heading">
            <h1>Portfolio</h1>
          </div>

          <div ref={div => this.cardDeck = div}>
            {this.getProjects()}
          </div>
          <Pagination 
            activePage={activePage} 
            totalPages={totalPages}
            pageSelect={this.pageSelect}
            screenSize={screenSize}/>
          
        </section>
      );
  }

  //initially triggers page results function and listens for any window size changes
  componentDidMount() {
    this.updateResultsPerPage()
    window.addEventListener("resize", () => {
      this.setState({windowWidth: window.innerWidth});
      this.updateResultsPerPage()
    })
  }

  /**
   * 
   * @param {Int} pageNum page number being selected
   */
  pageSelect = (activePage) => {
    this.setState({activePage})
  }

  //updates projects results on each page based on window width
  updateResultsPerPage = () => {
    const {windowWidth} = this.state
    const smScreenResults = 2;
    const lgScreenResults = 3

    let screenSize;
    let resultsPerPage;
    if (windowWidth < 460) {
      resultsPerPage = smScreenResults;
      screenSize = "sm";
    } else if (windowWidth < 1326) {
      resultsPerPage = smScreenResults;
      screenSize = "md";
    } else {
      resultsPerPage = lgScreenResults;
      screenSize = "lg";
    }


    if (resultsPerPage !== this.state.resultsPerPage) {
      const totalPages = Math.ceil(projectsDB.length/resultsPerPage)
      this.setState({resultsPerPage, totalPages, screenSize})
    }
    
  }
  
  //retrieves pagination information and returns project card components
  getProjects () {
    const {
      activePage,
      resultsPerPage,
    } = this.state;

    return (
      <ProjectCards 
        activePage={activePage} 
        resultsPerPage={resultsPerPage}/>
    )
  }
}
  