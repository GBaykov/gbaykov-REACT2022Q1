import React, { Component } from 'react';
import Form from '../components/form';
import FormCards from '../components/formCards';
import { ICardForm, ICardFormID, IFormPageProp, IFormPageState } from '../types/types';
import './main.css';

export default class FormPage extends Component<IFormPageProp, IFormPageState> {
  maxId = 0;
  constructor(props: IFormPageProp) {
    super(props);
    this.state = { formCards: null };
  }
  formOnSubmit = (obj: ICardForm) => {
    const oldFormCards = this.state.formCards;
    const formCard: ICardFormID = { ...obj, id: this.maxId++ };
    const formCards: ICardFormID[] =
      oldFormCards !== null ? [...oldFormCards, formCard] : [formCard];
    //formCards.push(formCard);
    this.setState({
      formCards,
    });
  };
  render() {
    return (
      <main className="main">
        <Form formOnSubmit={this.formOnSubmit} />
        <FormCards formCards={this.state.formCards} />
      </main>
    );
  }
}
