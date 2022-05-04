import React, { useContext } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import './form.css';
import './switcher.css';

import { IFormInputs } from '../../types/types';
import { validateDate } from './errorHandler';
import { FormPageContext } from '../../pages/formPage';

export default function Form() {
  const { dispatch } = useContext(FormPageContext);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<IFormInputs>({ mode: 'onSubmit' });
  const onSubmit: SubmitHandler<IFormInputs> = (data) => {
    const { checkbox, ...dataFormCard } = data;
    dispatch({ type: 'formCard', payload: dataFormCard });
    reset();
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <label className="form-element">
        <span>Name: </span>
        <input {...register('nameInput', { required: true, maxLength: 15, minLength: 2 })} />
        <p className="error-message">
          {errors.nameInput && '*the name must have at least 2 and no more than 15 characters'}
        </p>
      </label>

      <label className="form-element">
        <span>Сhoose youre contry: </span>
        <select role="country" {...register('select', { required: true })}>
          <option value=""></option>
          <option role="Belarus-country" value="Belarus">
            Belarus
          </option>
          <option value="Russia">Russia</option>
          <option value="Ukraine">Ukraine</option>
        </select>
        <p className="error-message">{errors.select && '*no country has been selected'}</p>
      </label>

      <div className="form-element">
        <p className="switch-text">Сhoose youre gender: </p>
        <label className="switch">
          <input type="checkbox" {...register('gender')} />
          <span className="slider round"></span>
        </label>
      </div>

      <label className="form-element">
        Birth date:
        <input
          role="date-input"
          type="date"
          id="start"
          {...register('date', { required: true, validate: (value) => validateDate(value) })}
        ></input>
        <p className="error-message">{errors.date && '*you mast be over 18 years old'}</p>
      </label>

      <label>
        Upload photo:
        <input
          role="upload-file"
          type="file"
          {...register('files', {
            required: true,
          })}
        />
        <p className="error-message">{errors.files && '*add photo'}</p>
      </label>

      <label className="form-element">
        <span>Do you agree to data processing? </span>
        <input
          role="data-processing"
          type="checkbox"
          {...register('checkbox', { required: true })}
        />
        <p className="error-message">{errors.checkbox && '*must be checked'}</p>
      </label>
      <input type="submit" />
    </form>
  );
}
