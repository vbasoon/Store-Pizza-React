import React from "react";

import "./App.css";

import { Header } from "./components";
import Home from "./pages/Home";

const items = ["М'ясні", "Вегетаріанські", "Гриль", "Гострі", "Закриті"];

const sortPopup = ["популярністю", "ціною", "алфавітом"];

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <div className="content">
          <Home />
        </div>
      </div>
    </div>
  );
}

export default App;
