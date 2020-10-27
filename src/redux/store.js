import { createStore, combineReducers } from 'redux';

import filtersReducer from './reducers/filters'
import itemsReducer from './reducers/items'

const rootReducer = combineReducers({
   filtersReducer,
   itemsReducer
})

const store = createStore(rootReducer)



export default store