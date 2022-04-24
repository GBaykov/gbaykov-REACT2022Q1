import React from 'react';
import './errorMessage.css';

export default function errorMessage() {
  return (
    <div className="request-error-message">
      <h1>Error: no such result</h1>
      <img className="error-message_img" src="./error-swg.svg" alt="" />
    </div>
  );
}
