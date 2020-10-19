import React from 'react'

import { Categories, SortBlock, PizzaBlock } from "../components";


const Home = ({ categories, sortpopup }) => {

  return (
    <div>
      <div className="container">
        <div className="content__top">
          <Categories
            onClickItem={(name) => console.log(name)}
            categories={categories}
          />
          <SortBlock sortpopup={sortpopup} />
        </div>
        <h2 className="content__title">Всі</h2>
        <div className="content__items">
          <PizzaBlock />

        </div>

      </div>
    </div>


  )
}

export default Home
