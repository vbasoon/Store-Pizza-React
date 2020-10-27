import { combineReducers } from 'redux';

import filtersReducer from './filters'
import itemsReducer from './items'

const rootReducer = combineReducers({
   filtersReducer,
   itemsReducer
})

export default rootReducer