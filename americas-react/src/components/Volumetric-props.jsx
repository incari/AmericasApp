import React from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';

const Volumetric = props => {
  const { measure, label } = props;

  const handleChange = event => {
    console.log(event);
  };

  const handleSubmit = event => {
    event.preventDefault();
  };
  return (
    <>
      <InputGroup className='mb-3'>
        <InputGroup.Prepend></InputGroup.Prepend>
        <FormControl
          onSubmit={() => handleSubmit()}
          onChange={() => handleChange()}
          placeholder={measure}
          type='number'
        />
        <InputGroup.Append>
          <InputGroup.Text>{label}</InputGroup.Text>
        </InputGroup.Append>
      </InputGroup>
    </>
  );
};

export default Volumetric;
