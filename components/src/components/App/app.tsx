import React, { Component } from 'react';
import MainPage from '../../pages/mainPage';
import Header from '../header';
import { BrowserRouter } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        {' '}
        <React.Fragment>
          <Header />
          {/* <MainPage /> */}
        </React.Fragment>
      </BrowserRouter>
    );
  }
}
