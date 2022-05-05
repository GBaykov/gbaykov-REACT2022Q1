import React, { useContext } from 'react';
import { useAppSelector } from '../../hooks/redux';
//import { FormPageContext } from '../../pages/formPage';
import './formCards.css';

export default function FormCards() {
  //const { state } = useContext(FormPageContext);
  const state = useAppSelector((state) => state.formReducer);
  // const { setFormCards } = formSlice.actions;
  // const dispatch = useAppDispatch();

  const cards = state.map((formCard) => {
    if (formCard.files) {
      const binaryData: BlobPart[] = [];
      binaryData.push(formCard.files[0]);

      return (
        <div className="form-card" key={formCard.id}>
          <p className="form-card_text">
            <b>name:</b> {formCard.nameInput}
          </p>
          <p className="form-card_text">
            <b>birth date</b> {formCard.date}
          </p>
          <p className="form-card_text">
            <b>gender:</b> {formCard.gender}
          </p>
          <p className="form-card_text">
            <b>country:</b> {formCard.select}
          </p>
          <img
            className="form-card_img"
            // src={URL.createObjectURL(formCard.files[0])}
            src={URL.createObjectURL(new Blob(binaryData, { type: 'application/zip' }))}
          />
        </div>
      );
    }
  });

  return <section className="cards-field">{cards}</section>;
}
