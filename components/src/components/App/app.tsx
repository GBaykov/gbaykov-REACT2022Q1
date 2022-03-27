import React, { Component } from 'react';
import MainPage from '../../pages/mainPage';
import Header from '../header';

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <MainPage />
      </React.Fragment>
    );
  }
}
