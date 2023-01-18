import React from 'react'
import "./AdminSidebar.css"
import { NavLink } from 'react-router-dom';

function AdminSidebar() {
  return (
    <div className='admin-sidebar-nav-container'>
      <nav className='admin-sidebar-nav'>
        <NavLink exact to='/admin/me'>
          <i class='fa-solid fa-table-columns'></i>&nbsp; Dashboard
        </NavLink>
        <NavLink exact to='/admin/all-practitioners'>
          <i class='fa-solid fa-user'></i>&nbsp; All Practitioners
        </NavLink>
        <NavLink exact to='/admin/add-practitioner'>
          <i class='fa-solid fa-user-plus'></i>&nbsp; Add Practitioner
        </NavLink>
        <NavLink exact to='/admin/add-practitioner-profile'>
          <i class='fa-solid fa-address-card'></i>&nbsp; Add Practitioner
          Profile
        </NavLink>
        <NavLink exact to='/admin/products'>
          <i class='fa-solid fa-pills'></i>&nbsp; All Products
        </NavLink>
        <NavLink exact to='/admin/add-product'>
          <i class='fa-solid fa-prescription-bottle-medical'></i>&nbsp; Add
          Product
        </NavLink>
      </nav>
    </div>
  );
}

export default AdminSidebar