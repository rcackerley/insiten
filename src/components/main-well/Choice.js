import React from 'react';
import {setCompany} from '../../actions';
import {connect} from 'react-redux';
import Ionicon from 'react-ionicons';

let Choice = ({setCompany, toggleEditable, editCompany, company, financials}) =>
  <div>
    <Ionicon className="icon-link" fontSize="50px" color="green" icon='ios-checkmark' onClick={event => {
      setCompany(editCompany(company, financials));
      toggleEditable();
      }}
    />
    <Ionicon className="icon-link" fontSize="50px" color="red" icon='ios-close' onClick={event =>
    toggleEditable()
    }
    />
  </div>


let mapDispatchToProps = dispatch => ({setCompany: (lead) => dispatch(setCompany(lead)) });
let mapStateToProps = state => state;
export default connect(mapStateToProps, mapDispatchToProps)(Choice);
