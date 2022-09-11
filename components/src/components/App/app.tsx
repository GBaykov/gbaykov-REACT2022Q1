import React from 'react';
import Header from '../header';
import { BrowserRouter } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
}
