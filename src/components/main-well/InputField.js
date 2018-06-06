import React from 'react';

let InputField = ({handleChange, row, placeholder, value}) =>
  <input className="animated fadeIn" value={value} placeholder={placeholder} onChange={event => handleChange(event, row)} />


export default InputField;
