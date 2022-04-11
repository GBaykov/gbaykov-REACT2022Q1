import React, { Component } from 'react';
import { ICardsProps, ICardsState } from '../../types/types';
import Card from '../card';
import './cards.css';
import Api from '../../services/api';
import { Character } from '../../types/api-interfacies';

export default class Cards extends Component<ICardsProps, ICardsState> {
  api = new Api();
  state = {
    inputValue: '',
    characters: [],
  };

  componentDidUpdate(prevProps: ICardsProps) {
    if (this.props.inputValue !== prevProps.inputValue) {
      this.addCharacter();
    }
  }

  addCharacter = () => {
    this.setState({ inputValue: this.props.inputValue });
    return this.api.getCharacter(this.props.inputValue).then((characters) => {
      this.setState({ characters });
    });
  };

  render() {
    const { characters } = this.state;
    if (characters == null || !characters) {
      return null;
    }
    const cardsList = characters.map((character: Character | null) => {
      if (character == null) return null;
      console.log(character);
      return (
        <section className="card" key={character.id}>
          <img src={character.image} alt="image of character" />
          <p>{`name: ${character.name}`}</p>
          <p>{`gender: ${character.gender}`}</p>
          <p>{`status: ${character.status}`}</p>
          <p>{`origin: ${character.origin}`}</p>
        </section>
      );
    });

    if (this.state.characters == null) return null;
    return <section className="cards-field">{cardsList}</section>;
  }
}
