import { combineReducers } from 'redux';

import filtersReducer from './filters'
import itemsReducer from './items'

const rootReducer = combineReducers({
   filters: filtersReducer,
   items: itemsReducer
});

export default rootReducer