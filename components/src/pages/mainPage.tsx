import React, { Component } from 'react';
import Cards from '../components/cards';
import SearchBar from '../components/input';
import './main.css';

export default class MainPage extends Component {
  render() {
    return (
      <main className="main">
        <div>Main Page</div>
        <SearchBar />
        <Cards />
      </main>
    );
  }
}
