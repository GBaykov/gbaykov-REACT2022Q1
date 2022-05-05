import { IMainState } from '../../models/IMain';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const initialMainState: IMainState = {
  isModal: false,
  inputValue: '',
  character: null,
  characters: [],
};

export const mainSlice = createSlice({
  name: 'main',
  initialState: initialMainState,
  reducers: {
    setIsModal(state: IMainState, action: PayloadAction<boolean>) {
      state.isModal = action.payload;
    },
  },
});
export default mainSlice.reducer;
