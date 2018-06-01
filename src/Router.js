import React, {Fragment} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App';
import LeadScreen from './LeadScreen';

let RouterComp = () =>
  <Router>
    <Fragment>
      <Route exact path="/" component={App} />
      <Route path="/leads:id" component={LeadScreen} />
    </Fragment>
  </Router>

export default RouterComp;
