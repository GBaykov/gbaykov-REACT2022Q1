import { IErrors } from './form';

export function validateDate(value: string | undefined | Date) {
  let date: Date;
  if (value !== undefined) {
    date = new Date(value);
    const now = new Date();
    return now.getFullYear() - +date.getFullYear() >= 18;
  }
}

export function errorHandler(values: IErrors) {
  const res: IErrors = {
    files: '',
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

export function errorDataChecking(errors: IErrors) {
  let errCount = 0;
  for (const err in errors) {
    if (errors[err as keyof IErrors] !== '') {
      errCount++;
    }
  }
  return errCount;
}
