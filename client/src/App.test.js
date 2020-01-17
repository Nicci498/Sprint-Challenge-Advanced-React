import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render, fireEvent, cleanup } from '@testing-library/react';

it('matches snapshot', () =>{
  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot();
});

test(`it has "Most Searched Women's Soccer Players" text`, () => {
  const container = render(<App />);
  container.getAllByText(/Most Searched Women's Soccer Players/i);
});
