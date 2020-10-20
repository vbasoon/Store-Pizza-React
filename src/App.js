import React from "react";
import { Route } from "react-router";
import axios from 'axios'

import "./App.css";

import { Header } from "./components";
import { Home, Cart, } from "./pages";

const categories = ["М'ясні", "Вегетаріанські", "Гриль", "Гострі", "Закриті"];

const sortPopup = ["популярністю", "ціною", "алфавітом"];

function App() {

  const [pizzas, setState] = React.useState([]);

  React.useEffect(() => {
    axios.get('http://localhost:3000/db.json')
      .then(({ data }) => {
        setState(data.pizzas)
      })
    // fetch('http://localhost:3000/db.json')
    //   .then((resp) => resp.json())
    //   .then(json => {
    //     setState(json.pizzas);
    //   });

  }, []);
  return (
    <div className="App">
      <div className="wrapper">
        <Header />

        <div className="content">
          <Route exact path="/" render={() => <Home categories={categories} sortpopup={sortPopup} items={pizzas} />} />
          <Route exact path="/cart" render={() => <Cart />} />

          {/* <Home items={items} sortpopup={sortPopup} />
          <Cart /> */}

        </div>
      </div>
    </div>
  );
}

export default App;
