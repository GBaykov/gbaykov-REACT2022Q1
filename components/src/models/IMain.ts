import { Character } from '../types/api-interfacies';

export interface IMainState {
  isModal: boolean;
  inputValue: string;
  character: Character | null;
  characters: Character[];
}
