import React, { Component } from 'react';
import './card.css';
import { ICardProps, ICardState } from '../../types/types';

export default class Сard extends Component<ICardProps, ICardState> {
  render() {
    const { character } = this.props;
    console.log(character);
    const card =
      character == null ? null : (
        <section className="card">
          <p>{`name: ${character.name}`}</p>
          <p>{`gender: ${character.gender}`}</p>
          <p>{`status: ${character.status}`}</p>
          <p>{`origin: ${character.origin}`}</p>
        </section>
      );
    return { card };
  }
}
