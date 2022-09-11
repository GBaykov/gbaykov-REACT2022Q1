import { Character } from './api-interfacies';

export interface IAction<T, P> {
  type: T;
  payload: Partial<P>;
}
export interface IMainState {
  isModal: boolean;
  inputValue: string;
  character: Character | null;
  characters: Character[];
}
export enum ReducerConsts {
  isModal = 'isModal',
  inputValue = 'inputValue',
  character = 'character',
  characters = 'characters',
}
export type IActionType = IAction<ReducerConsts, IMainState>;
export type MainDispatch = (value: IActionType) => void;
