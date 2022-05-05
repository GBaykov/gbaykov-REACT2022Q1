import React from 'react';
import Header from '../header';
import { BrowserRouter } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { useDispatch } from 'react-redux';
import { mainSlice } from '../../store/reducers/MainPageSlice';

export default function App() {
  const { isModal } = useAppSelector((state) => state.mainReducer);
  const { setIsModal } = mainSlice.actions;
  const dispatch = useAppDispatch();

  return (
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
}
