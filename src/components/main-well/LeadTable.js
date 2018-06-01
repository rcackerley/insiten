import React from 'react';
import Ionicon from 'react-ionicons'
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import ChangeStatus from './ChangeStatus';

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
            <ChangeStatus status={company.status} />
          </td>
          <td>
            <Link to={
              {pathname: `/leads/${company.name.replace(' ', '')}`,
              state: {company}
            }}>
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
