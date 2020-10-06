import React from "react";

const Categories = (items, onClickItem) => {
  return (
    <div>
      <div className="categories">
        <ul>
          <li className="active">Всi</li>
          {items.items.map((name, index) => (
            <li
              onClick={() => items.onClickItem(name)}
              key={`${name}_${index}`}
            >
              {name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Categories;
