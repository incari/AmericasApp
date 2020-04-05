import React, { Component } from 'react';
import DataTable from '../components/DataTable';
import { Form, Table } from 'react-bootstrap';
import ReactDOM from 'react-dom';
import CSVReader from 'react-csv-reader';

import bsCustomFileInput from 'bs-custom-file-input';
let headings = [];
let rows = [[]];
let departure = [];
let arrival = [];

class Admin extends Component {
  render() {
    const handleForce = data => {
      console.log(data);

      headings = data[0].slice(0, 15);
      if (data.length < 10) {
        for (let i = 1; i < data.length; i++) {
          rows.push(data[i].slice(0, data.length));
        }
      } else {
        for (let i = 1; i < 10; i++) {
          rows.push(data[i].slice(0, 15));
        }
      }
      for (let i = 1; i < data.length; i++) {
        departure.push(data[i][0]);
        arrival.push(data[i][1]);
      }
      departure = [...new Set(departure)];
      arrival = [...new Set(arrival)];
      this.forceUpdate();
    };

    return (
      <>
        <h1>Update Prices</h1>
        <p>Here you can add the new prices list</p>
        <CSVReader cssClass='react-csv-input' onFileLoaded={handleForce} />
        <Table striped bordered hover>
          <DataTable headings={headings} rows={rows} />
        </Table>
      </>
    );
  }
}
export { Admin, departure, arrival };
