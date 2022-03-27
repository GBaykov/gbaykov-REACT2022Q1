import React, { Component } from 'react';
import './header.css';

export default class Header extends Component {
  maxId = 100;

  state = {
    pagesNames: [this.createItem('Main Page'), this.createItem('About Us')],
  };

  createItem(label: string | undefined) {
    return {
      label: label,
      id: this.maxId++,
    };
  }

  pages = this.state.pagesNames.map((page) => {
    return (
      <li key={page.id}>
        <span>{page.label}</span>
      </li>
    );
  });

  render() {
    return (
      <header>
        <ul className="headerNav">{this.pages}</ul>
      </header>
    );
  }
}
