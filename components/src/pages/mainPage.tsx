import React, { Component } from 'react';
import Card from '../components/card';
import Input from '../components/input';

export default class MainPage extends Component {
  render() {
    return (
      <main>
        <Input />
        <Card />
      </main>
    );
  }
}
