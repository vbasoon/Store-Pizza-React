import axios from 'axios'
//import { useDispatch } from "react-redux";

export const fetchItems = () => (dispatch) => {
   //const dispatch = useDispatch();
   axios.get('http://localhost:3001/pizzas')
      .then(({ data }) => {
         dispatch(setItems(data));
      });
};

export const setItems = (items) => ({
   type: 'SET_PRODUCTS',
   payload: items,
})