import React, { useState } from 'react';
import Cards from '../components/cards';
import ErrorMessage from '../components/errorMessage';
import Modal from '../components/modal';
import SearchBar from '../components/search';
import { Character } from '../types/api-interfacies';
import './main.css';

export default function MainPage() {
  const [isModal, setIsModal] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>('');

  //КАК МОЖНО ИЗБЕЖАТЬ ИСПОЛЬЗОВАНИЯ NULL В ДАННОМ СЛУЧАЕ?
  //ИСПОЛЬЗОВАТЬ ЗАГЛУШКУ-ОБЪЕКТ ИЛИ КАК? ВЕДЬ ЕСЛИ НИЧЕГО НЕ ПЕРЕДАТЬ В КАЧЕСТВЕ АРГУМЕНТА, БУДЕТ undefined
  const [character, setCharacter] = useState<Character | null>(null);

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
    console.log('ON CLICK IN MODAL', isModal);
    if (!!character && isModal) {
      return <Modal character={character} closeOpenModal={closeOpenModal} />;
    }
  };

  return (
    <main className="main">
      <h1>Main Page</h1>
      <SearchBar onSearchSubmit={onSearchSubmit} />
      <Cards inputValue={inputValue} onCardClick={onCardClick} closeOpenModal={closeOpenModal} />
      {modal()}
    </main>
  );
}
