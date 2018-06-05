import React from 'react';
import InputField from './InputField';

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
    let {contact} = this.props;
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
        <div>
          full name:
          <br />
          email:
        </div>
        <div className="layout-vertical">
          {editMode ? <InputField row={'fullnameEdited'} handleChange={handleChange}/> :  <span>{contact.name}</span> }
          {editMode ? <InputField row={'emailEdited'} handleChange={handleChange}/> :  <span>{contact.email}</span>}
        </div>
        {editMode ? <button>save</button> : <button onClick={event => toggleEditable()}>edit</button>}
      </div>
    )
  }
}

export default SingleContact;
