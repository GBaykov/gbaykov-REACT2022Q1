import React, { Component } from 'react';
import Cards from '../components/cards';
import Modal from '../components/modal';
import SearchBar from '../components/search';
import { Character } from '../types/api-interfacies';
import { IMainPageProps, IMainPageState } from '../types/types';
import './main.css';

export default class MainPage extends Component<IMainPageProps, IMainPageState> {
  state = { inputValue: '', character: null, isModal: true };
  onSearchSubmit = (inputValue: null | string) => {
    this.setState({ inputValue });
  };
  onCardClick = (character: Character) => {
    this.setState({ character });
  };
  closeOpenModal = (isModal: boolean) => {
    this.setState({ isModal });
  };
  render() {
    const modal = this.state.isModal ? (
      <Modal character={this.state.character} closeOpenModal={this.closeOpenModal} />
    ) : null;
    return (
      <main className="main">
        <h1>Main Page</h1>
        <SearchBar onSearchSubmit={this.onSearchSubmit} />
        <Cards
          inputValue={this.state.inputValue}
          onCardClick={this.onCardClick}
          closeOpenModal={this.closeOpenModal}
        />
        {modal}
      </main>
    );
  }
}
