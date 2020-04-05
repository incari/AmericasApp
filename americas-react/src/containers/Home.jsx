import React, { Component } from 'react';
import QuotationForm from '../components/QuotationForm';
import Papa from 'papaparse';

class Home extends Component {
  render() {
    return (
      <>
        <h1>Americas App</h1>
        <QuotationForm />
      </>
    );
  }
}
export default Home;
