import React, { Component } from 'react';
import { ICardsProps, ICardsState } from '../../types/types';
import Card from '../card';
import './cards.css';
import Api from '../../services/api';
import { Character } from '../../types/api-interfacies';
import Spinner from '../spinner';
import ErrorMessage from '../errorMessage';

export default class Cards extends Component<ICardsProps, ICardsState> {
  api = new Api();
  state = {
    inputValue: '',
    characters: [],
    isLoading: false,
    isError: false,
  };

  componentDidUpdate(prevProps: ICardsProps) {
    if (this.props.inputValue !== prevProps.inputValue) {
      this.setState({ inputValue: this.props.inputValue });
      this.addCharacter();
    }
    // this.setState({ isLoading: false });
  }

  addCharacter = async () => {
    try {
      await this.setState({ isLoading: true });
      const characters = await this.api.getCharacter(this.props.inputValue);
      this.setState({ characters });
      this.setState({ isLoading: false });
      this.setState({ isError: false });
    } catch (err) {
      console.log(err);
      this.setState({ isLoading: false });
      this.setState({ isError: true });
    }
  };

  render() {
    const { characters, isLoading, isError } = this.state;
    const { onCardClick } = this.props;
    if (characters == null || !characters) {
      return null;
    }
    if (isLoading) return <Spinner />;
    if (isError) return <ErrorMessage />;
    return (
      <section className="cards-field">
        {characters.map((character: Character | null) => {
          if (character == null) return null;
          return <Card character={character} key={character.id} onCardClick={onCardClick} />;
        })}
      </section>
    );
  }
}
