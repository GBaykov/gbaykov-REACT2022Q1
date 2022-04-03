import React, { Component } from 'react';
import Form from '../components/form';
import { IErrors } from '../components/form/form';
import './main.css';

interface IFormPageProp {}
interface IFormPageState {
  nameInput?: string | undefined;
  select?: string;
  checkbox?: string | boolean;
  switch?: string | boolean | undefined;
  date?: string;
  files?: FileList | null | undefined | '';
}

export default class FormPage extends Component<IFormPageProp, IFormPageState> {
  constructor(props: IFormPageProp) {
    super(props);
    this.state = {};
  }
  formOnSubmit = (obj: IErrors) => {
    const { nameInput, select, date, files } = obj;
    console.log('object in formPage', obj);
    this.setState({
      nameInput,
      select,
      switch: obj.switch,
      date,
      files,
    });
  };
  render() {
    return (
      <main className="main">
        <p>{this.state.nameInput}</p>
        <p>{this.state.date}</p>
        <p>{this.state.select}</p>
        <p>{this.state.switch}</p>
        <Form formOnSubmit={this.formOnSubmit} />
      </main>
    );
  }
}
