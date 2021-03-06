import React from 'react';
import SectionHeader from '../main-well/SectionHeader';
import {addCompany} from '../../actions';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

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
      capital: '',
      img: '',
      status: ''
    }
  }
  render() {
    let {name, email, phone, address, revenue, profit, capital, img, status} = this.state;
    let {addCompany, history} = this.props;
    let createCompany = (name, email, phone, address, revenue, profit, capital, img, status) => {
      console.log('here')
    return  ({
        'name': name,
        'email': email,
        'phone': phone,
        'address': address,
        'logo': img,
        contacts: [],
        'status': status,
        financials: {
          'revenue': revenue,
          'profit': profit,
          'capital': capital,
        },
        id: Math.floor((Math.random() * 1000) + 1)
      }
    )}

    let handleChange = (event, row ) => {
      this.setState({[row]: event.target.value})
    }

    return (
      <div className="main-body layout-vertical animated fadeIn">
        <SectionHeader name={'Add'} />
        <div className="layout-vertical form">
          <input onChange={event => handleChange(event, 'name') } placeholder={'Company Name'} />
          <input onChange={event => handleChange(event, 'email') } placeholder={'Email Address'}/>
          <input onChange={event => handleChange(event, 'phone') } placeholder={'Phone Number'}/>
          <input onChange={event => handleChange(event, 'address') } placeholder={'Address'}/>
          <input onChange={event => handleChange(event, 'revenue') } placeholder={'Revenue'}/>
          <input onChange={event => handleChange(event, 'profit') } placeholder={'Profit'}/>
          <input onChange={event => handleChange(event, 'capital') } placeholder={'Capital'}/>
          <input onChange={event => handleChange(event, 'img') } placeholder={"Image URL"} />
          <select onChange={event => handleChange(event, 'status') }>
            <option value="Researching">Researching</option>
            <option value="Pending Approval">Pending Approval</option>
            <option value="Approved">Approved</option>
            <option value="Declined">Declined</option>
          </select>
          <button onClick={
            event => {addCompany(createCompany(name, email, phone, address, revenue, profit, capital, img, status));
            history.push('/')
            }
          }>
            Add Company</button>
        </div>
      </div>
    )
  }
}

let mapStateToProps = state => state;
let mapDispatchToProps = dispatch => ({addCompany: (company) => dispatch(addCompany(company)) });
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddNewCompanyForm));
