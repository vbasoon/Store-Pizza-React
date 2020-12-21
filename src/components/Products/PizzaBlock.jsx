import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
//import LoadingBlock from './LoadingBlock';
import Button from '../Button';


const PizzaBlock = (props) => {
   const typesNames = ['тонке', 'традиційне'];
   const availableSizes = [26, 30, 40];
   const [activeType, setActiveType] = React.useState(props.types[0]);
   const [activeSize, setActiveSize] = React.useState(0);

   //if (props.isLoading) {
   //   return <LoadingBlock />;
   //}

   const onSelectType = (index) => {
      setActiveType(index);
   };

   const onSelectSize = (index) => {
      setActiveSize(index);
   };

   const onAddPizza = () => {
      const obj = {
         id: props.id,
         name: props.name,
         imageUrl: props.imageUrl,
         price: props.price,
         size: activeSize,
         type: activeType
      }
      props.onClickAddProduct(obj)
   }
   return (
      <div>
         <div className="pizza-block">
            <img
               className="pizza-block__image"
               src={props.imageUrl}
               alt="Pizza"
            />
            <h4 className="pizza-block__title">{props.name}</h4>
            <div className="pizza-block__selector">

               <ul>
                  {typesNames.map((type, index) => (
                     <li
                        key={type}
                        onClick={() => onSelectType(index)}
                        className={classNames({
                           active: activeType === index,
                           disabled: !props.types.includes(index),
                        })}
                     >{type}</li>
                  ))}
               </ul>
               <ul>
                  {availableSizes.map((size, index) => (
                     <li
                        key={size}
                        onClick={() => onSelectSize(index)}
                        className={classNames({
                           active: activeSize === index,
                           disabled: !props.sizes.includes(size),
                        })}
                     >{size} cm.</li>
                  ))}
                  {/* <li className="active">26 см.</li>
                  <li className="disabled">30 см.</li>
                  <li>40 см.</li> */}
               </ul>
            </div>
            <div className="pizza-block__bottom">
               <div className="pizza-block__price">від {props.price} грн.</div>
               <Button onClick={onAddPizza} className="button--add" outline>
                  <svg
                     width="12"
                     height="12"
                     viewBox="0 0 12 12"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg"
                  >
                     <path
                        d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                        fill="white"
                     />
                  </svg>
                  <span>Додати</span>
                  <i>2</i>
               </Button>
            </div>
         </div>{" "}


      </div>
   )
}

PizzaBlock.propTypes = {
   //    id: PropTypes.number,
   name: PropTypes.string.isRequired,
   imageUrl: PropTypes.string.isRequired,
   types: PropTypes.arrayOf(PropTypes.number).isRequired,
   sizes: PropTypes.arrayOf(PropTypes.number).isRequired,
   price: PropTypes.number,
   category: PropTypes.number,
   rating: PropTypes.number,
   isLoaded: PropTypes.bool,
   onClickAddProduct: PropTypes.func
};

PizzaBlock.defauitProps = {
   name: '---',
   price: 0,
   types: [],
   sizes: [],
   isLoaded: false
};

export default PizzaBlock
