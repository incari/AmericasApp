import React from 'react';
import Cities from './Cities';
import { FormControl, InputGroup, Row, Col, Form } from 'react-bootstrap';
import { Container, Button } from 'react-bootstrap';

class Volumetric extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
    console.log(event.target.value);
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <>
        <Form onSubmit={this.handleSubmit}>
          <Cities />
          <Row>
            <Col>
              <InputGroup className='mb-3'>
                <FormControl
                  onChange={this.handleChange}
                  value={this.state.value.weight}
                  placeholder='Weight'
                  type='number'
                  name='weight'
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
                  value={this.state.value.volume}
                  onChange={this.handleChange}
                  placeholder='Volume'
                  type='number'
                />
                <InputGroup.Append>
                  <InputGroup.Text>m3</InputGroup.Text>
                </InputGroup.Append>
              </InputGroup>
            </Col>
          </Row>

          <Row className='justify-content-center' style={{ margin: '20px' }}>
            <Button
              onClick={this.handleSubmit}
              variant='primary'
              size='lg'
              active
            >
              Get Quotation
            </Button>
          </Row>
        </Form>
      </>
    );
  }
}

export default Volumetric;
