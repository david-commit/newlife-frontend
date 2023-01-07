import React from 'react';
import { NavLink } from 'react-router-dom';
import './ShopPagination.css';

function Pagination({ productsPerPage, products, paginate, currentPage }) {
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
      <NavLink to='#' onClick={() => paginate(renderFirstPage())}>
        «
      </NavLink>
      {pageNumbers.map((number) => {
        return (
          <NavLink
            to='#'
            key={number}
            onClick={() => paginate(number)}
            id={currentPage === number ? 'active-page' : ''}
          >
            {number}
          </NavLink>
        );
      })}
      <NavLink to='#' onClick={() => paginate(renderLastPage())}>
        »
      </NavLink>
    </nav>
  );
}

export default Pagination;
