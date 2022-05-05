import React, { useContext } from 'react';
import './card.css';
import { ICardProps } from '../../types/types';
//import { MainPageContext } from '../../pages/mainPage';
import { ReducerConsts } from '../../types/mainPageStoreTypes';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { mainSlice } from '../../store/reducers/MainPageSlice';

export default function Card(props: ICardProps): JSX.Element {
  //const { state, dispatch } = useContext(MainPageContext);
  //const { character } = useAppSelector((state) => state.mainReducer);
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
