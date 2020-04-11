import React from 'react';
import { Row, Col, FormControl, InputGroup, Container } from 'react-bootstrap';
let units = [
  {
    universal: { weight: 'Kg', Length: 'Cm' },
    imperial: { weight: 'Lb', Length: 'In' }
  }
];
let unit = ['Kg', 'Cm'];

class Pallet extends React.Component {
  constuctor() {}
  render() {
    return (
      <>
        <Container
          style={{
            border: '2px solid red',
            borderRadius: '15px',
            padding: '10px'
          }}
        >
          <Row>
            <p style={{ paddingLeft: '15px' }} id='package-id'>
              Package {this.props.qty}
            </p>
          </Row>
          <Row>
            <Col>
              <InputGroup lg='2'>
                <InputGroup.Prepend>
                  <InputGroup.Text id='inputGroup-sizing-default'>
                    Weight
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl lg='5' aria-label='Default' type='number' />
                <InputGroup.Append>
                  <InputGroup.Text>{unit[0]} </InputGroup.Text>
                </InputGroup.Append>
              </InputGroup>
            </Col>
            <Col>
              <InputGroup lg='2'>
                <InputGroup.Prepend>
                  <InputGroup.Text id='inputGroup-sizing-default'>
                    Length
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl lg='5' aria-label='Default' type='number' />
                <InputGroup.Append>
                  <InputGroup.Text>{unit[1]}</InputGroup.Text>
                </InputGroup.Append>
              </InputGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              <InputGroup lg='2'>
                <InputGroup.Prepend>
                  <InputGroup.Text id='inputGroup-sizing-default'>
                    Width
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl lg='5' aria-label='Default' type='number' />
                <InputGroup.Append>
                  <InputGroup.Text>{unit[1]}</InputGroup.Text>
                </InputGroup.Append>
              </InputGroup>
            </Col>
            <Col>
              <InputGroup lg='2'>
                <InputGroup.Prepend>
                  <InputGroup.Text id='inputGroup-sizing-default'>
                    Height
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl lg='5' aria-label='Default' type='number' />
                <InputGroup.Append>
                  <InputGroup.Text>{unit[1]}</InputGroup.Text>
                </InputGroup.Append>
              </InputGroup>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Pallet;
