import React from 'react';
import {editable} from '../HOC/Editable';

let KeyContacts = ({contacts, toggleEditable}) =>
  <div className="border-box layout-vertical layout-vertical-align">
    <h3>Contacts</h3>
      {
        contacts.map((contact, i) =>
          <div key={i + 'contact'} className="content">
            <div className="layout-across layout-vertical-align">
              <img className="avatar" src={contact.img}/>
            </div>
            <div>
              full name:
              <br />
              email:
            </div>
            <div className="layout-vertical">
              <span>{contact.name}</span>
              <span>{contact.email}</span>
            </div>
          </div>
        )
      }
      <button onClick={event => toggleEditable()}>edit</button>
  </div>

export default editable(KeyContacts);
