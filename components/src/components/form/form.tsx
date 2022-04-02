import React, { Component, RefObject } from 'react';

import './form.css';

interface IFormProp {}

export default class Form extends Component<IFormProp> {
  nameInput: RefObject<HTMLInputElement>;
  selectValue: RefObject<HTMLSelectElement>;
  constructor(props: IFormProp) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.nameInput = React.createRef<HTMLInputElement>();
    this.selectValue = React.createRef();
  }

  handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(this.selectValue.current?.value);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form">
        <label className="form-element">
          Name:
          <input type="text" ref={this.nameInput} />
        </label>

        <label className="form-element">
          Chose youre contry:
          <select ref={this.selectValue}>
            <option value="Belarus">Belarus</option>
            <option value="Russia">Russia</option>
            <option value="Ukraine">Ukraine</option>
          </select>
        </label>

        <input type="submit" value="Отправить" />
      </form>
    );
  }
}
