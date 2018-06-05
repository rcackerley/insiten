import React from 'react';
import SectionHeader from '../main-well/SectionHeader';

class AddNewCompanyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      phone: '',
      address: '',
      revenue: '',
      profit: '',
      capital: ''
    }
  }
  render() {
    return (
      <div className="main-body layout-vertical">
        <SectionHeader name={'Add'} />
        <input placeholder={'Company Name'} />
        <input placeholder={'Email Address'}/>
        <input placeholder={'Phone Number'}/>
        <input placeholder={'Address'}/>
        <input placeholder={'Revenue'}/>
        <input placeholder={'Profit'}/>
        <input placeholder={'Capital'}/>
        <input onChange={event => console.log(event.target.value)} type="file" />
        <select>
          <option value="Researching">Researching</option>
          <option value="Pending Approval">Pending Approval</option>
          <option value="Approved">Approved</option>
          <option value="Declined">Declined</option>
        </select>
        <button>Add Company</button>
      </div>
    )
  }
}

export default AddNewCompanyForm;
