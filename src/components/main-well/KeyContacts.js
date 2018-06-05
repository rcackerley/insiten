import React from 'react';
import SingleContact from './SingleContact';

let KeyContacts = ({contacts, toggleEditable}) =>
  <div className="border-box layout-vertical layout-vertical-align">
    <h3>Contacts</h3>
      {
        contacts.map((contact, i) =>
          <SingleContact key={i + 'contact'} contact={contact} />
        )
      }
      
  </div>

export default KeyContacts;
