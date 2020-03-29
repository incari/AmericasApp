import React, { Component } from 'react';
import DataTable from '../components/DataTable';
import { Form, Table } from 'react-bootstrap';
import ReactDOM from 'react-dom';
import CSVReader from 'react-csv-reader';

import bsCustomFileInput from 'bs-custom-file-input';
let headings = [];
let rows = [[]];
class Admin extends Component {
  render() {
    const handleForce = data => {
      console.log(data);
      headings = data[0];
      for (let i = 1; i < data.length; i++) {
        rows.push(data[i]);
      }
      this.forceUpdate();
    };
    return (
      <>
        <h1>Update Prices</h1>
        <p>Here you can add the new prices list</p>
        <Table striped bordered hover>
          <CSVReader cssClass='react-csv-input' onFileLoaded={handleForce} />
          <DataTable headings={headings} rows={rows} />
        </Table>
      </>
    );
  }
}

export default Admin;
