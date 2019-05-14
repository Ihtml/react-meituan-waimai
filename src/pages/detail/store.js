import { createStore } from 'redux'

import Reducer from './reducers/main'
const store = createStore(Reducer)

import createHistory from 'history/createHashHistory'

// 创建基于hash的history
const history = createHistory();

module.exports = {
  store,
  history
}