import React from 'react';
import { NavLink } from 'react-router-dom';
import './Pagination.css';

function Pagination({ productsPerPage, products, paginate }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(products.length / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  function renderFirstPage() {
    return pageNumbers[0];
  }
  function renderLastPage() {
    return pageNumbers[pageNumbers.length - 1];
  }

  return (
    <nav className='pagination-container'>
      <NavLink
        to='#'
        key={renderFirstPage()}
        onClick={() => paginate(renderFirstPage())}
      >
        «
      </NavLink>
      {pageNumbers.map((number) => {
        return (
          <NavLink to='#' key={number} onClick={() => paginate(number)}>
            {number}
          </NavLink>
        );
      })}
      <NavLink
        to='#'
        key={renderLastPage()}
        onClick={() => paginate(renderLastPage())}
      >
        »
      </NavLink>
    </nav>
  );
}

export default Pagination;
