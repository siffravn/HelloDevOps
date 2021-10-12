import React from 'react'
import { render, screen } from '@testing-library/react';
import App from './App';
import {sillyMethod} from './App'
import {HashRouter} from "react-router-dom";

it('app', () => {
  render(<HashRouter> <App/> </HashRouter>)
  expect(screen.getByText('Tilføj Giraf')).toBeInTheDocument();
})

test('Silly test',()=>{
  const result = sillyMethod(2,3)
  expect(result).toBe(5);
})
