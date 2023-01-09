import React from 'react'
import "./AdminSidebar.css"
import { NavLink } from 'react-router-dom';

function AdminSidebar() {
  return (
    <div className='admin-sidebar-nav-container'>
      <nav className='admin-sidebar-nav'>
        <NavLink exact to='/admin'>
          <i class='fa-solid fa-user'></i>&nbsp; All Practitioners
        </NavLink>
        <NavLink exact to='/admin/add-practitioner'>
          <i class='fa-solid fa-calendar-plus'></i>&nbsp; Add Practutioner
        </NavLink>
        <NavLink exact to='/admin/products'>
          <i class='fa-solid fa-eye'></i>&nbsp; All Products
        </NavLink>
        <NavLink exact to='/admin/add-product'>
          <i class='fa-solid fa-message'></i>&nbsp; Add Product
        </NavLink>
      </nav>
    </div>
  );
}

export default AdminSidebar