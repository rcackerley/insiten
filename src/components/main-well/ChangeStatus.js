import React from 'react';

let ChangeStatus = ({status}) =>
  <select>
    <option selected={status === 'Researching' ? 'selected' : null} value="lead">Researching</option>
    <option selected={status === 'Pending Approval' ? 'selected' : null} value="pending approval">Pending Approval</option>
    <option selected={status === 'Approved' ? 'selected' : null} value="approved">Approved</option>
    <option selected={status === 'Declined' ? 'selected' : null} value="declined">Declined</option>
  </select>


export default ChangeStatus;
