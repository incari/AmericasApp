import React from 'react';
import { Row, Col, FormControl, InputGroup, Container } from 'react-bootstrap';

export const Measure = props => {
  return (
    <>
      <Col>
        <InputGroup>
          <InputGroup.Prepend>
            <InputGroup.Text>{props.measure.label}</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl lg='5' aria-label='Default' type='number' />
          <InputGroup.Append>
            <InputGroup.Text> </InputGroup.Text>
          </InputGroup.Append>
        </InputGroup>
      </Col>
    </>
  );
};
