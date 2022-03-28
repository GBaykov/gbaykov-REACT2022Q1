import React, { Component } from 'react';
import Card from '../card';

export default class Cards extends Component {
  render() {
    return (
      <section>
        <Card />
        <Card />
        <Card />
        <Card />
      </section>
    );
  }
}
