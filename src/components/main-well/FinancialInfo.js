import React from 'react';
import Ionicon from 'react-ionicons';
import {editable} from '../HOC/Editable';


let FinancialInfo = ({financials, editMode, toggleEditable}) =>
  <div className="border-box layout-vertical layout-vertical-align">
    <h3>Financial Performance</h3>
    <div className="content">
      <div className="layout-across layout-vertical-align">
        <Ionicon icon="ios-stats" fontSize="35px" color="#4fb9ff"/>Revenue:
      </div>
      {editMode ? <input /> : <span>{financials.revenue}</span>}
    </div>
    <div className="content">
      <div className="layout-across layout-vertical-align">
        <Ionicon icon="ios-trending-up" fontSize="35px" color="#4fb9ff"/>Profit:
      </div>
      <span>{financials.profit}</span>
    </div>
    <div className="content">
      <div className="layout-across layout-vertical-align">
        <Ionicon icon="ios-cash" fontSize="35px" color="#4fb9ff"/>Capital:
      </div>
      <span>{financials.capital}</span>
    </div>
    <button onClick={event => toggleEditable()}>edit</button>
  </div>

export default editable(FinancialInfo);
