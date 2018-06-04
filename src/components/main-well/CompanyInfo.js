import React from 'react';
import Ionicon from 'react-ionicons';
import {editable} from '../HOC/Editable';
import InputField from './InputField';
import {setCompany} from '../../actions';
import {connect} from 'react-redux';

let CompanyInfo = ({company, toggleEditable, editMode, handleChange, editCompany, setCompany}) =>
  <div className="border-box layout-vertical layout-vertical-align">
    <img className="avatar" src={company.logo} />
    <div className="content">
      <div className="layout-across layout-vertical-align">
        <Ionicon icon="ios-mail" fontSize="35px" color="#4fb9ff"/>Company Email:
      </div>
      {editMode ? <InputField handleChange={handleChange} row={'firstRow'} /> : <span>{company.email}</span>}
    </div>
    <div className="content">
      <div className="layout-across layout-vertical-align">
        <Ionicon icon="ios-call" fontSize="35px" color="#4fb9ff"/>Company Phone:
      </div>
      {editMode ? <InputField handleChange={handleChange} row={'secondRow'} /> : <span>{company.phone}</span>}
    </div>
    <div className="content">
      <div className="layout-across layout-vertical-align">
        <Ionicon icon="ios-home" fontSize="35px" color="#4fb9ff"/>Company Address:
      </div>
      {editMode ? <InputField handleChange={handleChange} row={'thirdRow'} /> : <span>{company.address}</span>}
    </div>
    {editMode ? <button onClick={event => {
      setCompany(editCompany(company));
      toggleEditable();
      }}>
      save
    </button> :<button onClick={event => toggleEditable()}>edit</button>}
  </div>


let mapDispatchToProps = dispatch => ({setCompany: (lead) => dispatch(setCompany(lead)) });
let mapStateToProps = state => state;
export default editable(connect(mapStateToProps, mapDispatchToProps)(CompanyInfo));
