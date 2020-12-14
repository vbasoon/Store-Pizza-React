import axios from 'axios'

export const fetchItems = (category, sortBy) => (dispatch) => {
   console.log(category, sortBy);

   dispatch({
      type: 'SET_LOADING',
      payload: false
   });

   axios.
      get(
         `http://localhost:3001/pizzas?${category !== null ? `category=${category}` : ' '
         }&_sort=${sortBy}&_order=desc`)
      .then(({ data }) => {
         dispatch(setItems(data));
      });
};

export const setItems = (items) => ({
   type: 'SET_PRODUCTS',
   payload: items,
})