import React, { Component } from 'react';
import Cards from '../components/cards';
import SearchBar from '../components/input';

export default class MainPage extends Component {
  render() {
    return (
      <main>
        <SearchBar />
        <Cards />
      </main>
    );
  }
}
