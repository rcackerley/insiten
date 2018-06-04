import React from 'react';
import Ionicon from 'react-ionicons';
import {editable} from '../HOC/Editable';

let CompanyInfo = ({company, toggleEditable}) =>
  <div className="border-box layout-vertical layout-vertical-align">
    <img className="avatar" src={company.logo} />
    <div className="content">
      <div className="layout-across layout-vertical-align">
        <Ionicon icon="ios-mail" fontSize="35px" color="#4fb9ff"/>Company Email:
      </div>
      <span>{company.email}</span>
    </div>
    <div className="content">
      <div className="layout-across layout-vertical-align">
        <Ionicon icon="ios-call" fontSize="35px" color="#4fb9ff"/>Company Phone:
      </div>
      <span>{company.phone}</span>
    </div>
    <div className="content">
      <div className="layout-across layout-vertical-align">
        <Ionicon icon="ios-home" fontSize="35px" color="#4fb9ff"/>Company Address:
      </div>
      <span>{company.address}</span>
    </div>
    <button onClick={event => toggleEditable()}>edit</button>
  </div>



export default editable(CompanyInfo);
