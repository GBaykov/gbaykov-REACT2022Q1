import React, { Component } from 'react';
import { SearchBarProps, SearchBarState } from '../../types/types';
import './search.css';

export default class SearchBar extends Component<SearchBarProps, SearchBarState> {
  state = {
    inputValue: '',
  };
  constructor(props: SearchBarProps) {
    super(props);

    this.componentCleanup = this.componentCleanup.bind(this);
  }
  onInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    this.setState({
      inputValue: e.currentTarget.value,
    });
  };

  componentCleanup() {
    localStorage.setItem('inputValue', this.state.inputValue);
  }

  componentDidMount = () => {
    const inputValue = localStorage.getItem('inputValue');
    this.setState({
      inputValue,
    });
    window.addEventListener('beforeunload', this.componentCleanup);
  };

  componentWillUnmount = () => {
    this.componentCleanup();
    window.removeEventListener('beforeunload', this.componentCleanup);
  };

  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    this.props.onSearchSubmit(this.state.inputValue);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <input
            className="searchbar"
            placeholder="Search area"
            type="text"
            value={this.state.inputValue}
            onChange={this.onInputChange}
          />
        </label>
        <input type="submit" value="Отправить" />
      </form>
    );
  }
}
