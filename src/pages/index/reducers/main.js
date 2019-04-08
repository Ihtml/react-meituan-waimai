import { combineReducers } from 'redux'
import tabReducer from './tabReducer'
import categoryReducer from './categoryReducer'
import contentListReducer from './contentListReducer.js'
import orderReducer from './orderReducer.js'
import scrollViewReducer from '@/component/ScrollView/scrollViewReducer.js';

const reducers = combineReducers({
  scrollViewReducer,
  tabReducer,
  categoryReducer,
  contentListReducer,
  orderReducer
})

export default reducers
