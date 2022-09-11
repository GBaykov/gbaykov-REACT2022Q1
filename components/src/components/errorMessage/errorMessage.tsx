import React, { Component } from 'react';
import './errorMessage.css';

export default class ErrorMessage extends Component {
  render() {
    return (
      <div className="error-message">
        <h1>Error: no such result</h1>
        <img className="error-message_img" src="./error-swg.svg" alt="" />
      </div>
    );
  }
}
