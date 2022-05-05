import React, { useContext } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { mainSlice } from '../../store/reducers/MainPageSlice';
//import { MainPageContext } from '../../pages/mainPage';
import { ReducerConsts } from '../../types/mainPageStoreTypes';
import './modal.css';

export default function Modal() {
  //const { state, dispatch } = useContext(MainPageContext);
  //const { character } = state;
  const { character } = useAppSelector((state) => state.mainReducer);
  const { setIsModal } = mainSlice.actions;
  const dispatch = useAppDispatch();

  const onModalClose = () => {
    dispatch(setIsModal(false));
  };

  return (
    <>
      <div className="overlay" onClick={onModalClose} />
      <div className="modal">
        <p className="modal-cross" onClick={onModalClose} />
        <img src={character?.image} alt="image of character" className="card-img" />
        <div className="modal-content">
          <p className="modal-item">{`gender: ${character?.gender}`}</p>
          <p className="modal-item">{`name: ${character?.name}`}</p>
          <p className="modal-item">{`status: ${character?.status}`}</p>
          <p className="modal-item">{`episode: ${character?.episode}`}</p>
          <p className="modal-item">{`species: ${character?.species}`}</p>
          <p className="modal-item">{`origin: ${character?.origin.name}`}</p>
          <p className="modal-item">{`location: ${character?.location.name}`}</p>
          <p className="modal-item">{`location: ${character?.location.url}`}</p>
        </div>
      </div>
    </>
  );
}
