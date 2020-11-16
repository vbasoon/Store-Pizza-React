import React from "react";
import { Route } from "react-router";
import axios from 'axios'
import store from "./redux/store";

import "./App.css";

import { Header } from "./components";
import { Home, Cart, } from "./pages";

const categories = ["М'ясні", "Вегетаріанські", "Гриль", "Гострі", "Закриті"];

const sortPopup = [{ name: "популярністю", type: "popular" },
{ name: "ціною", type: "price" },
{ name: "алфавітом", type: "alphabet" }];

// function App() {

//   const [pizzas, setState] = React.useState([]);

//   React.useEffect(() => {
//     axios.get('http://localhost:3000/db.json')
//       .then(({ data }) => {
//         setState(data.pizzas)
//       })
//   }, []);
//   return;
// }

class App extends React.Component {

  componentDidMount() {
    axios.get('http://localhost:3000/db.json')
      .then(({ data }) => {
        store.dispatch({

        });
      });
  }

  render() {
    return (
      <div className="App">
        <div className="wrapper">
          <Header />

          <div className="content">
            <Route exact path="/" render={() => <Home categories={categories} sortpopup={sortPopup} items={[]} />} />
            <Route exact path="/cart" render={() => <Cart />} />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
