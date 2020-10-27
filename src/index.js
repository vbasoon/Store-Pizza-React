import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from 'react-router-dom'
import store from './redux/store'

import "./scss/app.scss";

import App from "./App";
import Button from './components/Button';

const inc = () => {
  store.dispatch({
    type: 'Додати',
  });
};

store.subscribe(() => {
  console.log('Cтан змінений', store.getState());

})



ReactDOM.render(
  <React.StrictMode>
    <Router>
      <button onClick={inc}>+1</button>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
