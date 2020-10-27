store.dispatch({
   type: 'SE_SORT_BY',
   payload: 'price'
})

const inc = () => {
   store.dispatch({
      type: 'Додати',
   });
};

store.subscribe(() => {
   console.log('Cтан змінений', store.getState());

})

