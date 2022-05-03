import { ICardFormID } from '../../types/types';
import { IActionForm } from '../formPage';
const formPageReducer = (state: ICardFormID[], action: IActionForm): ICardFormID[] => {
  let maxId = 0;
  switch (action.type) {
    case 'formCard':
      const oldFormCards = state;
      const formCard: ICardFormID = { ...action.payload, id: maxId++ };
      const formCards: ICardFormID[] =
        oldFormCards !== null ? [...oldFormCards, formCard] : [formCard];
      console.log(formCards);
      return formCards;
    default:
      return state;
  }
};
export default formPageReducer;
