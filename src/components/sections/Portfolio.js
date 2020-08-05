import React, { Component } from 'react';
import projectsDB from '../../data/projectsData';
import {Pagination} from 'react-bootstrap'
import ProjectCard from '../partials/ProjectCard';


export default class Portfolio extends Component{

  state = {
    activePage: 1,
    resultsPerPage: 6,
    totalPages: null,
    totalProjects: projectsDB.length,
  }


  render() {
    
      return (
        <section className="portfolio">
          <h2>Portfolio</h2>
          <div className="pagination-container">

          </div>

          <div className="portfolio--subhead">
            <p>Creating a digital product is full of rewards and challenges.</p>
            <p>This is why there are certain skills .</p>
          </div>

          <div className="projects--container">
              {this.getProjects()}
          </div>

          <Pagination size="lg">
              {this.getPageItems()}
          </Pagination>
        </section>
      );
  }

  getProjects = () => projectsDB.map( (project, index) => {
    const {
      activePage,
      resultsPerPage,
    } = this.state;

    const lastPageItem = activePage * resultsPerPage;
    const firstPageItem = lastPageItem - resultsPerPage ;
    if (index >= firstPageItem & index < lastPageItem) {
      return <ProjectCard key={project.id} project={project}/>
    }
    return null;
  })

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

  selectNavArrow = (x) => {
    const {activePage} = this.state
    const pageNumber = activePage + x
    this.setState({activePage: pageNumber})
  }

  selectNavPage = (pageNumber) => {
    this.setState({activePage: pageNumber})
  }

  updatePageNav = (viewportWidth) => {
    let resultsPerPage;
    if (viewportWidth < 1327) {
      resultsPerPage = 4
      this.setState({resultsPerPage})

      if (viewportWidth < 885) {
        resultsPerPage = 3
        this.setState({resultsPerPage})
      }
    } else {
      resultsPerPage =  6
      this.setState({resultsPerPage})
    }


    // const totalPages = Math.ceil(projectsDB.length/this.state.resultsPerPage)
    const totalPages = Math.ceil(projectsDB.length/resultsPerPage)
    this.setState({totalPages})
  }
  

  componentDidMount() {
    window.addEventListener("resize", () => {
      this.updatePageNav(window.innerWidth)
    });
  }

 }