import React from 'react';
import Ionicon from 'react-ionicons'
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import ChangeStatus from './ChangeStatus';
import _ from 'lodash';

let LeadTable = ({leads}) => {
  let sortedLeads = _.sortBy(leads, [function(o) { return o.name; }]);
  return (
    <table className="animated fadeIn">
      <tbody>
        <tr>
          <th>Lead</th>
          <th className="hide-for-mobile">email</th>
          <th className="hide-for-tablet">Phone</th>
          <th className="hide-for-xsmall">Status</th>
          <th></th>
        </tr>
        { sortedLeads.map(company =>
          <tr key={company.id}>
            <td className="layout-vertical-align layout-across">
              <img className="avatar" src={company.logo} />
              {company.name}
            </td>
            <td className="hide-for-mobile"><Link to={'mailto:' + company.email}>{company.email}</Link></td>
            <td className="hide-for-tablet">{company.phone}</td>
            <td className="hide-for-xsmall">
              <ChangeStatus company={company} />
            </td>
            <td>
              <Link to={
                {pathname: `/leads/${company.name.replace(' ', '')}`,
                state: {id: company.id}
              }}>
                <button className="view-lead-button layout-across layout-vertical-align">
                  View Lead
                  <Ionicon icon="ios-arrow-dropright-circle" fontSize="25px" color="#4fb9ff"/>
                </button>
              </Link>
            </td>
          </tr>
        )}
      </tbody>
    </table>
  )
}

let mapStateToProps = state => ({leads: state.leads});
export default connect(mapStateToProps)(LeadTable);
