import React from 'react'

import { Categories, SortBlock, PizzaBlock, PizzaLoadingBlock } from "../components";
import { useSelector, useDispatch } from "react-redux";
import { setCategory, setSortBy } from '../redux/actions/filters'
import { fetchItems } from "../redux/actions/items";
//import { addProductToCart } from '../redux/actions/cart';

const categories = ["М'ясні", "Вегетаріанські", "Гриль", "Гострі", "Закриті"];

const sortPopup = [
  { name: "популярністю", type: "popular", order: 'desc' },
  { name: "ціною", type: "price", order: 'asc' },
  { name: "алфавітом", type: "name", order: 'asc' },
];

const Home = () => {
  const dispatch = useDispatch();
  const items = useSelector(({ items }) => items.items);
  const cartItems = useSelector(({ cart }) => cart.items);
  const isLoaded = useSelector(({ items }) => items.isLoaded);
  const { category, sortBy } = useSelector(({ filters }) => filters);

  // console.log(category, sortBy);

  React.useEffect(() => {
    // if (!items.length) {


    // }

    dispatch(fetchItems(category, sortBy));
  }, [category, sortBy]);


  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index));
  }, []);

  const onSelectSortTypes = React.useCallback((type) => {
    dispatch(setSortBy(type));
  }, []);

  const handleAddProductToCart = (obj) => {
    dispatch({
      type: 'ADD_PRODUCT_CART',
      payload: obj,
    });
  }

  return (
    <div>
      <div className="container">
        <div className="content__top">
          <Categories
            activeCategory={category}
            onClickCategory={onSelectCategory}
            categories={categories}
          />
          <SortBlock activeSortType={sortBy.type} sortpopup={sortPopup} onClickSortType={onSelectSortTypes} />
        </div>
        <h2 className="content__title">Всі</h2>
        <div className="content__items">
          {isLoaded
            ? items.map((obj) => (
              <PizzaBlock
                onClickAddProduct={handleAddProductToCart}
                key={obj.id}
                addedCount={cartItems[obj.id] && cartItems[obj.id].items.length}
                {...obj}
              />
            ))
            : Array(12)
              .fill(0)
              .map((_, index) => <PizzaLoadingBlock key={index} />)
          }

        </div>
      </div>
    </div>


  )
}

export default Home
