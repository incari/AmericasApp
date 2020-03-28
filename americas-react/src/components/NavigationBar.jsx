import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../assets/images/Americas-logo.png';

const Styles = styled.div`
  .navbar {
    background-color: #408abc;
  }
  a,
  .navbar-brand,
  .navbar-nav .nav-link {
    color: #ffffff;
    &:hover {
      color: black;
      text-decoration: none;
    }
  }
`;

export const NavigationBar = () => (
  <Styles>
    <Navbar expand='lg'>
      <Navbar.Brand href='/'>
        <img src={logo} alt='Americas-Alliance-network-logo'></img>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='ml-auto'>
          <Nav.Item>
            <Nav.Link>
              <Link to='/'>Home</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link to='/about'>About</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link to='/contact'>Contact</Link>
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
);
