import './Header.css';
import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

function Header(props) {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div className='NavBar1'>
      <Navbar className="NavBar"color="faded" light>
        <NavbarBrand href="/">
        <img className='logoHeader'
          alt="logo"
          src="https://drive.google.com/uc?export=view&id=1HPrJzWaPITW4xrgLTtMDzybyoUaG4kpV"
        />
      </NavbarBrand>
          <NavbarToggler onClick={toggleNavbar} className="me-2 botonNav" />
          <Collapse className="collapsedNavBar"isOpen={!collapsed} navbar>
            <Nav navbar>
              <NavItem className='NavItem'>
                <NavLink className='itemNav' href="#aboutMeSection">About</NavLink>
              </NavItem>
              <NavItem className='NavItem'>
                <NavLink className='itemNav' href="#projectsSection">
                  Projects
                </NavLink>
              </NavItem>
              <NavItem className='NavItem'>
                <NavLink className='itemNav' href="https://github.com/reactstrap/reactstrap">
                  Contact
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;