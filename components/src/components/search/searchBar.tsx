import React, { useState, useEffect } from 'react';
import { useAppDispatch } from '../../hooks/redux';
import { mainSlice } from '../../store/reducers/MainPageSlice';
import './search.css';

export default function SearchBar() {
  const [localInput, setLocalInput] = useState<string>('');
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
