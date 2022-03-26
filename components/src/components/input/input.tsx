import React, { Component } from 'react';
interface InputState {
  inputValue: null | string;
}
interface InputProps {}

export default class Input extends Component<InputProps, InputState> {
  state = {
    inputValue: '',
  };
  onInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    this.setState({
      inputValue: e.currentTarget.value,
    });
  };
  render() {
    return <input type="text" value={this.state.inputValue} onChange={this.onInputChange} />;
  }
}
