import React, {Fragment} from 'react';
import Navbar from './components/navigation/Navbar';
import ContactsList from './components/main-well/ContactsList';

let ContactsScreen = () =>
  <Fragment>
    <Navbar />
    <ContactsList />
  </Fragment>

export default ContactsScreen;
