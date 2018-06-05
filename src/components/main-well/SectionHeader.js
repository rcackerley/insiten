import React from 'react';

let SectionHeader = ({company, name}) => {
  return (
    company ? <h2>{company.name}</h2> : <h2>{name}</h2>
  )
}


export default SectionHeader;
