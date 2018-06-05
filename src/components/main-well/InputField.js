import React from 'react';

let InputField = ({handleChange, row}) =>
  <input onChange={event => handleChange(event, row)} />


export default InputField;
