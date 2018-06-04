import React from 'react';
import SectionHeader from './SectionHeader';
import ChangeStatus from './ChangeStatus';
import CompanyInfo from './CompanyInfo';
import FinancialInfo from './FinancialInfo';
import KeyContacts from './KeyContacts';
import EditButton from './EditButton';

class SingleLead extends React.Component {

  render() {
    let {company} = this.props;
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
          <FinancialInfo financials={company.financials}/>
          <KeyContacts contacts={company.contacts}/>
        </div>
      </div>
    )
  }
}


export default SingleLead;
