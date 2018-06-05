import React, {Fragment} from 'react';
import Navbar from './components/navigation/Navbar';
import AddNewCompanyForm from './components/forms/AddNewCompanyForm';

let AddNewScreen = () =>
  <Fragment>
    <Navbar />
    <AddNewCompanyForm />
  </Fragment>

export default AddNewScreen;
