import React, { useContext } from 'react';
import { FormPageContext } from '../../pages/formPage';
import { IFormCardsProps } from '../../types/types';
import './formCards.css';

export default function FormCards() {
  const { state } = useContext(FormPageContext);
  const cards = state.map((formCard) => {
    console.log(formCard.files[0]);
    if (formCard.files) {
      return (
        <div className="form-card" key={formCard.id}>
          <p className="form-card_text">
            <b>name:</b> {formCard.nameInput}
          </p>
          <p className="form-card_text">
            <b>birth date</b> {formCard.date}
          </p>
          <p className="form-card_text">
            <b>gender:</b> {formCard.gender}
          </p>
          <p className="form-card_text">
            <b>country:</b> {formCard.select}
          </p>
          <img className="form-card_img" src={URL.createObjectURL(formCard.files[0])} />
        </div>
      );
    }
  });

  return <section className="cards-field">{cards}</section>;
}
