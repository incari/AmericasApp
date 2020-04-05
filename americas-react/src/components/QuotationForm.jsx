import React from 'react';
import { Form, FormControl, Col, InputGroup, Row } from 'react-bootstrap';
import { Container, Button } from 'react-bootstrap';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

import { departure, arrival } from '../containers/Admin';

class QuotationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
  }
  render() {
    return (
      <>
        <Container>
          <Form>
            <Form.Group as={Col} controlId='formFrom'>
              <Form.Label>From</Form.Label>
              <Dropdown
                options={departure}
                value={this.state.value}
                onChange={this._onSelect}
                placeholder='Select an option'
              ></Dropdown>
            </Form.Group>

            <Form.Group as={Col} controlId='formFrom'>
              <Form.Label>From</Form.Label>
              <Dropdown
                options={arrival}
                value={this.state.value}
                onChange={this._onSelect}
                placeholder='Select an option'
              ></Dropdown>
            </Form.Group>

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
          </Form>
        </Container>
      </>
    );
  }
}
export default QuotationForm;
