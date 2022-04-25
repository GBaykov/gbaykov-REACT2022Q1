import React, { useState, useEffect } from 'react';
import { ICardsProps, ICardsState } from '../../types/types';
import Card from '../card';
import './cards.css';
import Api from '../../services/api';
import { Character } from '../../types/api-interfacies';
import Spinner from '../spinner';
import ErrorMessage from '../errorMessage';

export default function Cards(props: ICardsProps) {
  const api = new Api();
  const [inputValue, setInputValue] = useState<string>('');
  const [characters, setCharacters] = useState<Character[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    setInputValue(props.inputValue);
    addCharacter();
  }, [props.inputValue]);

  // useEffect(() => {
  //   setIsLoading(false);
  // });

  // function componentDidUpdate(prevProps: ICardsProps) {
  //   if (props.inputValue !== prevProps.inputValue) {
  //     setInputValue(props.inputValue);
  //     addCharacter();
  //   }
  //   // this.setState({ isLoading: false });
  // }

  const addCharacter = async () => {
    try {
      setIsLoading(true);
      const characters = await api.getCharacter(props.inputValue);
      setCharacters(characters);
      setIsLoading(false);
      setIsError(false);
    } catch (err) {
      setIsLoading(false);
      setIsError(true);
    }
  };

  const { onCardClick, closeOpenModal } = props;

  if (isLoading) return <Spinner />;
  if (isError) return <ErrorMessage />;
  return (
    <section className="cards-field">
      {characters.map((character: Character) => {
        return (
          <Card
            character={character}
            key={character.id}
            onCardClick={onCardClick}
            closeOpenModal={closeOpenModal}
          />
        );
      })}
    </section>
  );
}
