import React from "react";
import { Route } from "react-router";
import axios from 'axios'
import { useSelector, useDispatch } from "react-redux";
//import store from "./redux/store";
import { setItems } from "./redux/actions/items";

import "./App.css";

import { Header } from "./components";
import { Home, Cart, } from "./pages";

const categories = ["М'ясні", "Вегетаріанські", "Гриль", "Гострі", "Закриті"];

const sortPopup = [{ name: "популярністю", type: "popular" },
{ name: "ціною", type: "price" },
{ name: "алфавітом", type: "alphabet" }];

const App = () => {


  const dispatch = useDispatch();
  const { items } = useSelector(({ items, filters }) => {
    return {
      items: items.items,
      sortBy: filters.sortBy
    }
  });


  React.useEffect(() => {
    axios.get('http://localhost:3000/db.json')
      .then(({ data }) => {
        dispatch(setItems(data.pizzas));
      });
  }, []);

  return (
    <div className="App">
      <div className="wrapper">
        <Header />

        <div className="content">
          <Route exact path="/" render={() => <Home categories={categories}
            sortpopup={sortPopup}
            items={items} />} />
          <Route exact path="/cart" render={() => <Cart />} />
        </div>
      </div>
    </div>
  )
}

// class App extends React.Component {

//   componentDidMount() {
//     axios.get('http://localhost:3000/db.json')
//       .then(({ data }) => {
//         this.props.setItems(data.pizzas);
//       });
//   }

//   render() {
//     return (
//       <div className="App">
//         <div className="wrapper">
//           <Header />

//           <div className="content">
//             <Route exact path="/" render={() => <Home categories={categories} sortpopup={sortPopup} items={this.props.items} />} />
//             <Route exact path="/cart" render={() => <Cart />} />
//           </div>
//         </div>
//       </div>
//     )
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     items: state.items.items,
//     filters: state.filters
//   }
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     setItems: (items) => dispatch(setItems(items)),
//   };
// };

export default App;
//export default connect(mapStateToProps, mapDispatchToProps)(App);
