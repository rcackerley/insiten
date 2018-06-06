import React from 'react';
import SectionHeader from './SectionHeader';
import {combineContacts} from '../../util/funcs';
import {connect} from 'react-redux';

let ContactsList = ({contacts}) =>
  <div className="main-body layout-vertical">
    <SectionHeader name={'Contacts'} />
      <table className="animated fadeIn contact-table">
        <tbody>
          <tr>
            <th>name</th>
            <th>email</th>
            <th className="hide-for-mobile">company</th>
          </tr>
    {
      contacts.map(contact =>
        <tr key={contact.id}>
          <td className="layout-vertical-align layout-across"><img className="avatar" src={contact.img} />{contact.name}</td>
          <td>{contact.email}</td>
          <td className="hide-for-mobile">{contact.company}</td>
        </tr>
      )
    }
      </tbody>
    </table>
  </div>

let mapStateToProps = state => ({contacts: combineContacts(state.leads)})
export default connect(mapStateToProps)(ContactsList);
