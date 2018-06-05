import React from 'react';
import SectionHeader from './SectionHeader';
import ChangeStatus from './ChangeStatus';
import CompanyInfo from './CompanyInfo';
import FinancialInfo from './FinancialInfo';
import KeyContacts from './KeyContacts';
import {connect} from 'react-redux';
import {deleteCompany} from '../../actions';
import {withRouter} from 'react-router-dom';
import Ionicon from 'react-ionicons';

class SingleLead extends React.Component {

  render() {
    let {id, leads, deleteCompany, history} = this.props;
    let returnedCompany = leads.filter(lead => id === lead.id);
    let company = returnedCompany[0]
    return (
      <div className="main-body layout-vertical">
        <div className="layout-across layout-space-between">
          <div className="layout-across">
            <SectionHeader company={company} />
            <button className="delete-button" onClick={event => {
              deleteCompany(company);
              history.push('/')}}
            >
              Delete Company</button>
          </div>
          <ChangeStatus company={company} />
        </div>
        <div className="layout-across wrap">
          <CompanyInfo company={company} />
          <FinancialInfo company={company}/>
          <KeyContacts company={company}/>
        </div>
      </div>
    )
  }
}

let mapStateToProps = state => ({leads: state.leads})
let mapDispatchToProps = dispatch => ({deleteCompany: (company) => dispatch(deleteCompany(company)) });
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SingleLead));
