import React, { Component } from 'react';
import { ICardsProps, ICardsState } from '../../types/types';
import Card from '../card';
import './cards.css';
import Api from '../../services/api';
import { Character } from '../../types/api-interfacies';

export default class Cards extends Component<ICardsProps, ICardsState> {
  state = {
    inputValue: '',
    characters: null,
  };
  api = new Api();
  componentDidUpdate(prevProps: ICardsProps) {
    // this.setState({ inputValue: this.props.inputValue });
    if (this.props.inputValue !== prevProps.inputValue) {
      this.setState({ inputValue: this.props.inputValue });
      this.addCharacter();
    }
    // this.setState({ inputValue: this.props.inputValue });
  }
  addCharacter = () => {
    this.api.getCharacter(this.props.inputValue).then((characters) => {
      console.log(characters);
      this.setState({ characters });
    });
  };

  render() {
    return (
      <section className="cards-field">
        <Card />
        <Card />
        <Card />
        <Card />
      </section>
    );
  }
}
