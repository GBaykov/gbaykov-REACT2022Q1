import { Character } from './api-interfacies';

export interface SearchBarProps {
  onSearchSubmit: (inputValue: string) => void;
}

export interface ICardsProps {
  inputValue: string;
  onCardClick: (character: Character) => void;
  closeOpenModal: (isModal: boolean) => void;
}

export interface ICardProps {
  character: Character;
  // onCardClick: (character: Character) => void;
  // closeOpenModal: (isModal: boolean) => void;
}

export interface IMainPageProps {}

export interface IModalProps {
  character: Character;
  closeOpenModal: (isModal: boolean) => void;
}

export interface IFormInputs {
  nameInput: string;
  select: string;
  date: Date;
  files: FileList;
  gender: boolean;
  checkbox: boolean;
}
export interface IFormProp {
  formOnSubmit: (obj: ICardForm) => void;
}

export interface IFormPageProp {}

export interface ICardForm {
  nameInput: string;
  select: string;
  gender: boolean;
  date: Date;
  files: FileList;
}
export interface ICardFormID extends ICardForm {
  id: number;
}

export interface IFormCardsProps {
  formCards: ICardFormID[];
}
export interface IFormCardsState {}

export interface IPagesNames {
  label: string;
  href: string;
  id: number;
}
