import React, { Component } from 'react';
import { ICardsProps, ICardsState } from '../../types/types';
import Card from '../card';
import './cards.css';
import Api from '../../services/api';
import { Character } from '../../types/api-interfacies';
import Spinner from '../spinner';

export default class Cards extends Component<ICardsProps, ICardsState> {
  api = new Api();
  state = {
    inputValue: '',
    characters: [],
    isLoading: false,
  };

  componentDidUpdate(prevProps: ICardsProps) {
    if (this.props.inputValue !== prevProps.inputValue) {
      this.setState({ inputValue: this.props.inputValue });
      this.addCharacter();
    }
    // this.setState({ isLoading: false });
  }

  addCharacter = async () => {
    await this.setState({ isLoading: true });
    const characters = await this.api.getCharacter(this.props.inputValue);
    this.setState({ characters });
    this.setState({ isLoading: false });
  };

  render() {
    const { characters, isLoading } = this.state;
    if (characters == null || !characters) {
      return null;
    }
    if (isLoading) return <Spinner />;

    return (
      <section className="cards-field">
        {characters.map((character: Character | null) => {
          if (character == null) return null;
          return <Card character={character} key={character.id} />;
        })}
      </section>
    );
  }
}
