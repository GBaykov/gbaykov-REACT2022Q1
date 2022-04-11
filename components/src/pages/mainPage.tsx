import React, { Component } from 'react';
import Cards from '../components/cards';
import SearchBar from '../components/search';
import './main.css';

export default class MainPage extends Component {
  state = { inputValue: '' };
  onSearchSubmit = (inputValue: null | string) => {
    this.setState({ inputValue });
  };
  render() {
    return (
      <main className="main">
        <h1>Main Page</h1>
        <SearchBar onSearchSubmit={this.onSearchSubmit} />
        <Cards inputValue={this.state.inputValue} />
      </main>
    );
  }
}
