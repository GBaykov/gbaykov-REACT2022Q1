import React, { useState, useEffect, useContext } from 'react';
import { ICardsProps } from '../../types/types';
import Card from '../card';
import './cards.css';
import Api from '../../services/api';
import { Character } from '../../types/api-interfacies';
import Spinner from '../spinner';
import ErrorMessage from '../errorMessage';
import { MainPageContext } from '../../pages/mainPage';
import { ReducerConsts } from '../../types/mainPageStoreTypes';

export default function Cards() {
  const { state, dispatch } = useContext(MainPageContext);
  const { inputValue, characters } = state;
  const api = new Api();
  // const [inputValue, setInputValue] = useState<string>('');
  // const [characters, setCharacters] = useState<Character[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    dispatch({ type: ReducerConsts.inputValue, payload: { inputValue: inputValue } });
    // setInputValue(props.inputValue);
    addCharacter();
  }, [inputValue]);

  const addCharacter = async () => {
    try {
      setIsLoading(true);
      const characters = await api.getCharacter(inputValue);
      dispatch({ type: ReducerConsts.characters, payload: { characters: characters } });
      // setCharacters(characters);
      setIsLoading(false);
      setIsError(false);
    } catch (err) {
      setIsLoading(false);
      setIsError(true);
    }
  };

  // const { onCardClick, closeOpenModal } = props;

  if (isLoading) return <Spinner />;
  if (isError) return <ErrorMessage />;
  return (
    <section className="cards-field">
      {characters.map((character: Character) => {
        return <Card character={character} key={character.id} />;
      })}
    </section>
  );
}
