import React, { Component, useState } from 'react';
import Form from '../components/form';
import FormCards from '../components/formCards';
import { ICardForm, ICardFormID, IFormPageProp, IFormPageState } from '../types/types';
import './main.css';

export default function FormPage(props: IFormPageProp) {
  let maxId = 0;
  const [formsCards, setFormCards] = useState<ICardFormID[]>([]);
  const formOnSubmit = (obj: ICardForm) => {
    const oldFormCards = formsCards;
    const formCard: ICardFormID = { ...obj, id: maxId++ };
    const formCards: ICardFormID[] =
      oldFormCards !== null ? [...oldFormCards, formCard] : [formCard];
    //formCards.push(formCard);
    setFormCards(formCards);
  };

  return (
    <main className="main">
      <Form formOnSubmit={formOnSubmit} />
      <FormCards formCards={formsCards} />
    </main>
  );
}
