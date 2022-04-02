import React from 'react';
import { IErrors } from './form';

export function validateDate(value: string | undefined | Date) {
  let date: Date | number | string;
  if (value !== undefined) {
    date = new Date(value);
    const now = new Date();
    return now.getFullYear() - date.getFullYear();
  }
}

export function inputErrHandler(value: string | undefined) {
  if (!value || value.length < 2 || value.length > 15) {
    return 'nameinput';
  } else {
    return '';
  }
}
export function errorHandler(values: IErrors) {
  const res: IErrors = {
    files: undefined,
  };
  if (!values.nameInput || values.nameInput.length < 2 || values.nameInput.length > 15) {
    res.nameInput = 'nameinput';
  } else {
    res.nameInput = '';
  }

  if (!values.select || values.select === 'null') {
    res.select = 'select';
  } else {
    res.select = '';
  }

  if (!values.checkbox) {
    res.checkbox = 'checkbox';
  } else {
    res.checkbox = '';
  }

  if (!values.date || !validateDate(values.date)) {
    // console.log(validateDate);
    res.date = 'date';
  } else {
    res.date = '';
  }
  if (!values.files || !values.files[0] || !values.files[0].name) {
    res.photo = 'photo';
  } else {
    res.photo = '';
  }
  return res;
}
