import React from 'react';
import {connect} from 'react-redux';
import {setCompany} from '../../actions';
import {editCompanyStatus} from '../../util/funcs';

let ChangeStatus = ({company, setCompany}) =>
  <select defaultValue={company.status} onChange={event => setCompany(editCompanyStatus(company, event.target.value)) }>
    <option value="Researching">Researching</option>
    <option value="Pending Approval">Pending Approval</option>
    <option value="Approved">Approved</option>
    <option value="Declined">Declined</option>
  </select>


let mapStateToProps = state => state;
let mapDispatchToProps = dispatch => ({setCompany: (lead) => dispatch(setCompany(lead)) });
export default connect(mapStateToProps, mapDispatchToProps)(ChangeStatus);
