import axios from 'axios'

export const setLoaded = (payload) => ({
   type: 'SET_LOADING',
   payload,
});
//import { useDispatch } from "react-redux";

export const fetchItems = (category, sortBy) => (dispatch) => {
   console.log(category, sortBy);

   dispatch(setLoaded(false));
   axios.get(`http://localhost:3001/pizzas`)
      .then(({ data }) => {
         dispatch(setItems(data));
      });
};

export const setItems = (items) => ({
   type: 'SET_PRODUCTS',
   payload: items,
})