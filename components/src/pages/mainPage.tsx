import React, { Component } from 'react';
import Cards from '../components/cards';
import SearchBar from '../components/search';
import './main.css';

export default class MainPage extends Component {
  render() {
    return (
      <main className="main">
        <h1>Main Page</h1>
        <SearchBar />
        <Cards />
      </main>
    );
  }
}
