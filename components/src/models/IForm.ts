export interface ICardForm {
  nameInput: string;
  select: string;
  gender: boolean;
  date: Date;
  files: FileList;
  id: number;
}
export type IForm = ICardForm[];
