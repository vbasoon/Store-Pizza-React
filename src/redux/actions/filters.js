//Action Creator 
export const setSortBy = ({ type, order }) => ({
   type: 'SET_SORT_BY',
   payload: { type, order },
})


//Action
export const setCategory = (index) => ({
   type: 'SET_CATEGORY',
   payload: index
})