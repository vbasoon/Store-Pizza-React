import React from "react";
import PropTypes from 'prop-types';

const Categories = React.memo(function Categories({ activeCategory, categories, onClickCategory }) {

  return (
    <div>
      <div className="categories">
        <ul>
          <li
            className={activeCategory === null ? "active" : ""}
            onClick={() => onClickCategory(null)}
          >Всi
          </li>
          {categories &&
            categories.map((name, index) => (
              <li
                className={activeCategory === index ? "active" : ""}
                onClick={() => onClickCategory(index)}
                key={`${name}_${index}`}
              >
                {name}
              </li>
            ))}
        </ul>
      </div>
    </div>
  )
});

Categories.propTypes = {
  activeCategory: PropTypes.oneOf([PropTypes.number.isRequired]),
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClickCategory: PropTypes.func
};

Categories.defauitProps = { activeCategory: null, items: [] };


export default Categories;
