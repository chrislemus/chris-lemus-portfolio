import React from 'react';
import {Pagination} from 'react-bootstrap'


export default (props) => {

  return (
    <>
        {getPagination()}
    </>
  )

  function getPagination() {
    const {
      activePage,
      totalPages,
      pageSelect,
      screenSize
    } = props;

    const firstPage = 1;
    const lastPage = totalPages;

    //condition for disabling page item if first or last page is selected
    const disableLast = () => {if(activePage === lastPage) {return true}}
    const disableFirst = () => {if(activePage === firstPage) {return true}}


    return(
        <Pagination size={screenSize}>
            <Pagination.First  onClick={() => pageSelect(firstPage)} disabled={disableFirst()}>First</Pagination.First>
            <Pagination.Prev  onClick={() => pageSelect(activePage - 1)} disabled={disableFirst()}/>

            {getPageItems()}
            
            <Pagination.Next onClick={() => pageSelect(activePage + 1)} disabled={disableLast()}/>
            <Pagination.Last onClick={() => pageSelect(lastPage)} disabled={disableLast()}>Last</Pagination.Last>
        </Pagination>
    )
  }

  function getPageItems() {
    const {
        activePage,
        totalPages,
        pageSelect
    } = props;

    let items = [];

    //this will create page items based on total pages needed. 
    for (let number = 1; number <= totalPages; number++) {
      let isActiveItem = number === activePage;

      //prevents active button from triggering 'pageSelect' func twice
      const disable = () => {if (!isActiveItem) { 
        return (pageSelect(number))
      } else {
        return null
      }}

      //adds page item to 'items' array
      items.push(
        <Pagination.Item 
          key={number} 
          active={isActiveItem} 
          onClick={disable}>
          {number}
        </Pagination.Item>,
      );
    }

    return items
  }
  
}
