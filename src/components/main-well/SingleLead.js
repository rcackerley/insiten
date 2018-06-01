import React from 'react';
import SectionHeader from './SectionHeader';
import ChangeStatus from './ChangeStatus';
import CompanyInfo from './CompanyInfo';

let SingleLead = ({company}) =>
  <div className="main-body layout-vertical">
    <div className="layout-across layout-space-between">
      <SectionHeader company={company} />
      <ChangeStatus />
    </div>
    <div className="layout-across">
      <CompanyInfo company={company} />
    </div>
  </div>


export default SingleLead;
