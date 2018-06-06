import React from 'react';
import Ionicon from 'react-ionicons';
import {editable} from '../HOC/Editable';
import InputField from './InputField';
import {setCompany} from '../../actions';
import {connect} from 'react-redux';
import Choice from './Choice';
import EditButton from './EditButton';

let CompanyInfo = ({company, toggleEditable, editMode, handleChange, editCompany}) =>
  <div className="border-box layout-vertical layout-vertical-align">
    <img className="avatar" src={company.logo} />
    <div className="content">
      <div className="layout-across layout-vertical-align text-info">
        <Ionicon icon="ios-mail" fontSize="35px" color="#4fb9ff"/>Company Email:
      </div>
      {editMode ? <InputField placeholder={'Email'} handleChange={handleChange} row={'firstRow'} /> : <span>{company.email}</span>}
    </div>
    <div className="content">
      <div className="layout-across layout-vertical-align text-info">
        <Ionicon icon="ios-call" fontSize="35px" color="#4fb9ff"/>Company Phone:
      </div>
      {editMode ? <InputField placeholder={'Phone Number'} handleChange={handleChange} row={'secondRow'} /> : <span>{company.phone}</span>}
    </div>
    <div className="content">
      <div className="layout-across layout-vertical-align text-info">
        <Ionicon icon="ios-home" fontSize="35px" color="#4fb9ff"/>Company Address:
      </div>
      {editMode ? <InputField placeholder={'Address'} handleChange={handleChange} row={'thirdRow'} /> : <span>{company.address}</span>}
    </div>
    {editMode ?
      <Choice editCompany={editCompany} company={company} toggleEditable={toggleEditable} setCompany={setCompany} />
    : <EditButton toggleEditable={toggleEditable}/>}
  </div>

export default editable(CompanyInfo);
