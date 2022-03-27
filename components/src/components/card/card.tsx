import React, { Component } from 'react';
import './card.css';

export default class Сard extends Component {
  cardProperty = {
    name: 'Jon',
    password: 'Gon1234534sdf',
    age: '18',
    date: '01/01/0101 ',
  };
  render() {
    return (
      <section className="card">
        <p>{this.cardProperty.name}</p>
        <p>{this.cardProperty.password}</p>
        <p>{this.cardProperty.age}</p>
        <p>{this.cardProperty.date}</p>
      </section>
    );
  }
}
