import { IActionType, IMainState } from '../../types/mainPageStoreTypes';

export const mainPageRender = (state: IMainState, action: IActionType): IMainState => {
  switch (action.type) {
    case 'isModal':
      console.log(action.payload.isModal);
      if (!!action.payload.isModal) {
        return {
          ...state,
          isModal: action.payload.isModal,
        };
      }
      break;

    case 'inputValue':
      if (!!action.payload.inputValue) {
        return {
          ...state,
          inputValue: action.payload.inputValue,
        };
      }
      break;

    case 'character':
      if (!!action.payload.character) {
        return {
          ...state,
          character: action.payload.character,
        };
      }
      break;

    case 'characters':
      if (action.payload.characters) {
        return {
          ...state,
          characters: action.payload.characters,
        };
      }
      break;

    default:
      return state;
  }
  return state;
};
