import { Character } from './api-interfacies';

export interface ICardProps {
  hero: Character;
}

export interface IMainPageProps {}

export interface IFormInputs {
  nameInput: string;
  select: string;
  date: Date;
  files: FileList;
  gender: boolean;
  checkbox: boolean;
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

export interface IPagesNames {
  label: string;
  href: string;
  id: number;
}
