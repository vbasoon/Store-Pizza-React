const initialState = {
   items: [],
   isLoaded: false
};

const items = (state = initialState, action) => {

   if (action.type === 'SET_PRODUCTS') {
      return {
         ...state,
         items: action.payload,
         isLoaded: true
      }
   }
   return state;
}

export default items;