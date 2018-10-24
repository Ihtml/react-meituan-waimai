import { createStore } from 'redux'

import Reducer from './reducers/main'
const store = createStore(Reducer)

if (module.hot) {
  // 一旦reducer发生改变，重新获取reducer
  module.hot.accept('./reducers/main', () => {
    const nextRootReducer = require('./reducers/main').default
    store.replaceReducer(nextRootReducer)
  })
}

export default store