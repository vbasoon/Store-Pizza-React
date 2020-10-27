import React from 'react'
import { createStore } from 'redux'

function counter(state = 0, action) {
   switch (action.type) {
      case 'Додати':
         return state + 1
      case 'Відняти':
         return state - 1
      default:
         return state
   }
}

const store = createStore(counter);

export default store