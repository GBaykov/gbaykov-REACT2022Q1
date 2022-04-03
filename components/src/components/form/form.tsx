import React, { Component, RefObject } from 'react';

import './form.css';
import './switcher.css';
import { errorHandler } from './errorDefinder';
import { ObjectType } from 'typescript';

interface IErrorState {
  nameInput?: string | undefined;
  select?: string;
  checkbox?: string | boolean;
  switch?: string | boolean;
  date?: string;
  photo?: string;
}
export interface IErrors extends Partial<IErrorState> {
  files: FileList | null | undefined | '';
}

interface IFormProp {
  formOnSubmit: (obj: IErrors) => void;
}
interface IFormState {
  errors: IErrorState;
  submintDisabled: boolean;
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
      },
      submintDisabled: false,
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
    const errObj = {
      nameInput: this.nameInput.current?.value,
      select: this.select.current?.value,
      checkbox: this.checkbox.current?.checked,
      switch: this.switch.current?.checked,
      date: this.date.current?.value,
      files: this.photo?.current?.files,
    };
    const errors = errorHandler(errObj);
    this.setState({
      errors,
    });
    let errCount = 0;
    for (const err in errors) {
      if (errors[err as keyof IErrors] !== '') {
        errCount++;
      }
    }
    if (errCount === 0) {
      this.props.formOnSubmit(errObj);
      errCount = 0;
    } else {
    }
  }

  render() {
    const { nameInput, select, checkbox, date, photo } = this.state.errors;
    const createErrMesssage = (err: string | boolean | undefined, message: string) => {
      return err ? <p className="error-message">{message}</p> : null;
    };
    // const defineSbtBtn = () => {
    //   if (!this.nameInput.current?.value || this.checkbox.current?.checked) {
    //     return <input disabled type="submit" value="Отправить" />;
    //   } else return <input type="submit" value="Отправить" />;
    // };

    return (
      <form onSubmit={this.handleSubmit} className="form">
        <label className="form-element">
          <span>Name: </span>
          <input type="text" ref={this.nameInput} />
          {createErrMesssage(
            nameInput,
            '*the name must have at least 2 and no more than 15 characters'
          )}
        </label>

        <label className="form-element">
          <span>Сhoose youre contry: </span>
          <select ref={this.select}>
            <option value="null"></option>
            <option value="Belarus">Belarus</option>
            <option value="Russia">Russia</option>
            <option value="Ukraine">Ukraine</option>
          </select>
          {createErrMesssage(select, '*no country has been selected')}
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
          {createErrMesssage(date, '*you mast be over 18 years old')}
        </label>

        <label>
          Upload photo:
          <input type="file" ref={this.photo} />
          {createErrMesssage(photo, '*add photo')}
        </label>

        <label className="form-element">
          <span>Do you agree to data processing? </span>
          <input type="checkbox" ref={this.checkbox} />
          {createErrMesssage(checkbox, '*must be checked')}
        </label>

        <input type="submit" value="Отправить" />
      </form>
    );
  }
}
