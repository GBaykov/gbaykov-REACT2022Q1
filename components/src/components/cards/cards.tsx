import React, { Component } from 'react';
import Card from '../card';

export default class Cards extends Component {
  render() {
    return (
      <section>
        <div>Cards field</div>
        <Card />
        <Card />
        <Card />
        <Card />
      </section>
    );
  }
}
