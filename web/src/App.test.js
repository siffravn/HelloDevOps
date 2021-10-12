import React from 'react'
import ReactDOM from 'react-dom';
import { render, screen } from '@testing-library/react';
import App from './App';
import {sillyMethod} from './App'
import {HashRouter} from "react-router-dom";

it('name', () => {
  const div = document.createElement('div');
  ReactDOM.render(<HashRouter> <App/> </HashRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
})

test('Silly test',()=>{
  const result = sillyMethod(2,3)
  expect(result).toBe(5);
})
