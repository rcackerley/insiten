import React, { Component, Fragment } from 'react';
import './App.css';
import Navbar from './components/navigation/Navbar';
import MainBody from './components/main-well/MainBody';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <MainBody />
      </Fragment>
    );
  }
}

export default App;
