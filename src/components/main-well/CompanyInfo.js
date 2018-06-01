import React from 'react';
import Ionicon from 'react-ionicons';

let CompanyInfo = ({company}) =>
  <div className="border-box layout-vertical layout-vertical-align">
    <img className="avatar" src={company.logo} />
    <p>
      <div className="layout-across layout-vertical-align">
        <Ionicon icon="ios-mail" fontSize="35px" color="#4fb9ff"/>Company Email:
      </div>
      <span>{company.email}</span>
    </p>
    <p>
      <div className="layout-across layout-vertical-align">
        <Ionicon icon="ios-call" fontSize="35px" color="#4fb9ff"/>Company Phone:
      </div>
      <span>{company.phone}</span>
    </p>
    <p>
      <div className="layout-across layout-vertical-align">
        <Ionicon icon="ios-home" fontSize="35px" color="#4fb9ff"/>Company Address:
      </div>
      <span>{company.address}</span>
    </p>
  </div>



export default CompanyInfo;
