import React, { useState, useEffect, useContext } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
// import { MainPageContext } from '../../pages/mainPage';
import { mainSlice } from '../../store/reducers/MainPageSlice';
import { ReducerConsts } from '../../types/mainPageStoreTypes';
import './search.css';

export default function SearchBar() {
  const [localInput, setLocalInput] = useState<string>('');
  // const { state, dispatch } = useContext(MainPageContext);
  // const { inputValue } = useAppSelector((state) => state.mainReducer);
  const { setInput } = mainSlice.actions;
  const dispatch = useAppDispatch();

  useEffect(() => {
    const inputValueLS = localStorage.getItem('inputValue');
    if (!!inputValueLS) setLocalInput(inputValueLS);
    window.addEventListener('beforeunload', componentCleanup);
  }, []);

  useEffect(() => {
    return () => {
      componentCleanup();
      window.removeEventListener('beforeunload', componentCleanup);
    };
  });

  const onInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    setLocalInput(e.currentTarget.value);
  };

  function componentCleanup() {
    localStorage.setItem('inputValue', localInput);
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(setInput(localInput));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input
          className="searchbar"
          placeholder="Search area"
          type="text"
          value={localInput}
          onChange={onInputChange}
        />
      </label>
      <input type="submit" value="Отправить" />
    </form>
  );
}
