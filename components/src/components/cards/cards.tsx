import React, { Component } from 'react';
import { ICardsProps, ICardsState } from '../../types/types';
import Card from '../card';
import './cards.css';

export default class Cards extends Component<ICardsProps, ICardsState> {
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
