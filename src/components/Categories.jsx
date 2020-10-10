import React from "react";

const Categories = (items, onClickItem) => {
  const [activeItem, setActiveItem] = React.useState(null);

  const onSelectItem = (index) => {
    setActiveItem(index);
  };

  return (
    <div>
      <div className="categories">
        <ul>
          <li className={activeItem === null ? "active" : ""}>Всi</li>
          {items &&
            items.items.map((name, index) => (
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
