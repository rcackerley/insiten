import React from 'react';
import SingleContact from './SingleContact';
import _ from 'lodash';
import {createContact} from '../../util/funcs';
import {setCompany} from '../../actions';
import {connect} from 'react-redux';
import Ionicon from 'react-ionicons';

class KeyContacts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addContact: false,
      name: '',
      email: '',
      img: ''

    }
  }
  render() {
    let {setCompany} = this.props;
    let {addContact} = this.state;

    let toggleEditable = () => {
      let newStatus = !this.state.addContact;
      this.setState({addContact: newStatus})
    }

    let handleChange = (event, row) =>
      this.setState({[row]: event.target.value})

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
          {
            addContact &&
              <form>
                <input onChange={event => handleChange(event, 'name')} placeholder={'Name'}/>
                <input onChange={event => handleChange(event, 'email')} placeholder={'Email'}/>
                <input onChange={event => handleChange(event, 'img')} placeholder={'Image URL'}/>
              </form>
          }
        {addContact ?
          <button onClick={
            event => {
              setCompany(editContact(company, createContact(this.state.name, this.state.email, this.state.img)));
              toggleEditable()
            }}
          >save</button>
          : <button className="edit-button" onClick={event => toggleEditable()}>add contact
          <Ionicon icon="ios-person-add" fontSize="25px" color="white"/></button>}
      </div>
    )
  }
}

let mapStateToProps = state => state;
let mapDispatchToProps = dispatch => ({setCompany: (company) => dispatch(setCompany(company)) });
export default connect(mapStateToProps, mapDispatchToProps)(KeyContacts);
