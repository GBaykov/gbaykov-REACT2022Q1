import React, { Component } from 'react';
import './header.css';
import { Routes, Route, Link } from 'react-router-dom';
import MainPage from '../../pages/mainPage';
import ErrorPage from '../../pages/errorPage';
import AboutUsPage from '../../pages/aboutUs';
import FormPage from '../../pages/formPage';

export default class Header extends Component {
  maxId = 1;

  state = {
    pagesNames: [
      this.createItem('Main Page', ''),
      this.createItem('About Us', 'about'),
      this.createItem('Forms', 'forms'),
    ],
  };

  createItem(label: string | undefined, href: string | undefined) {
    return {
      label: label,
      href: href,
      id: this.maxId++,
    };
  }

  pages = this.state.pagesNames.map((page) => {
    return (
      <Link className="headder-link" to={`/${page.href}`} key={page.id}>
        {page.label}
      </Link>
    );
  });

  render() {
    return (
      <>
        <header className="header">{this.pages}</header>
        <Routes>
          <Route path="forms" element={<FormPage />} />
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </>
    );
  }
}
