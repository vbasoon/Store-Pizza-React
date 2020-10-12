import React from "react";

import "./App.css";

import { Header } from "./components";
import {Home} from "./pages";

const items = ["М'ясні", "Вегетаріанські", "Гриль", "Гострі", "Закриті"];

const sortPopup = ["популярністю", "ціною", "алфавітом"];

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <div className="content">
          <Home items={items} sortpopup={sortPopup}/>
        </div>
      </div>
    </div>
  );
}

export default App;
