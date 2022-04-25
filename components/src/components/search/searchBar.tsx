import React, { useState, useEffect } from 'react';
import { SearchBarProps } from '../../types/types';
import './search.css';

export default function SearchBar(props: SearchBarProps) {
  const [inputValue, setInputValue] = useState<string>('');

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

  // constructor(props: SearchBarProps) {
  //   super(props);

  //   this.componentCleanup = this.componentCleanup.bind(this);
  // }
  const onInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value);
  };

  function componentCleanup() {
    localStorage.setItem('inputValue', inputValue);
  }

  // componentDidMount = () => {
  //   const inputValue = localStorage.getItem('inputValue');
  //   this.setState({
  //     inputValue,
  //   });
  //   window.addEventListener('beforeunload', this.componentCleanup);
  // };

  // componentWillUnmount = () => {
  //   this.componentCleanup();
  //   window.removeEventListener('beforeunload', this.componentCleanup);
  // };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    props.onSearchSubmit(inputValue);
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
