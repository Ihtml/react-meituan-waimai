import React from 'react'
import ReactDom from 'react-dom'

import { Provider } from 'redux-redux'
import Main from './Main/Main'

ReactDom.render(
  <Provider store={store}><Main /></Provider>, document.getElementById('root')
)