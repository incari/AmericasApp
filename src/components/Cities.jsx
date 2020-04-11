import React from 'react';

import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { from, to } from '../containers/Admin';
import { Form, Image, Col } from 'react-bootstrap';
import worldmap from '../assets/images/worldmap.svg';

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
        <Col>
          <Form.Label>From</Form.Label>
          <Dropdown
            options={from}
            value={this.state.value.from}
            onChange={this._onSelect}
            placeholder='Select an option'
          ></Dropdown>
          <Form.Label>To</Form.Label>

          <Dropdown
            options={to}
            value={this.state.value.to}
            onChange={this._onSelect}
            placeholder='Select an option'
          ></Dropdown>

          <Image src={worldmap}></Image>
        </Col>
      </>
    );
  }
}

export default Cities;
