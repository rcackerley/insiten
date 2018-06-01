import React, {Fragment} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App';
import LeadScreen from './LeadScreen';
import ContactsScreen from './ContactsScreen';

let RouterComp = () =>
  <Router>
    <Fragment>
      <Route exact path="/" component={App} />
      <Route path="/lead:name" component={LeadScreen} />
      <Route path="/contacts" component={ContactsScreen} />
    </Fragment>
  </Router>

export default RouterComp;
