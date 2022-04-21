import React from 'react';
import './card.css';
import { ICardProps } from '../../types/types';

export default function Card(props: ICardProps): JSX.Element {
  const { character, onCardClick, closeOpenModal } = props;
  const onClick = () => {
    closeOpenModal(true);
    if (character) onCardClick(character);
  };
  return (
    <section className="card" onClick={onClick}>
      <img src={character.image} alt="image of character" className="card-img" />
      <p>{`name: ${character.name}`}</p>
      <p>{`gender: ${character.gender}`}</p>
      <p>{`status: ${character.status}`}</p>
    </section>
  );
}
