import React, { Component, RefObject } from 'react';

import './form.css';
import './switcher.css';
import { errorHandler } from './errorDefinder';

interface IErrorState {
  nameInput?: string | undefined;
  select?: string;
  checkbox?: string | boolean;
  switch?: string;
  date?: string;
  photo?: string;
  errName?: string;
}
export interface IErrors extends Partial<IErrorState> {
  files: FileList | null | undefined;
}

interface IFormProp {}
interface IFormState {
  errors: IErrorState;
}

export default class Form extends Component<IFormProp, IFormState> {
  nameInput: RefObject<HTMLInputElement>;
  select: RefObject<HTMLSelectElement>;
  checkbox: RefObject<HTMLInputElement>;
  switch: RefObject<HTMLInputElement>;
  date: RefObject<HTMLInputElement>;
  photo: RefObject<HTMLInputElement>;

  constructor(props: IFormProp) {
    super(props);
    this.state = {
      errors: {
        nameInput: '',
        select: '',
        checkbox: '',
        switch: '',
        date: '',
        photo: '',
        errName: '',
      },
    };
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
    const stateObj = {
      nameInput: this.nameInput.current?.value,
      select: this.select.current?.value,
      checkbox: this.checkbox.current?.checked,
      switch: this.switch.current?.value,
      date: this.date.current?.value,
      files: this.photo?.current?.files,
    };
    const errors = errorHandler(stateObj);
    this.setState({
      errors,
    });
    console.log(this.state);
  }
  render() {
    const nameErrMessage = this.state.errors.nameInput ? (
      <p className="error-message">
        *the name must have at least 2 and no more than 15 characters{' '}
      </p>
    ) : null;

    const selectErrMessage = this.state.errors.select ? (
      <p className="error-message">*no country has been selected</p>
    ) : null;

    const checkboxErrMessage = this.state.errors.checkbox ? (
      <p className="error-message">*must be checked</p>
    ) : null;

    // const switcherErrMessage = this.state.errors.switch ? (
    //   <p className="error-message">*invalid value</p>
    // ) : null;

    const dateErrMessage = this.state.errors.date ? (
      <p className="error-message">*you mast be over 18 years old</p>
    ) : null;

    const photoErrMessage = this.state.errors.photo ? (
      <p className="error-message">*no photo</p>
    ) : null;
    return (
      <form onSubmit={this.handleSubmit} className="form">
        <label className="form-element">
          <span>Name: </span>
          <input type="text" ref={this.nameInput} />
          {nameErrMessage}
        </label>

        <label className="form-element">
          <span>Сhoose youre contry: </span>
          <select ref={this.select}>
            <option value="null"></option>
            <option value="Belarus">Belarus</option>
            <option value="Russia">Russia</option>
            <option value="Ukraine">Ukraine</option>
          </select>
          {selectErrMessage}
        </label>

        <div className="form-element">
          <p className="switch-text">Сhoose youre gender: </p>
          <label className="switch">
            <input type="checkbox" ref={this.switch} />
            <span className="slider round"></span>
            {/* {switcherErrMessage} */}
          </label>
        </div>

        <label className="form-element">
          Birth date:
          <input type="date" id="start" name="trip-start" ref={this.date}></input>
          {dateErrMessage}
        </label>

        <label>
          Upload photo:
          <input type="file" ref={this.photo} />
          {photoErrMessage}
        </label>

        <label className="form-element">
          <span>Do you agree to data processing? </span>
          <input type="checkbox" ref={this.checkbox} />
          {checkboxErrMessage}
        </label>

        <input type="submit" value="Отправить" />
      </form>
    );
  }
}
