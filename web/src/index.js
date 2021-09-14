import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {HashRouter, Route, Switch} from "react-router-dom";
import About from "./About";

ReactDOM.render(
  <React.StrictMode>
      <HashRouter>
          <Switch>
              <Route path={"/"} exact component={App}/>
              <Route path={"/about"} component={About}/>
              <Route render={()=><h1>404</h1>}/>
          </Switch>
      </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
