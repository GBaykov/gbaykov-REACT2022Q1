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

interface IErrorState {
  nameInput?: string;
  select?: string;
  checkbox?: string | boolean;
  gender?: string | boolean;
  date?: string;
  photo?: string;
}
export interface IErrors extends Partial<IErrorState> {
  files?: FileList | null | undefined | '';
}

export interface IFormProp {
  formOnSubmit: (obj: IErrors) => void;
}
export interface IFormState {
  errors: IErrorState;
  submintDisabled: boolean;
}

export interface IFormPageProp {}
export interface IFormPageState {
  formCards: ICardForm[] | null;
}
export interface ICardForm {
  nameInput?: string;
  select?: string;
  gender?: string | boolean;
  date?: string;
  files?: FileList | null | '';
  id?: number;
}

export interface IFormCardsProps {
  formCards: ICardForm[] | null;
}
export interface IFormCardsState {}
