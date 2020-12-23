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

      default:
         return state;
   }
}


export default cart;