const initialState = {
   items: {},
   totalPrice: 0,
   totalCount: 0
}

const getTotalPrice = arr => arr.reduce((sum, obj) => obj.price + sum, 0);

const cart = (state = initialState, action) => {
   switch (action.type) {
      case 'ADD_PRODUCT_CART': {
         const currentProducts = !state.items[action.payload.id]
            ? [action.payload]
            : [...state.items[action.payload.id].items, action.payload];

         const newItems = {
            ...state.items,
            [action.payload.id]: {
               items: currentProducts,
               totalPrice: getTotalPrice(currentProducts),
            },
         };

         const items = Object.values(newItems).map(obj => obj.items);
         const actualProducts = [].concat.apply([], items);
         const totalPrice = getTotalPrice(actualProducts);

         return {
            ...state,
            items: newItems,
            totalCount: actualProducts.length,
            totalPrice
         };
      }

      case 'REMOVE_GROUP':
         const newItems = {
            ...state.items
         };
         const currentTotalPrice = newItems[action.payload].totalPrice;
         const currentTotalCount = newItems[action.payload].items.length;
         delete newItems[action.payload];
         return {
            ...state,
            items: newItems,
            totalPrice: state.totalPrice - currentTotalPrice,
            totalCount: state.totalCount - currentTotalCount
         }

      case 'CLEAR_CART':
         return {
            items: {},
            totalPrice: 0,
            totalCount: 0
         }



      default:
         return state;
   }
}


export default cart;