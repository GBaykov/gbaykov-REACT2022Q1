import { IMainState } from '../../models/IMain';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Character } from '../../types/api-interfacies';

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
    setInput(state: IMainState, action: PayloadAction<string>) {
      state.inputValue = action.payload;
    },
    setCharacter(state: IMainState, action: PayloadAction<Character>) {
      state.character = action.payload;
    },
    setCharacters(state: IMainState, action: PayloadAction<Character[]>) {
      state.characters = action.payload;
    },
  },
});
export default mainSlice.reducer;
