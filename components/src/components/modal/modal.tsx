import React, { Component } from 'react';
import { IModalProps } from '../../types/types';
import './modal.css';

export default class Modal extends Component<IModalProps> {
  render() {
    const { character } = this.props;
    if (!character) return null;
    return (
      <>
        <div className="overlay" />
        <div className="modal">
          <div className="modal-content">
            <p className="modal-cross" />
            <img src={character.image} alt="image of character" className="card-img" />
            <p className="modal-item">{`name: ${character.name}`}</p>
            <p className="modal-item">{`gender: ${character.gender}`}</p>
            <p className="modal-item">{`status: ${character.status}`}</p>
          </div>
        </div>
      </>
    );
  }
}
