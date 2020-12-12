import React from 'react'

import { Categories, SortBlock, PizzaBlock, PizzaLoadingBlock } from "../components";
import { useSelector, useDispatch } from "react-redux";
import { setCategory } from '../redux/actions/filters'
import { fetchItems } from "../redux/actions/items";

const categories = ["М'ясні", "Вегетаріанські", "Гриль", "Гострі", "Закриті"];

const sortPopup = [{ name: "популярністю", type: "popular" },
{ name: "ціною", type: "price" },
{ name: "алфавітом", type: "alphabet" }];

const Home = () => {
  const dispatch = useDispatch();
  const items = useSelector(({ items }) => items.items);
  const isLoaded = useSelector(({ items }) => items.isLoaded);
  const { category, sortBy } = useSelector(({ filters }) => filters);

  // console.log(category, sortBy);

  React.useEffect(() => {
    // if (!items.length) {


    // }

    dispatch(fetchItems());
  }, [category]);


  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index));
  }, []);

  return (
    <div>
      <div className="container">
        <div className="content__top">
          <Categories
            activeCategory={category}
            onClickCategory={onSelectCategory}
            categories={categories}
          />
          <SortBlock activeSortType={sortBy} sortpopup={sortPopup} />
        </div>
        <h2 className="content__title">Всі</h2>
        <div className="content__items">
          {isLoaded
            ? items.map((obj) => (
              <PizzaBlock key={obj.id} {...obj} isLoaded={true} />
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
