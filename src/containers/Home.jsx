import React, { Component } from 'react';
import Cities from '../components/Cities';
import { Admin } from './Admin';
import { Form, Col, Row, Button } from 'react-bootstrap';
import Volume from '../components/Volume';

class Home extends Component {
  render() {
    return (
      <>
        <h1>Americas App</h1>
        <Row>
          <Col>
            <Cities />
          </Col>
          <Col>
            <Volume></Volume>
          </Col>
        </Row>
        <Row>
          <Col lg='6'>
            <Admin></Admin>
          </Col>
        </Row>
      </>
    );
  }
}
export default Home;
