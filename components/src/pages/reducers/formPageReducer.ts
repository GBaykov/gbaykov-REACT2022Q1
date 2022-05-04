import { ICardFormID } from '../../types/types';
import { IActionForm } from '../formPage';
let maxId = 0;
const formPageReducer = (state: ICardFormID[], action: IActionForm): ICardFormID[] => {
  switch (action.type) {
    case 'formCard':
      const oldFormCards = state;
      const formCard: ICardFormID = { ...action.payload, id: maxId++ };
      const formCards: ICardFormID[] =
        oldFormCards !== null ? [...oldFormCards, formCard] : [formCard];
      return formCards;
    default:
      return state;
  }
};
export default formPageReducer;