import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render, fireEvent, cleanup } from '@testing-library/react';

it('matches snapshot', () =>{
  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot();
});

test(`it has "Women's Soccer Players" text`, ()=>{
  const appl = render(<App />);
  appl.getByAltText(/women's soccer players/i)
})
