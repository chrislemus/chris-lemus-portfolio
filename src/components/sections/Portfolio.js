import React, { Component } from 'react';
import projectsDB from '../../data/projectsData';
import {Pagination} from 'react-bootstrap'
import ProjectCards from '../partials/ProjectCards';


export default class Portfolio extends Component{

  state = {
    activePage: 1,
    resultsPerPage: null,
    totalPages: 1,
    totalProjects: projectsDB.length,
    screenSizeResults: { //settings to adjust projects shown per page
      sm: 2,
      md: 4,
      lg: 6
    },
    projectContainerKey: 8741,
  }


  render() {

      const {
        activePage,
        resultsPerPage,
        projectContainerKey
      } = this.state

      

      return (

        <section id="portfolio" >
          <h2>Portfolio</h2>
          <div className="pagination-container">

          </div>

          <div className="portfolio--subhead">
            <p>Technology is impacting every aspect of our life more and more each day.</p>
            <p>So lets create something impactful.</p>
          </div>
            <div className="projects--container fade-in" key={projectContainerKey}>
              <ProjectCards activePage={activePage} resultsPerPage={resultsPerPage}/>
            </div>

          <Pagination size="lg">
              {this.getPageItems()}
          </Pagination>
        </section>
      );
  }

  getPageItems = () => {
    const {
      activePage,
      totalPages
    } = this.state;

    let items = [];

    for (let number = 1; number <= totalPages; number++) {
      let isActiveItem = number === activePage;
      items.push(
        <Pagination.Item 
          key={number} 
          active={isActiveItem} 
          id={isActiveItem ? "activePageItem" : null} 
          onClick={() => {this.selectNavPage(number)}}>

          {number}
        </Pagination.Item>,
      );
    }

    let lastPageActive = activePage === totalPages;
    let firstPageActive = activePage === 1;
    items.unshift(<Pagination.Prev key="0" disabled={firstPageActive} onClick={() => {this.selectNavArrow(-1)}}/>)
    items.push(<Pagination.Next key={items.length} disabled={lastPageActive} onClick={() => {this.selectNavArrow(+1)}}/>)


    return items
  }

  selectNavArrow = (arrowSelected) => {
    const {activePage} = this.state
    const pageNumber = activePage + arrowSelected
    this.setState({activePage: pageNumber})
    this.projectContKey()
  }

  selectNavPage = (pageNumber) => {
    this.setState({activePage: pageNumber})
    this.projectContKey()
  }

  projectContKey = () => {
    const projectContainerKey = this.state.projectContainerKey + 1;
    this.setState({projectContainerKey})
  }

  updateResultsPerPage = (viewportWidth) => {
    const {screenSizeResults} = this.state
    let resultsPerPage = screenSizeResults.sm;

    if (viewportWidth > 885) {
      resultsPerPage = screenSizeResults.md
    }
    if (viewportWidth > 1326) {
      resultsPerPage = screenSizeResults.lg
    } 

    const totalPages = Math.ceil(projectsDB.length/resultsPerPage)
    this.setState({resultsPerPage, totalPages})
  }
  

  componentDidMount() {
    this.updateResultsPerPage(window.innerWidth)
    window.addEventListener("resize", () => {
      this.updateResultsPerPage(window.innerWidth)
    })

  }
 }

   // getProjects = () => {
  //   return ;
  // }

  // getProjects = () => projectsDB.map( (project, index) => {
  //   const {
  //     activePage,
  //     resultsPerPage,
  //   } = this.state;

  //   const lastPageItem = activePage * resultsPerPage;
  //   const firstPageItem = lastPageItem - resultsPerPage ;
  //   if (index >= firstPageItem & index < lastPageItem) {
  //     return <ProjectCard key={project.id} project={project}/>
  //   }
  //   return null;
  // })