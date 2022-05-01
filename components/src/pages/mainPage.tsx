import React, { useState, useContext, useReducer } from 'react';
import Cards from '../components/cards';
import Modal from '../components/modal';
import SearchBar from '../components/search';
import { Character } from '../types/api-interfacies';
import './main.css';

export const reducer = (state: IMainState, action: IActionType): IMainState => {
  switch (action.type) {
    case 'isModal':
      if (!!action.payload.isModal) {
        return {
          ...state,
          isModal: action.payload.isModal,
        };
      }
    case 'inputValue':
      if (!!action.payload.inputValue) {
        return {
          ...state,
          inputValue: action.payload.inputValue,
        };
      }

    case 'character':
      if (!!action.payload.character) {
        return {
          ...state,
          character: action.payload.character,
        };
      }

    case 'characters':
      if (action.payload.characters) {
        return {
          ...state,
          characters: action.payload.characters,
        };
      }

    default:
      return state;
  }
};
export interface IAction<T, P> {
  type: T;
  payload: Partial<P>;
}
export interface IMainState {
  isModal: boolean;
  inputValue: string;
  character: Character | null;
  characters: Character[];
}
export enum ReducerConsts {
  isModal = 'isModal',
  inputValue = 'inputValue',
  character = 'character',
  characters = 'characters',
}
export type IActionType = IAction<ReducerConsts, IMainState>;
export type MainDispatch = (value: IActionType) => void;

const InitialMainStat: IMainState = {
  isModal: false,
  inputValue: '',
  character: null,
  characters: [],
};
export function MainPage() {
  const MainPageContext = React.createContext<{
    state: IMainState;
    dispatch: React.Dispatch<IActionType>;
  }>({
    state: InitialMainStat,
    dispatch: () => undefined,
  });

  const [state, dispatch] = useReducer(reducer, InitialMainStat);

  // const [isModal, setIsModal] = useState<boolean>(false);
  // const [inputValue, setInputValue] = useState<string>('');
  // const [character, setCharacter] = useState<Character | null>(null);

  const onSearchSubmit = (inputValue: string) => {
    setInputValue(inputValue);
  };
  const onCardClick = (character: Character) => {
    setCharacter(character);
  };
  const closeOpenModal = (isModal: boolean) => {
    setIsModal(isModal);
  };

  const modal = () => {
    if (!!state.character && state.isModal) {
      return <Modal character={state.character} closeOpenModal={closeOpenModal} />;
    }
  };

  return (
    <main className="main">
      <h1>Main Page</h1>
      <MainPageContext.Provider value={{ state, dispatch }}>
        <SearchBar onSearchSubmit={onSearchSubmit} />
        <Cards
          inputValue={state.inputValue}
          onCardClick={onCardClick}
          closeOpenModal={closeOpenModal}
        />
        {modal()}
      </MainPageContext.Provider>
    </main>
  );
}
