import React, { Component } from 'react';
import './card.css';

export default class Сard extends Component {
  cardProperty = {
    name: 'Jon',
    password: 'Gon',
    age: '18',
    date: '01/01/0101 ',
  };
  render() {
    return (
      <section className="card">
        <p>{`name: ${this.cardProperty.name}`}</p>
        <p>{`password: ${this.cardProperty.password}`}</p>
        <p>{`age: ${this.cardProperty.age}`}</p>
        <p>{`date: ${this.cardProperty.date}`}</p>
      </section>
    );
  }
}
