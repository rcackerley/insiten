import React from 'react';
import SingleContact from './SingleContact';
import {compareNames} from '../../util/funcs';
import _ from 'lodash';

class KeyContacts extends React.Component {
  render() {

    let editContact = (company, contact) => ({
      ...company, contacts: company.contacts.filter(existingContact => existingContact.id !== contact.id).concat([contact])
    })

    let {company} = this.props;
    let o = company.contacts[0]
    let sortedContacts = _.sortBy(company.contacts, [function(o) { return o.name; }]);
    return (
      <div className="border-box layout-vertical layout-vertical-align">
        <h3>Contacts</h3>
          {
            sortedContacts.map((contact, i) =>
              <SingleContact key={i + 'contact'} contact={contact} editContact={editContact} company={company} />
            )
          }
      </div>
    )
  }
}

export default KeyContacts;
