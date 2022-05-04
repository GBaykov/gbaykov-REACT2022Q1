import React, { useState, useEffect, useContext } from 'react';
import { MainPageContext } from '../../pages/mainPage';
import { ReducerConsts } from '../../types/mainPageStoreTypes';
import './search.css';

export default function SearchBar() {
  const [inputValue, setInputValue] = useState<string>('');
  const { state, dispatch } = useContext(MainPageContext);

  useEffect(() => {
    const inputValueLS = localStorage.getItem('inputValue');
    if (!!inputValueLS) setInputValue(inputValueLS);
    window.addEventListener('beforeunload', componentCleanup);
  }, []);

  useEffect(() => {
    return () => {
      componentCleanup();
      window.removeEventListener('beforeunload', componentCleanup);
    };
  });

  const onInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value);
  };

  function componentCleanup() {
    localStorage.setItem('inputValue', inputValue);
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch({ type: ReducerConsts.inputValue, payload: { inputValue: inputValue } });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input
          className="searchbar"
          placeholder="Search area"
          type="text"
          value={inputValue}
          onChange={onInputChange}
        />
      </label>
      <input type="submit" value="Отправить" />
    </form>
  );
}
