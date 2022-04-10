import React, { Component } from 'react';
import Header from '../header';
import { BrowserRouter } from 'react-router-dom';
import Api from '../../services/api';
const api = new Api();
api.getCharacter('Rick', 'Alive', 2);

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
  }
}
