import { createStore, applyMiddleware } from 'redux'

import thunk from 'redux-thunk'
import logger from 'redux-logger'
import Reducer from './reducers/main'

const store = createStore(Reducer, applyMiddleware(logger, thunk))

export default store