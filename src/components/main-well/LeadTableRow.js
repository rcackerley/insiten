import React from 'react';
import {Link} from 'react-router-dom';
import ChangeStatus from './ChangeStatus';
import Ionicon from 'react-ionicons'

let LeadTableRow = ({company}) =>
  <tr>
    <td className="layout-vertical-align layout-across">
      <img alt="company logo" className="avatar" src={company.logo} />
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

export default LeadTableRow;
