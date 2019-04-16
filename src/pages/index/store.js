import { createStore, applyMiddleware } from 'redux'

import Reducer from './reducers/main'
import thunk from 'redux-thunk'

import createHistory from 'history/createHashHistory'

import { routerMiddleware } from 'react-router-redux'

// 创建基于hash的history
const history = createHistory();

// 创建初始化tab
history.replace('home');

// 创建history的Middleware
const historyMiddl = routerMiddleware(history);

const store = createStore(Reducer, applyMiddleware(thunk, historyMiddl));

if (module.hot) {
  // 一旦reducer发生改变，重新获取reducer
  module.hot.accept('./reducers/main', () => {
    const nextRootReducer = require('./reducers/main').default
    store.replaceReducer(nextRootReducer)
  })
}

export default store