import React from "react";

class Categories extends React.Component {
  state = {
    activeItem: 3,
  };

  onSelectItem = (index) => {
    this.setState({
      activeItem: index,
    });
  };

  render() {
    const { props, onClickItem } = this.props;
    return (
      <div className="categories">
        <ul>
          <li>Всi</li>
          {props.map((name, index) => (
            <li
              className={this.state.activeItem === index ? "active" : ""}
              onClick={() => this.onSelectItem(index)}
              key={`${name}_${index}`}
            >
              {name}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

// const Categories = (items, onClickItem) => {
//   return (
//     <div>
//       <div className="categories">
//         <ul>
//           <li className="active">Всi</li>
//           {items.items.map((name, index) => (
//             <li
//               onClick={() => items.onClickItem(name)}
//               key={`${name}_${index}`}
//             >
//               {name}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

export default Categories;
