import axios from 'axios'

export const fetchItems = () => {
   axios.get('http://localhost:3001/db.json')
      .then(({ data }) => {
         dispatch(setItems(data.pizzas));
      })
}

export const setItems = (items) => ({
   type: 'SET_PRODUCTS',
   payload: items,
})