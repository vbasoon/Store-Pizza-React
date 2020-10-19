import React from "react";
import { Route } from "react-router";

import "./App.css";

import { Header } from "./components";
import { Home, Cart } from "./pages";

const items = ["М'ясні", "Вегетаріанські", "Гриль", "Гострі", "Закриті"];

const sortPopup = ["популярністю", "ціною", "алфавітом"];

function App() {

  const [pizzas, setState] = React.useState([]);

  React.useEffect(() => {
    fetch('http://localhost:3001/db.json')
      .then((resp) => resp.json())
      .then(json => {
        setState(json.pizzas);
      });

  }, []);
  return (
    <div className="App">
      <div className="wrapper">
        <Header />

        <div className="content">
          <Route exact path="/" render={() => <Home items={items} sortpopup={sortPopup} />} />
          <Route exact path="/cart" render={() => <Cart />} />

          {/* <Home items={items} sortpopup={sortPopup} />
          <Cart /> */}

        </div>
      </div>
    </div>
  );
}

export default App;
