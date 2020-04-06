import React from 'react';
import Volumetric from './Volumetric';
import { Form, Col, Row } from 'react-bootstrap';
import { Container, Button } from 'react-bootstrap';

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
        <Volumetric></Volumetric>
      </>
    );
  }
}
export default QuotationForm;
