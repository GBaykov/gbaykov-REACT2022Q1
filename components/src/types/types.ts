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
  onCardClick: (character: Character) => void;
  closeOpenModal: (isModal: boolean) => void;
}

export interface ICardState {}
export interface ICardProps {
  character: null | Character;
  onCardClick: (character: Character) => void;
  closeOpenModal: (isModal: boolean) => void;
}

export interface IMainPageState {
  inputValue: null | string;
  character: null | Character;
  isModal: boolean;
}
export interface IMainPageProps {}

export interface IModalProps {
  character: null | Character;
  closeOpenModal: (isModal: boolean) => void;
}
