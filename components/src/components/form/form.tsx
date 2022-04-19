import React, { Component, RefObject } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import './form.css';
import './switcher.css';
import { errorDataChecking, errorHandler } from './errorHandler';
import { IFormProp, IFormState } from '../../types/types';

// enum GenderEnum {
//   female = 'female',
//   male = 'male',
//   other = 'other',
// }

interface IFormInputs {
  nameInput: string;
  select: string;
  date: Date;
  photo: FileList;
  gender: boolean;
  checkbox: boolean;
}

export default function Form() {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm<IFormInputs>({ mode: 'onSubmit' });
  const onSubmit: SubmitHandler<IFormInputs> = (data) => {
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
          {...register('date', { required: true })}
        ></input>
      </label>

      <label>
        Upload photo:
        <input role="upload-file" type="file" {...register('photo', { required: true })} />
        <p className="error-message">{errors.photo && '*add photo'}</p>
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
      <input type="submit" disabled={!isValid} />
    </form>
  );
}

// export default class Form extends Component<IFormProp, IFormState> {
//   nameInput: RefObject<HTMLInputElement>;
//   select: RefObject<HTMLSelectElement>;
//   checkbox: RefObject<HTMLInputElement>;
//   gender: RefObject<HTMLInputElement>;
//   date: RefObject<HTMLInputElement>;
//   photo: RefObject<HTMLInputElement>;

//   constructor(props: IFormProp) {
//     super(props);
//     this.state = {
//       errors: {
//         nameInput: '',
//         select: '',
//         checkbox: '',
//         gender: '',
//         date: '',
//         photo: '',
//       },
//       submintDisabled: true,
//     };
//     this.onFormChange = this.onFormChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//     this.clearForm = this.clearForm.bind(this);
//     this.nameInput = React.createRef<HTMLInputElement>();
//     this.select = React.createRef();
//     this.checkbox = React.createRef();
//     this.gender = React.createRef();
//     this.date = React.createRef();
//     this.photo = React.createRef();
//   }
//   clearForm() {
//     if (this.nameInput.current) {
//       this.nameInput.current.value = '';
//     }
//     if (this.date.current) {
//       this.date.current.value = '';
//     }
//     if (this.select.current) {
//       this.select.current.value = '';
//     }
//     if (this.checkbox.current) {
//       this.checkbox.current.checked = false;
//     }
//     if (this.gender.current) {
//       this.gender.current.checked = false;
//     }
//     if (this.photo.current) {
//       this.photo.current.files = null;
//     }
//   }
//   onFormChange(event: React.FormEvent) {
//     event.preventDefault();
//     this.setState({ submintDisabled: false });
//   }

//   handleSubmit(event: React.FormEvent<HTMLFormElement>) {
//     event.preventDefault();
//     const dataObj = {
//       nameInput: this.nameInput.current?.value,
//       select: this.select.current?.value,
//       checkbox: this.checkbox.current?.checked,
//       switch: this.gender.current?.checked,
//       date: this.date.current?.value,
//       files: this.photo?.current?.files,
//     };
//     const errors = errorHandler(dataObj);

//     this.setState({
//       errors,
//     });

//     const errCount = errorDataChecking(errors);
//     const { checkbox, ...dataFormCard } = dataObj;
//     if (errCount === 0) {
//       this.props.formOnSubmit(dataFormCard);
//       this.clearForm();
//     } else this.setState({ submintDisabled: true });
//   }

//   render() {
//     const { nameInput, select, checkbox, date, photo } = this.state.errors;
//     const createErrMesssage = (err: string | boolean | undefined, message: string) => {
//       return err ? <p className="error-message">{message}</p> : null;
//     };

//     const defineSbtBtn = () => {
//       if (this.state.submintDisabled) {
//         return <input disabled type="submit" value="Отправить" />;
//       } else {
//         return <input type="submit" value="Отправить" />;
//       }
//     };

//     return (
//       <form onSubmit={this.handleSubmit} className="form" onChange={this.onFormChange}>
//         <label className="form-element">
//           <span>Name: </span>
//           <input type="text" ref={this.nameInput} />
//           {createErrMesssage(
//             nameInput,
//             '*the name must have at least 2 and no more than 15 characters'
//           )}
//         </label>

//         <label className="form-element">
//           <span>Сhoose youre contry: </span>
//           <select role="country" ref={this.select}>
//             <option value="null"></option>
//             <option role="Belarus-country" value="Belarus">
//               Belarus
//             </option>
//             <option value="Russia">Russia</option>
//             <option value="Ukraine">Ukraine</option>
//           </select>
//           {createErrMesssage(select, '*no country has been selected')}
//         </label>

//         <div className="form-element">
//           <p className="switch-text">Сhoose youre gender: </p>
//           <label className="switch">
//             <input type="checkbox" ref={this.gender} />
//             <span className="slider round"></span>
//           </label>
//         </div>

//         <label className="form-element">
//           Birth date:
//           <input role="date-input" type="date" id="start" name="trip-start" ref={this.date}></input>
//           {createErrMesssage(date, '*you mast be over 18 years old')}
//         </label>

//         <label>
//           Upload photo:
//           <input role="upload-file" type="file" ref={this.photo} />
//           {createErrMesssage(photo, '*add photo')}
//         </label>

//         <label className="form-element">
//           <span>Do you agree to data processing? </span>
//           <input role="data-processing" type="checkbox" ref={this.checkbox} />
//           {createErrMesssage(checkbox, '*must be checked')}
//         </label>

//         {defineSbtBtn()}
//       </form>
//     );
//   }
// }
