import '@/component/common.scss'

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, withRouter } from 'react-router-dom';
import BottomBar from '../BottomBar/BottomBar.jsx'
import Home from '../Home/Home'
import Order from '../Order/Order'

class Main extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <Route exact path="/home" component={Home} />
        <Route path="/order" component={Order} />
        <BottomBar></BottomBar>
      </div>
    )
  }
}

const mapState = () => ({
})
const mapDispatch = () => ({
})

export default withRouter(connect(mapState, mapDispatch)(Main))