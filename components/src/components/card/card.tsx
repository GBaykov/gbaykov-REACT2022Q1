import React from 'react';
import './card.css';
import { ICardProps } from '../../types/types';
import { useAppDispatch } from '../../hooks/redux';
import { mainSlice } from '../../store/reducers/MainPageSlice';

export default function Card(props: ICardProps): JSX.Element {
  const dispatch = useAppDispatch();
  const { setCharacter, setIsModal } = mainSlice.actions;
  const { hero } = props;
  const onClick = () => {
    dispatch(setIsModal(true));
    if (hero) {
      dispatch(setCharacter(hero));
    }
  };
  return (
    <section className="card" onClick={onClick}>
      <img src={hero.image} alt="image of character" className="card-img" />
      <p>{`name: ${hero.name}`}</p>
      <p>{`gender: ${hero.gender}`}</p>
      <p>{`status: ${hero.status}`}</p>
    </section>
  );
}
