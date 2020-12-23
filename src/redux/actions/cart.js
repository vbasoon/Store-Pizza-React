export const addProductToCart = (productObj) => ({
   type: 'ADD_PRODUCT_CART',
   payload: productObj,
});

export const clearCart = () => ({
   type: 'CLEAR_CART',
})

export const removeGroup = (id) => ({
   type: 'REMOVE_GROUP',
   payload: id
})