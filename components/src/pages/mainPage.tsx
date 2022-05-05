import React, { useReducer } from 'react';
import Cards from '../components/cards';
import Modal from '../components/modal';
import SearchBar from '../components/search';
import { useAppSelector } from '../hooks/redux';
import { IActionType, IMainState } from '../types/mainPageStoreTypes';
import './main.css';
import { mainPageRender } from './reducers/mainPageReducer';

// const InitialMainStat: IMainState = {
//   isModal: false,
//   inputValue: '',
//   character: null,
//   characters: [],
// };

// export const MainPageContext = React.createContext<{
//   state: IMainState;
//   dispatch: React.Dispatch<IActionType>;
// }>({
//   state: InitialMainStat,
//   dispatch: () => undefined,
// });

export default function MainPage() {
  // const [state, dispatch] = useReducer(mainPageRender, InitialMainStat);
  const { isModal, character } = useAppSelector((state) => state.mainReducer);

  const modal = () => {
    return !!character && !!isModal ? <Modal /> : null;
  };

  return (
    <main className="main">
      <h1>Main Page</h1>
      {/* <MainPageContext.Provider value={{ state, dispatch }}> */}
      <SearchBar />
      <Cards />
      {modal()}
      {/* </MainPageContext.Provider> */}
    </main>
  );
}
