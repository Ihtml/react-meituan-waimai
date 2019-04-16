import React from 'react'
import ReactDom from 'react-dom'

import { Provider } from 'react-redux'
import Main from './Main/Container'
import { store, history } from './store'
import { ConnectedRouter } from 'react-router-redux';

ReactDom.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Main />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)