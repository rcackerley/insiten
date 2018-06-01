import React from 'react';

let SectionHeader = ({company}) => {
  return (
    company ? <h2>{company.name}</h2> : <h2>Pipeline</h2>
  )
}


export default SectionHeader;
