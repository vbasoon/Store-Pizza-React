const initialState = {
   category: null,
   sortBy: {
      type: 'popular',
      order: 'desc'
   }
}

const cart = (state = initialState, action) => {

   switch (action.type) {
      case 'SET_TOTAL_PRICE':
         return {
            ...state,
            totalPrice: action.payload,
            // isLoaded: true
         };

      case 'SET_TOTAL_COUNT':
         return {
            ...state,
            totalCount: action.payload,
            // isLoaded: true
         };

      default:
         return state;
   }
}


export default cart;