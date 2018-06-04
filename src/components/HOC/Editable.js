import React from 'react';

export let editable = (WrappedComponent) => {
  return class HOC extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isEditable: false
      }
    }

    render() {

      let toggleEditable = () => {
        let newStatus = !this.state.isEditable;
        this.setState({isEditable: newStatus})
      }
      let {isEditable} = this.state;

      return (
        <WrappedComponent {...this.props} toggleEditable={toggleEditable} editMode={isEditable} />
      )
    }
  }
}
