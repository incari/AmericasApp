import React from 'react';
import { Form, FormControl, Col, InputGroup, Row } from 'react-bootstrap';
import { Container, Button } from 'react-bootstrap';

const QuotationForm = () => {
  return (
    <>
      <Container>
        <Form>
          <Form.Group as={Col} controlId='formFrom'>
            <Form.Label>From</Form.Label>
            <Form.Control as='select' value='Choose...'>
              <option>Choose...</option>
              <option>...</option>
            </Form.Control>
          </Form.Group>

          <Form.Group as={Col} controlId='formTo'>
            <Form.Label>To</Form.Label>
            <Form.Control as='select' value='Choose...'>
              <option>Choose...</option>
              <option>...</option>
            </Form.Control>
          </Form.Group>
        </Form>
        <div>
          <Row>
            <Col>
              <InputGroup className='mb-3'>
                <InputGroup.Prepend></InputGroup.Prepend>
                <FormControl
                  aria-label='Cargo information'
                  placeholder='Weight'
                  type='number'
                />
                <InputGroup.Append>
                  <InputGroup.Text>Kg</InputGroup.Text>
                </InputGroup.Append>
              </InputGroup>
            </Col>
            <Col>
              <InputGroup className='mb-3'>
                <InputGroup.Prepend></InputGroup.Prepend>
                <FormControl
                  aria-label='Cargo information'
                  placeholder='Length'
                  type='number'
                />
                <InputGroup.Append>
                  <InputGroup.Text>Cm</InputGroup.Text>
                </InputGroup.Append>
              </InputGroup>
            </Col>
          </Row>

          <Row>
            <Col>
              <InputGroup className='mb-3'>
                <InputGroup.Prepend></InputGroup.Prepend>
                <FormControl
                  aria-label='Cargo information'
                  placeholder='Width'
                  type='number'
                />
                <InputGroup.Append>
                  <InputGroup.Text>Cm</InputGroup.Text>
                </InputGroup.Append>
              </InputGroup>
            </Col>
            <Col>
              <InputGroup className='mb-3'>
                <InputGroup.Prepend></InputGroup.Prepend>
                <FormControl
                  aria-label='Cargo information'
                  placeholder='Height'
                  type='number'
                />
                <InputGroup.Append>
                  <InputGroup.Text>Cm</InputGroup.Text>
                </InputGroup.Append>
              </InputGroup>
            </Col>
          </Row>
        </div>
        <Row className='justify-content-center'>
          <Button variant='primary' size='lg' active>
            Get Quotation{' '}
          </Button>{' '}
        </Row>
      </Container>
    </>
  );
};

export default QuotationForm;
