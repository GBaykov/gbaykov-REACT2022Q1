import React, { useContext } from 'react';
import './card.css';
import { ICardProps } from '../../types/types';
import { MainPageContext } from '../../pages/mainPage';
import { ReducerConsts } from '../../types/mainPageStoreTypes';

export default function Card(props: ICardProps): JSX.Element {
  const { state, dispatch } = useContext(MainPageContext);
  const { character } = props;
  const onClick = () => {
    dispatch({ type: ReducerConsts.isModal, payload: { isModal: true } });
    // closeOpenModal(true);
    if (character) {
      dispatch({ type: ReducerConsts.character, payload: { character: character } });
    }
    // onCardClick(character);
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
