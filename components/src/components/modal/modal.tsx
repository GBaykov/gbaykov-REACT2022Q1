import React, { Component } from 'react';
import './modal.css';

export default class Modal extends Component {
  render() {
    return (
      <>
        <div className="overlay"></div>
        <div className="modal">Lorem Ipsum - это текст- </div>
      </>
    );
  }
}
