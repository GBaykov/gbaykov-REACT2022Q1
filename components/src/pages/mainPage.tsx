import React from 'react';
import Cards from '../components/cards';
import Modal from '../components/modal';
import SearchBar from '../components/search';
import { useAppSelector } from '../hooks/redux';
import './main.css';

export default function MainPage() {
  const { isModal, character } = useAppSelector((state) => state.mainReducer);

  const modal = () => {
    return !!character && !!isModal ? <Modal /> : null;
  };

  return (
    <main className="main">
      <h1>Main Page</h1>
      <SearchBar />
      <Cards />
      {modal()}
    </main>
  );
}
