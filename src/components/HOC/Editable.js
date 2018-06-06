import React from 'react';

export let editable = (WrappedComponent) => {
  return class HOC extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isEditable: false,
        firstRow: '',
        secondRow: '',
        thirdRow: ''
      }
    }

    render() {
      let {firstRow, secondRow, thirdRow, isEditable} = this.state;

      let editCompany = (company, location) => {
        return location === 'financials' ? {...company, financials:
          {...company.financials, revenue: firstRow, profit: secondRow, capital: thirdRow}}
          : {...company, email: firstRow, phone: secondRow, address: thirdRow}
      }

      let handleChange = (event, row ) =>
        this.setState({[row]: event.target.value})

      let toggleEditable = () => {
        let newStatus = !this.state.isEditable;
        this.setState({isEditable: newStatus})
      }

      return (
        <WrappedComponent {...this.props} handleChange={handleChange} toggleEditable={toggleEditable} editMode={isEditable} editCompany={editCompany} />
      )
    }
  }
}
