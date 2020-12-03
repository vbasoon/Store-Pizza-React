

export const fetchItems = () => ({
   type: 'SET_FETCH',
   payload: fetch
})

export const setItems = (items) => ({
   type: 'SET_PRODUCTS',
   payload: items,
})