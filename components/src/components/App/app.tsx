import React, { Component } from 'react';
import Header from '../header';
import { BrowserRouter } from 'react-router-dom';
import Api from '../../services/api';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
  }
}
