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
    <NavbarBrand href="/">
      <img
        alt="logo"
        src="https://drive.google.com/uc?export=view&id=1xiVLjkcVjiIHcVb2GZunpldFTJttalWJ"
        style={{
          height: 300,
          width: 300
        }}
      />
    </NavbarBrand>
    <NavItem>
      <NavLink
        active
        href="#"
      >
        About
      </NavLink>
    </NavItem>
    <NavItem>
      <NavLink href="#">
        Projetcs
      </NavLink>
    </NavItem>
    <NavItem>
          <NavLink href="#">
        Contact
      </NavLink>
    </NavItem>
  </Nav>

  );
};

export default Header;