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

export const addToGroup = (id) => ({
   type: 'ADD_TO_GROUP',
   payload: id
})

export const removeFromGroup = (id) => ({
   type: 'REMOVE_FROM_GROUP',
   payload: id
})