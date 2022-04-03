import React, { Component } from 'react';
import { ICardForm } from '../../pages/formPage';
import Card from '../card';
import './formCards.css';
interface IFormCardsProps {
  formCards: ICardForm[] | null;
}
interface IFormCardsState {
  formCards: ICardForm[] | null;
}

export default class FormCards extends Component<IFormCardsProps, IFormCardsState> {
  render() {
    const cards = this.props.formCards?.map((formCard) => {
      if (formCard.files) {
        return (
          <div key={formCard.id}>
            <p>{formCard.nameInput}</p>
            <p>{formCard.date}</p>
            <p>{formCard.gender}</p>
            <p>{formCard.select}</p>
            <img src={URL.createObjectURL(formCard.files[0])}></img>
          </div>
        );
      }
    });

    return <section className="cards-field">{cards}</section>;
  }
}
