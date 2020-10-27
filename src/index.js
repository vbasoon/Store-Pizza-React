import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from 'react-router-dom'
import store from './redux/store'
import { Provider } from 'react-redux'

import "./scss/app.scss";
import App from "./App";

store.dispatch({
  type: 'SE_SORT_BY',
  payload: 'price'
})

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
      <Provider store={store}>
        <button onClick={inc}>+1</button>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
