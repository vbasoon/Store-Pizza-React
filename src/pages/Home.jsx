import React from 'react'

import { Categories, SortBlock, PizzaBlock } from "../components";
import { useSelector } from "react-redux";

const categories = ["М'ясні", "Вегетаріанські", "Гриль", "Гострі", "Закриті"];

const sortPopup = [{ name: "популярністю", type: "popular" },
{ name: "ціною", type: "price" },
{ name: "алфавітом", type: "alphabet" }];

const Home = () => {
  const { items } = useSelector(({ items, filters }) => {
    return {
      items: items.items,
      sortBy: filters.sortBy
    }
  });

  return (
    <div>
      <div className="container">
        <div className="content__top">
          <Categories
            onClickItem={(name) => console.log(name)}
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
