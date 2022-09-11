import React from 'react';
import Form from '../components/form';
import FormCards from '../components/formCards';
import './main.css';

export default function FormPage() {
  return (
    <main className="main">
      <Form />
      <FormCards />
    </main>
  );
}
