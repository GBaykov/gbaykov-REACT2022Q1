import React, { useReducer } from 'react';
import Cards from '../components/cards';
import Modal from '../components/modal';
import SearchBar from '../components/search';
import { Character } from '../types/api-interfacies';
import { IActionType, IMainState } from '../types/mainPageStoreTypes';
import './main.css';
import { mainPageRender } from './reducers/mainPageReducer';

const InitialMainStat: IMainState = {
  isModal: false,
  inputValue: '',
  character: null,
  characters: [],
};

export const MainPageContext = React.createContext<{
  state: IMainState;
  dispatch: React.Dispatch<IActionType>;
}>({
  state: InitialMainStat,
  dispatch: () => undefined,
});

export default function MainPage() {
  const [state, dispatch] = useReducer(mainPageRender, InitialMainStat);

  const modal = () => {
    return !!state.character && !!state.isModal ? <Modal /> : null;
  };

  return (
    <main className="main">
      <h1>Main Page</h1>
      <MainPageContext.Provider value={{ state, dispatch }}>
        <SearchBar />
        <Cards />
        {modal()}
      </MainPageContext.Provider>
    </main>
  );
}
