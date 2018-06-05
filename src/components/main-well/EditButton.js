import React from 'react';
import Ionicon from 'react-ionicons'

let EditButton = ({toggleEditable}) =>
    <Ionicon onClick={event => toggleEditable() }className="editButton" icon="ios-create" fontSize="25px" color="#4fb9ff"/>

export default EditButton
