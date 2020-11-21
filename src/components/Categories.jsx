import React from "react";

const Categories = ({ categories, onClickItem }) => {
  const [activeItem, setActiveItem] = React.useState(null);

  const onSelectItem = (index) => {
    setActiveItem(index);
    onClickItem(index)
  };

  return (
    <div>
      <div className="categories">
        <ul>
          <li className={activeItem === null ? "active" : ""}>Всi</li>
          {categories &&
            categories.map((name, index) => (
              <li
                className={activeItem === index ? "active" : ""}
                onClick={() => onSelectItem(index)}
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
