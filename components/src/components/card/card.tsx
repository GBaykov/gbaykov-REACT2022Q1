import React, { Component } from 'react';
import './card.css';
import { ICardProps, ICardState } from '../../types/types';

export default class Сard extends Component<ICardProps, ICardState> {
  onCardClick = () => {
    const { character } = this.props;
    if (character) this.props.onCardClick(character);
  };
  render() {
    const { character } = this.props;
    const card =
      character == null ? null : (
        <section className="card" onClick={this.onCardClick}>
          <img src={character.image} alt="image of character" className="card-img" />
          <p>{`name: ${character.name}`}</p>
          <p>{`gender: ${character.gender}`}</p>
          <p>{`status: ${character.status}`}</p>
        </section>
      );
    return card;
  }
}
