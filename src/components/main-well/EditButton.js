import React from 'react';
import Ionicon from 'react-ionicons'

let EditButton = ({toggleEditable}) =>
    <button className="edit-button" onClick={
      event => toggleEditable()}>edit
      <Ionicon icon="ios-build" fontSize="25px" color="white"/>
    </button>

export default EditButton
