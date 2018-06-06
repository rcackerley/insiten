import React from 'react';
import InputField from './InputField';
import {createContact} from '../../util/funcs';
import {setCompany} from '../../actions';
import {connect} from 'react-redux';
import Ionicon from 'react-ionicons'

class SingleContact extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fullnameEdited: '',
      emailEdited: '',
      editMode: false
    }
  }

  render() {
    let {contact, editContact, company, setCompany} = this.props;
    let {editMode} = this.state;
    let toggleEditable = () => {
      let newStatus = !this.state.editMode;
      this.setState({editMode: newStatus})
    }

    let handleChange = (event, row) =>
      this.setState({[row]: event.target.value})

    return (
      <div className="content">
        <div className="layout-across layout-vertical-align">
          <img className="avatar" src={contact.img}/>
          <div className="text-info">
            <div className="contact-info">full name:</div>
            <div className="contact-info">email:</div>
          </div>
          <div className="layout-vertical">
            {editMode ? <InputField value={contact.name} row={'fullnameEdited'} handleChange={handleChange}/> :  <span className="contact">{contact.name}</span> }
            {editMode ? <InputField value={contact.email} row={'emailEdited'} handleChange={handleChange}/> :  <span className="contact">{contact.email}</span>}
          </div>
        </div>
        {editMode ?
          <Ionicon className="icon-link" fontSize="50px" color="green" icon='ios-checkmark' onClick={
            event => {
              setCompany(editContact(company, createContact(this.state.fullnameEdited, this.state.emailEdited, contact.img, contact.id)));
              toggleEditable()
            }}
          />
        : <Ionicon className="icon-link" onClick={event => toggleEditable()} icon="ios-build" fontSize="25px" color="#768894"/>}
      </div>
    )
  }
}

let mapStateToProps = state => state;
let mapDispatchToProps = dispatch => ({setCompany: (company) => dispatch(setCompany(company)) });
export default connect(mapStateToProps, mapDispatchToProps)(SingleContact);
