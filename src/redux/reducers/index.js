import { combineReducers } from 'redux';

import filtersReducer from './reducers/filters'
import itemsReducer from './reducers/items'

const rootReducer = combineReducers({
   filtersReducer,
   itemsReducer
})

export default store