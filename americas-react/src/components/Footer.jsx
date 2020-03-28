import React from 'react';
import { Nav, Navbar, Form, Button } from 'react-bootstrap';
import { Image, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import logo from '../assets/images/Americas-logo.png';

const Styles = styled.div`
  .nav {
    background-color: #408abc;
    padding: 30px;
  }
  ,
  .nav .h3 {
    color: white;
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

export const Footer = () => (
  <Styles>
    <Nav
      defaultActiveKey='/'
      className='container-fluid justify-content-center'
    >
      <Form>
        <h3>Register to our events</h3>
        <Row>
          <Col>
            <Form.Control placeholder='Name' />
          </Col>
          <Col>
            <Form.Control placeholder='Email' type='email' />
          </Col>
          <Col>
            <Button variant='dark' type='submit'>
              Register
            </Button>
          </Col>
        </Row>
      </Form>

      <Form.Row className='col-12 justify-content-center'>
        <Nav.Link>
          <Link to='/'>Home</Link>
        </Nav.Link>
        <Nav.Link>
          <Link to='/Terms'>Terms of use</Link>
        </Nav.Link>
        <Nav.Link>
          <Link to='/Policy'>Privacy policy</Link>
        </Nav.Link>
        <Nav.Link>
          <Link to='/help'>Help</Link>
        </Nav.Link>
      </Form.Row>

      <Form.Row>
        <Navbar.Brand href='/'>
          <Image src={logo} alt='Americas-Alliance-network-logo'></Image>
        </Navbar.Brand>
      </Form.Row>
    </Nav>
  </Styles>
);
