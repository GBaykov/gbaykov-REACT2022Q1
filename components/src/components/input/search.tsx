import React, { Component } from 'react';
interface InputState {
  inputValue: null | string;
}
interface InputProps {}

export default class SearchBar extends Component<InputProps, InputState> {
  state = {
    inputValue: '',
  };
  constructor(props: InputProps) {
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

  render() {
    return <input type="text" value={this.state.inputValue} onChange={this.onInputChange} />;
  }
}
