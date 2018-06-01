import React, {Fragment} from 'react';
import Navbar from './components/navigation/Navbar';
import SingleLead from './components/main-well/SingleLead';

let LeadScreen = ({location}) =>
  <Fragment>
    <Navbar />
    <SingleLead company={location.state.company}  />
  </Fragment>


export default LeadScreen;
