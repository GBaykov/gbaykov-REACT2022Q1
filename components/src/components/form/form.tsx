import React, { Component, RefObject } from 'react';

import './form.css';
import './switcher.css';

interface IFormProp {}

export default class Form extends Component<IFormProp> {
  nameInput: RefObject<HTMLInputElement>;
  select: RefObject<HTMLSelectElement>;
  checkbox: RefObject<HTMLInputElement>;
  switch: RefObject<HTMLInputElement>;
  date: RefObject<HTMLInputElement>;
  photo: RefObject<HTMLInputElement>;
  constructor(props: IFormProp) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.nameInput = React.createRef<HTMLInputElement>();
    this.select = React.createRef();
    this.checkbox = React.createRef();
    this.switch = React.createRef();
    this.date = React.createRef();
    this.photo = React.createRef();
  }

  handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    let date: Date | number | string;
    // if (this.date.current?.value !== undefined) {
    //   date = new Date(this.date.current?.value);
    //   const now = new Date();
    //   console.log(now.getFullYear() - date.getFullYear());
    // }

    // let fileName: string;
    // if (this.photo?.current?.files) {
    //   const file = this.photo.current.files[0];
    //   fileName = file.name;
    //   console.log(fileName);
    // }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form">
        <label className="form-element">
          <span>Name: </span>
          <input type="text" ref={this.nameInput} />
        </label>

        <label className="form-element">
          <span>Сhoose youre contry: </span>
          <select ref={this.select}>
            <option value="Belarus">Belarus</option>
            <option value="Russia">Russia</option>
            <option value="Ukraine">Ukraine</option>
          </select>
        </label>

        <div className="form-element">
          <p className="switch-text">Сhoose youre gender: </p>
          <label className="switch">
            <input type="checkbox" ref={this.switch} />
            <span className="slider round"></span>
          </label>
        </div>

        <label className="form-element">
          Birth date:
          <input type="date" id="start" name="trip-start" ref={this.date}></input>
        </label>

        <label>
          Upload photo:
          <input type="file" ref={this.photo} />
        </label>

        <label className="form-element">
          <span>Do you agree to data processing? </span>
          <input type="checkbox" ref={this.checkbox} />
        </label>

        <input type="submit" value="Отправить" />
      </form>
    );
  }
}
