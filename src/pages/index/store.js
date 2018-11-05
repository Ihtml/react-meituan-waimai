import { createStore, applyMiddleware } from 'redux'

import Reducer from './reducers/main'
import thunk from 'redux-thunk'

const store = createStore(Reducer, applyMiddleware(thunk))

if (module.hot) {
  // 一旦reducer发生改变，重新获取reducer
  module.hot.accept('./reducers/main', () => {
    const nextRootReducer = require('./reducers/main').default
    store.replaceReducer(nextRootReducer)
  })
}

export default store