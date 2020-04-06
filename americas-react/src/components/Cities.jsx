import React from 'react';

import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { departure, arrival } from '../containers/Admin';
import { Form } from 'react-bootstrap';
class Cities extends React.Component {
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
    event.preventDefalut();
  }

  render() {
    return (
      <>
        <Form.Label>From</Form.Label>
        <Dropdown
          options={departure}
          value={this.state.value.departure}
          onChange={this._onSelect}
          placeholder='Select an option'
        ></Dropdown>
        <Form.Label>To</Form.Label>

        <Dropdown
          options={arrival}
          value={this.state.value.arrival}
          onChange={this._onSelect}
          placeholder='Select an option'
        ></Dropdown>
      </>
    );
  }
}

export default Cities;
