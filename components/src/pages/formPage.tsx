import React, { useReducer } from 'react';
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

  return (
    <main className="main">
      <FormPageContext.Provider value={{ state, dispatch }}>
        <Form />
        <FormCards />
      </FormPageContext.Provider>
    </main>
  );
}
