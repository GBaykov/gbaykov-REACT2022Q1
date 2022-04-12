import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Card from './components/card';
import Cards from './components/cards';
import SearchBar from './components/search';
import ErrorPage from './pages/errorPage';
import AboutUsPage from './pages/aboutUs';
import MainPage from './pages/mainPage';
import { saveToStorage } from './storage';
import userEvent from '@testing-library/user-event';
import Header from './components/header';
import { BrowserRouter } from 'react-router-dom';
import FormPage from './pages/formPage';

describe('Card', () => {
  it('returns all fields of Card component', () => {
    render(<Card />);
    expect(screen.getByText(/name:/i)).toBeInTheDocument;
    expect(screen.getByText(/password:/i)).toBeInTheDocument;
    expect(screen.getByText(/age:/i)).toBeInTheDocument;
    expect(screen.getByText(/date:/i)).toBeInTheDocument;
  });
});
describe('Cards', () => {
  it('returns cards', () => {
    render(<Cards />);
    screen.debug();
    expect(screen.getAllByText(/name:/i)).toBeInTheDocument;
    expect(screen.getAllByText(/password:/i)).toBeInTheDocument;
    expect(screen.getAllByText(/age:/i)).toBeInTheDocument;
    expect(screen.getAllByText(/date:/i)).toBeInTheDocument;
  });
});
describe('local storage', () => {
  const fakeLocalStorage = (function () {
    let store = {};

    return {
      getItem: function (key) {
        return store[key] || null;
      },
      setItem: function (key, value) {
        store[key] = value.toString();
      },
      removeItem: function (key) {
        delete store[key];
      },
      clear: function () {
        store = {};
      },
    };
  })();
  beforeAll(() => {
    Object.defineProperty(window, 'localStorage', {
      value: fakeLocalStorage,
    });
  });

  it('saves the key to the storage', () => {
    saveToStorage('fake-value');
    expect(window.localStorage.getItem('the-key')).toEqual('fake-value');
  });

  it('add item from Search Bar in local storage', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    expect(screen.getByRole('banner')).toBeInTheDocument();

    expect(screen.getByPlaceholderText('Search area')).toBeInTheDocument();
    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'React' },
    });
    saveToStorage('React');
    expect(window.localStorage.getItem('the-key')).toEqual('React');
  });
});

describe('Search', () => {
  it('returns input text', () => {
    render(<SearchBar />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Search area')).toBeInTheDocument();
  });
  it('returns focus', () => {
    render(<SearchBar />);
    expect(screen.getByRole('textbox')).not.toHaveFocus();
    screen.getByRole('textbox').focus();
    expect(screen.getByRole('textbox')).toHaveFocus();
  });
  test('Submit the form', () => {
    render(<SearchBar />);
    expect(screen.getByRole('button')).toBeInTheDocument();
    const onSubmit = jest.fn();
    userEvent.click(screen.getByRole('button'));
    expect(onSubmit).toBeCalledTimes(0);
  });
  test('returns input value of Search bar', async () => {
    render(<SearchBar />);
    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'React' },
    });
  });
});

describe('Pages', () => {
  it('returns Error Page', () => {
    render(<ErrorPage />);
    expect(screen.getByRole('main')).toBeInTheDocument;
    expect(screen.getByRole('heading')).toBeInTheDocument;
    expect(screen.getByText(/PAGE NOT FOUND/i)).toBeInTheDocument();
  });
  it('returns ABOUT US', () => {
    render(<AboutUsPage />);
    expect(screen.getByRole('main')).toBeInTheDocument;
    expect(screen.getByRole('heading')).toBeInTheDocument;
    expect(screen.getByText(/ABOUT US/i)).toBeInTheDocument;
  });
  it('returns MainPage', () => {
    render(<MainPage />);
    expect(screen.getByRole('main')).toBeInTheDocument();
    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(screen.getByText(/Main Page/i)).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
describe('Form Page', () => {
  it('returns inputs and text of the form', () => {
    render(<FormPage />);
    expect(screen.getByRole('main')).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByRole('country')).toBeInTheDocument();
    expect(screen.getByText(/Name:/i)).toBeInTheDocument();
    expect(screen.getByText(/Сhoose youre contry:/i)).toBeInTheDocument();
    expect(screen.getByText(/Сhoose youre gender:/i)).toBeInTheDocument();
    expect(screen.getByText(/Birth date:/i)).toBeInTheDocument();
    expect(screen.getByText(/Upload photo:/i)).toBeInTheDocument();
    expect(screen.getByText(/Do you agree to data processing/i)).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  test('check disabling of submit button', () => {
    render(<FormPage />);
    expect(screen.getByRole('main')).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeDisabled();
    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'React' },
    });
    expect(screen.getByRole('button')).not.toBeDisabled();
  });

  test('get error messages under the form`s inputs', () => {
    render(<FormPage />);
    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'r' },
    });
    userEvent.click(screen.getByRole('button'));
    expect(
      screen.getByText(/the name must have at least 2 and no more than 15 characters/i)
    ).toBeInTheDocument();
    expect(screen.getByText(/no country has been selected/i)).toBeInTheDocument();
    expect(screen.getByText(/you mast be over 18 years old/i)).toBeInTheDocument();
    expect(screen.getByText(/must be checked/i)).toBeInTheDocument();
    expect(screen.getByText(/add photo/i)).toBeInTheDocument();
  });
});
