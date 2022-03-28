import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Card from './components/card';
import SearchBar from './components/input';
import ErrorPage from './pages/errorPage';
import AboutUsPage from './pages/aboutUs';
import MainPage from './pages/mainPage';

describe('Card', () => {
  it('returns all fields of Card component', () => {
    render(<Card />);
    expect(screen.getByText(/name:/i)).toBeInTheDocument;
    expect(screen.getByText(/password:/i)).toBeInTheDocument;
    expect(screen.getByText(/age:/i)).toBeInTheDocument;
    expect(screen.getByText(/date:/i)).toBeInTheDocument;
  });
});

describe('Search', () => {
  it('returns input text', () => {
    render(<SearchBar />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Search area')).toBeInTheDocument();
    expect(screen.getByDisplayValue('')).toBeInTheDocument();
  });
  test('returns value of Search bar', () => {
    render(<SearchBar />);
    screen.debug();
    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'React' },
    });
    screen.debug();
  });
});

describe('Pages', () => {
  it('returns Error Page', () => {
    render(<ErrorPage />);
    expect(screen.getByText(/PAGE NOT FOUND/i)).toBeInTheDocument;
  });
  it('returns ABOUT US', () => {
    render(<AboutUsPage />);
    expect(screen.getByText(/ABOUT US/i)).toBeInTheDocument;
  });
  it('returns ABOUT US', () => {
    render(<MainPage />);
    expect(screen.getByText(/Main Page/i)).toBeInTheDocument;
  });
});
