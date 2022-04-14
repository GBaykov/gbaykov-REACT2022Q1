import React, { Component } from 'react';
import Cards from '../components/cards';
import Modal from '../components/modal';
import SearchBar from '../components/search';
import { Character } from '../types/api-interfacies';
import { IMainPageProps, IMainPageState } from '../types/types';
import './main.css';

export default class MainPage extends Component<IMainPageProps, IMainPageState> {
  state = { inputValue: '', character: null };
  onSearchSubmit = (inputValue: null | string) => {
    this.setState({ inputValue });
  };
  onCardClick = (character: Character) => {
    this.setState({ character });
  };
  render() {
    return (
      <main className="main">
        <h1>Main Page</h1>
        <SearchBar onSearchSubmit={this.onSearchSubmit} />
        <Cards inputValue={this.state.inputValue} onCardClick={this.onCardClick} />
        <Modal character={this.state.character} />
      </main>
    );
  }
}
