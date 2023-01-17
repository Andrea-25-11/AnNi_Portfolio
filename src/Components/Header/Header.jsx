import React, { useState } from 'react';
import './Header.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

function Header() {
  return (
  <Nav className='NavBar'>
    <NavItem className='NavItem'>
      <NavLink className='NavLink'
        active
        href="#"
      >
        About
      </NavLink>
    </NavItem>
    <NavItem className='NavItem'>
      <NavLink href="#">
        Projetcs
      </NavLink>
    </NavItem>
    <NavItem className='NavItem'>
          <NavLink className='NavLink' href="#">
        Contact
      </NavLink>
    </NavItem>
  </Nav>

  );
};

export default Header;