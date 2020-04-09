import React from 'react';
import Cities from './Cities';
import { FormControl, InputGroup, Row, Col, Form } from 'react-bootstrap';
import { Container, Button } from 'react-bootstrap';

import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
//import { departure, arrival } from '../containers/Admin';
const departure = ['1', '2', '3'];
const arrival = ['a', 'b', 'c'];

class Volumetric extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      departure: [],
      value: ''
    };
  }

  handleChange = e => {
    this.setState({ value: e.target.value });
    console.log(e.target.value);
  };

  handleSubmit(event) {
    console.log(this.state);
    event.preventDefault();
  }
  render() {
    const { departure } = this.state;

    let citiesList =
      departure.length > 0 &&
      departure.map(x => {
        return <option>{x}</option>;
      }, this);

    return (
      <>
        <Form>
          <Form.Row>
            <Form.Group as={Col} controlId='From'>
              <Form.Label>From</Form.Label>
              <Form.Control as='select' value={this.state.value}>
                {citiesList}
              </Form.Control>
            </Form.Group>

            <Form.Group as={Col} controlId='To'>
              {/* <Dropdown
                class='form control'
                options={arrival}
                onChange={this._onSelect}
                placeholder='Select an option'
              ></Dropdown> */}
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId='Weight'>
              <Form.Label>Weigth</Form.Label>
              <Form.Control placeholder='Weight in Kg' />
            </Form.Group>

            <Form.Group as={Col} controlId='Volume'>
              <Form.Label>Volume</Form.Label>
              <Form.Control placeholder='Volume in m3' />
            </Form.Group>
          </Form.Row>

          <Form.Group id='formGridCheckbox'>
            <Form.Check type='checkbox' label='Check me out' />
          </Form.Group>

          <Button variant='primary' type='submit'>
            Submit
          </Button>
        </Form>
      </>
    );
  }
}

export default Volumetric;
