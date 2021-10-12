import React from 'react'
import {fireEvent, render, screen} from '@testing-library/react';
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

test('adds giraffe on click', async () => {
  render(<App/>)

  // Click button
  fireEvent.click(screen.getByText('Tilføj Giraf'))

  // Wait for page to update with query text
  const items = await screen.findAllByText('Elmer')
  expect(items).toHaveLength(1)
});
