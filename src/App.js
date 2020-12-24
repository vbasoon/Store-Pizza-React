import React from "react";
import { Route } from "react-router-dom";

//import store from "./redux/store";


import "./App.css";

import { Header } from "./components";
import { Home, Cart, } from "./pages";

const App = () => {

  return (
    <div className="App">
      <div className="wrapper">
        <Header />

        <div className="content">
          <Route exact path="/" component={Home} />
          <Route exact path="/cart" component={Cart} />
        </div>
      </div>
    </div>
  )
}

export default App;
