import React, { Component } from 'react';
import Card from '../card';
import './cards.css';

export default class Cards extends Component {
  render() {
    return (
      <>
        <div>Cards field</div>
        <section className="cards-field">
          <Card />
          <Card />
          <Card />
          <Card />
        </section>
      </>
    );
  }
}
