import React from 'react'

import { Categories, SortBlock, PizzaBlock } from "../components";
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

  React.useEffect(() => {
    if (!items.length) {


    }

    dispatch(fetchItems());
  }, []);


  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index));
  }, []);

  return (
    <div>
      <div className="container">
        <div className="content__top">
          <Categories
            onClickItem={onSelectCategory}
            categories={categories}
          />
          <SortBlock sortpopup={sortPopup} />
        </div>
        <h2 className="content__title">Всі</h2>
        <div className="content__items">
          {
            items && items.map((obj) => (
              <PizzaBlock key={obj.id} {...obj} />
            ))
          }

        </div>

      </div>
    </div>


  )
}

export default Home
