import React from 'react';
import Ionicon from 'react-ionicons';
import {editable} from '../HOC/Editable';
import InputField from './InputField';
import {setCompany} from '../../actions';
import {connect} from 'react-redux';

let FinancialInfo = ({company, editMode, toggleEditable, handleChange, editCompany, setCompany}) =>
  <div className="border-box layout-vertical layout-vertical-align">
    <h3>Financial Performance</h3>
    <div className="content">
      <div className="layout-across layout-vertical-align">
        <Ionicon icon="ios-stats" fontSize="35px" color="#4fb9ff"/>Revenue:
      </div>
      {editMode ? <InputField handleChange={handleChange} row={'firstRow'} /> : <span>{company.financials.revenue}</span>}
    </div>
    <div className="content">
      <div className="layout-across layout-vertical-align">
        <Ionicon icon="ios-trending-up" fontSize="35px" color="#4fb9ff"/>Profit:
      </div>
      {editMode ? <InputField handleChange={handleChange} row={'secondRow'} /> : <span>{company.financials.profit}</span>}
    </div>
    <div className="content">
      <div className="layout-across layout-vertical-align">
        <Ionicon icon="ios-cash" fontSize="35px" color="#4fb9ff"/>Capital:
      </div>
      {editMode ? <InputField handleChange={handleChange} row={'thirdRow'} /> : <span>{company.financials.capital}</span>}
    </div>
    {editMode ? <button onClick={event => {
      setCompany(editCompany(company, 'financials'));
      toggleEditable();
      }}>
      save
    </button> : <button onClick={event => toggleEditable()}>edit</button>}
  </div>

let mapDispatchToProps = dispatch => ({setCompany: (lead) => dispatch(setCompany(lead)) });
let mapStateToProps = state => state;
export default editable(connect(mapStateToProps, mapDispatchToProps)(FinancialInfo));
