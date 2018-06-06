import React from 'react';
import SectionHeader from './SectionHeader';
import AddButton from './AddButton';
import LeadTable from './LeadTable';

let MainBody = () =>
  <div className="main-body layout-vertical">
    <div className="layout-across layout-space-between">
      <SectionHeader name={'Pipeline'} />
      <AddButton />
    </div>
    <LeadTable />
  </div>

export default MainBody;
