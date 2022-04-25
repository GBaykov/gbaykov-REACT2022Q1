import React, { useState } from 'react';
import './header.css';
import { Routes, Route, Link } from 'react-router-dom';
import MainPage from '../../pages/mainPage';
import ErrorPage from '../../pages/errorPage';
import AboutUsPage from '../../pages/aboutUs';
import FormPage from '../../pages/formPage';
import { IPagesNames } from '../../types/types';

export default function Header() {
  let maxId = 1;
  const pagesN = [
    createItem('Main Page', ''),
    createItem('About Us', 'about'),
    createItem('Forms', 'forms'),
  ];
  const [pagesNames, setPages] = useState<IPagesNames[]>(pagesN);

  function createItem(label: string, href: string) {
    return {
      label,
      href,
      id: maxId++,
    };
  }

  const pages = pagesNames.map((page) => {
    return (
      <Link className="headder-link" to={`/${page.href}`} key={page.id}>
        {page.label}
      </Link>
    );
  });

  return (
    <>
      <header className="header">{pages}</header>
      <Routes>
        <Route path="forms" element={<FormPage />} />
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}
