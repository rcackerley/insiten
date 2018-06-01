import React from 'react';
import Ionicon from 'react-ionicons'
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

let LeadTable = ({leads}) => {
  return (
    leads.map(company =>
    <table key={company.id}>
      <tbody>
        <tr>
          <th>Lead</th>
          <th>email</th>
          <th>Phone</th>
          <th>Status</th>
          <th></th>
        </tr>
        <tr>
          <td className="layout-vertical-align layout-across">
            <img className="avatar" src={company.logo} />
            {company.name}
          </td>
          <td><Link to={'mailto:' + company.email}>{company.email}</Link></td>
          <td>{company.phone}</td>
          <td>
            <select>
              <option selected={company.status === 'Researching' ? 'selected' : null} value="lead">Researching</option>
              <option selected={company.status === 'Pending Approval' ? 'selected' : null} value="pending approval">Pending Approval</option>
              <option selected={company.status === 'Approved' ? 'selected' : null} value="approved">Approved</option>
              <option selected={company.status === 'Declined' ? 'selected' : null} value="declined">Declined</option>
            </select>
          </td>
          <td>
            <Link to={{pathname: `/leads/${company.name.replace(' ', '')}`}}>
              <button className="view-lead-button layout-across layout-vertical-align">
                View Lead
                <Ionicon icon="ios-arrow-dropright-circle" fontSize="25px" color="#4fb9ff"/>
              </button>
            </Link>
          </td>
        </tr>
      </tbody>
    </table>
  )
  )
}

let mapStateToProps = state => ({leads: state.leads});
export default connect(mapStateToProps)(LeadTable);
