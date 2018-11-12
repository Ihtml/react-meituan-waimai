import { combineReducers } from 'redux'
import tabReducer from './tabReducer'
import categoryReducer from './categoryReducer'
import contentListReducer from './contentListReducer.js'

const reducers = combineReducers({
  tabReducer,
  categoryReducer,
  contentListReducer
})

export default reducers
