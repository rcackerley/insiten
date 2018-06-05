import React from 'react';
import {withRouter} from 'react-router-dom';

let AddButton = ({history}) =>
  <button onClick={event => history.push('/add')} className="add-button">Add New</button>

export default withRouter(AddButton);
