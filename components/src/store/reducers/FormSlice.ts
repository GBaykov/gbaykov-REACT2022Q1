import { ICardForm, IForm } from '../../models/IForm';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const initialFormState: IForm = [];

export const formSlice = createSlice({
  name: 'formSlice',
  initialState: initialFormState,
  reducers: {
    setFormCards(state: IForm, action: PayloadAction<ICardForm>) {
      state = [...state, action.payload];
    },
  },
});
export default formSlice.reducer;
