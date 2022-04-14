import { Character } from './api-interfacies';

export interface SearchBarState {
  inputValue: null | string;
}
export interface SearchBarProps {
  onSearchSubmit: (inputValue: null | string) => void;
}

export interface ICardsState {
  inputValue: null | string;
  isLoading: boolean;
  characters: null | Character[] | undefined;
  isError: boolean;
}
export interface ICardsProps {
  inputValue: null | string;
}

export interface ICardState {
  // inputValue: null | string;
  // characters: null | Character[];
}
export interface ICardProps {
  character: null | Character;
}
