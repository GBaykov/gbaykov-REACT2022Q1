import React, { useState, useEffect } from 'react';
import Card from '../card';
import './cards.css';
import Api from '../../services/api';
import { Character } from '../../types/api-interfacies';
import Spinner from '../spinner';
import ErrorMessage from '../errorMessage';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { mainSlice } from '../../store/reducers/MainPageSlice';

export default function Cards() {
  const { inputValue, characters } = useAppSelector((state) => state.mainReducer);
  const dispatch = useAppDispatch();
  const { setCharacters, setInput } = mainSlice.actions;

  const api = new Api();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    dispatch(setInput(inputValue));
    addCharacter();
  }, [inputValue]);

  const addCharacter = async () => {
    try {
      setIsLoading(true);
      const characters = await api.getCharacter(inputValue);
      dispatch(setCharacters(characters));
      setIsLoading(false);
      setIsError(false);
    } catch (err) {
      setIsLoading(false);
      setIsError(true);
    }
  };

  if (isLoading) return <Spinner />;
  if (isError) return <ErrorMessage />;
  return (
    <section className="cards-field">
      {characters.map((character: Character) => {
        return <Card hero={character} key={character.id} />;
      })}
    </section>
  );
}
