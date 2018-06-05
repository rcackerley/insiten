import React from 'react';
import SectionHeader from './SectionHeader';
import ChangeStatus from './ChangeStatus';
import CompanyInfo from './CompanyInfo';
import FinancialInfo from './FinancialInfo';
import KeyContacts from './KeyContacts';
import EditButton from './EditButton';
import {connect} from 'react-redux';

class SingleLead extends React.Component {

  render() {
    let {id, leads} = this.props;
    let returnedCompany = leads.filter(lead => id === lead.id);
    let company = returnedCompany[0]
    return (
      <div className="main-body layout-vertical">
        <div className="layout-across layout-space-between">
          <div className="layout-across">
            <SectionHeader company={company} />
          </div>
          <ChangeStatus company={company} />
        </div>
        <div className="layout-across wrap">
          <CompanyInfo company={company} />
          <FinancialInfo company={company}/>
          <KeyContacts contacts={company.contacts}/>
        </div>
      </div>
    )
  }
}

let mapStateToProps = state => ({leads: state.leads})
export default connect(mapStateToProps)(SingleLead);
