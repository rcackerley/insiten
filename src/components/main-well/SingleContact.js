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
        </div>
        <div className="text-info">
          full name:
          <br />
          email:
        </div>
        <div className="layout-vertical">
          {editMode ? <InputField row={'fullnameEdited'} handleChange={handleChange}/> :  <span>{contact.name}</span> }
          {editMode ? <InputField row={'emailEdited'} handleChange={handleChange}/> :  <span>{contact.email}</span>}
        </div>
        {editMode ?
          <button onClick={
            event => {
              setCompany(editContact(company, createContact(this.state.fullnameEdited, this.state.emailEdited, contact.img, contact.id)));
              toggleEditable()
            }}
          >save</button>
        : <Ionicon className="icon-link" onClick={event => toggleEditable()} icon="ios-build" fontSize="25px" color="#768894"/>}
      </div>
    )
  }
}

let mapStateToProps = state => state;
let mapDispatchToProps = dispatch => ({setCompany: (company) => dispatch(setCompany(company)) });
export default connect(mapStateToProps, mapDispatchToProps)(SingleContact);
