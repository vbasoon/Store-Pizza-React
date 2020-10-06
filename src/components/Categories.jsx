import React from "react";

// class Categories extends React.Component {
//   state = {
//     activeItem: 3,
//   };

//   onSelectItem = (index) => {
//     this.setState({
//       activeItem: index,
//     });
//   };

//   render() {
//     const { props, onClickItem } = this.props;
//     return (
//       <div className="categories">
//         <ul>
//           <li>Всi</li>
//           {props.map((name, index) => (
//             <li
//               className={this.state.activeItem === index ? "active" : ""}
//               onClick={() => this.onSelectItem(index)}
//               key={`${name}_${index}`}
//             >
//               {name}
//             </li>
//           ))}
//         </ul>
//       </div>
//     );
//   }
// }.

const Categories = (items, onClickItem) => {
  const [activeItem, setActiveItem] = React.useState(null);

  const onSelectItem = (index) => {
    setActiveItem(index);
  };

  return (
    <div>
      <div className="categories">
        <ul>
          <li>Всi</li>
          {items.items.map((name, index) => (
            <li
              className={activeItem === index ? "active" : ""}
              onClick={() => setActiveItem(index)}
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
