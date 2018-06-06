import React from 'react';
import {connect} from 'react-redux';
import LeadTableRow from './LeadTableRow';
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
          <LeadTableRow key={company.id} company={company} />
        )}
      </tbody>
    </table>
  )
}

let mapStateToProps = state => ({leads: state.leads});
export default connect(mapStateToProps)(LeadTable);
