// eslint-disable-next-line
import React from 'react';
import Select from 'react-select';
import Async from 'react-select/async';
import { from, to } from '../containers/Admin';
import { Form, Col, Row, Button } from 'react-bootstrap';

// const departure = ['1', '3', '2'];
// const arrival = ['12', '33', '23'];

const QuotationForm = () => {
  const options = [];

  const handleSubmit = event => {
    event.preventDefault();
  };
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col>
            <Select name='from' options={from} placeholder='Select city' />
          </Col>
          <Col>
            <Select name='to' options={to} placeholder='Select city' />
          </Col>
        </Row>
        <Form.Row>
          <Form.Group as={Col} name='weight'>
            <Form.Label>Weight</Form.Label>
            <Form.Control
              type='text'
              placeholder='Weight in Kg'
              required
            ></Form.Control>
          </Form.Group>
          <Form.Group as={Col} name='volume'>
            <Form.Label>Volume</Form.Label>
            <Form.Control
              type='text'
              placeholder='Volume in m3'
              required
            ></Form.Control>
          </Form.Group>
        </Form.Row>
        <Button type='submit'>Get quotation</Button>
      </Form>
    </>
  );
};

export default QuotationForm;
