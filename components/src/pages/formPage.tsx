import React, { useState, useReducer } from 'react';
import Form from '../components/form';
import FormCards from '../components/formCards';
import { ICardForm, ICardFormID } from '../types/types';
import './main.css';
import formPageReducer from './reducers/formPageReducer';

export const initialFormPageState: ICardFormID[] = [];

export interface IActionForm {
  type: 'formCard';
  payload: ICardForm;
}

export const FormPageContext = React.createContext<{
  state: ICardFormID[];
  dispatch: React.Dispatch<IActionForm>;
}>({
  state: initialFormPageState,
  dispatch: () => undefined,
});

export default function FormPage() {
  const [state, dispatch] = useReducer(formPageReducer, initialFormPageState);
  // let maxId = 0;
  // const [formsCards, setFormCards] = useState<ICardFormID[]>([]);
  // const formOnSubmit = (obj: ICardForm) => {
  //   const oldFormCards = formsCards;
  //   const formCard: ICardFormID = { ...obj, id: maxId++ };
  //   const formCards: ICardFormID[] =
  //     oldFormCards !== null ? [...oldFormCards, formCard] : [formCard];
  //   setFormCards(formCards);
  // };

  return (
    <main className="main">
      <FormPageContext.Provider value={{ state, dispatch }}>
        <Form />
        <FormCards />
      </FormPageContext.Provider>
    </main>
  );
}
