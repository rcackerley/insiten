import React from 'react';
import {connect} from 'react-redux';
import {setStatus} from '../../actions';
import {editCompanyStatus} from '../../util/funcs';

let ChangeStatus = ({company, setStatus}) =>
  <select onChange={event => setStatus(editCompanyStatus(company, event.target.value)) }>
    <option selected={company.status === 'Researching' ? 'selected' : null} value="Researching">Researching</option>
    <option selected={company.status === 'Pending Approval' ? 'selected' : null} value="Pending Approval">Pending Approval</option>
    <option selected={company.status === 'Approved' ? 'selected' : null} value="Approved">Approved</option>
    <option selected={company.status === 'Declined' ? 'selected' : null} value="Declined">Declined</option>
  </select>


let mapStateToProps = state => state;
let mapDispatchToProps = dispatch => ({setStatus: (lead) => dispatch(setStatus(lead)) });
export default connect(mapStateToProps, mapDispatchToProps)(ChangeStatus);
