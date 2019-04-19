import '@/component/common.scss'

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, withRouter } from 'react-router-dom';
import BottomBar from '../BottomBar/BottomBar.jsx'
import Home from '../Home/Home'
import Order from '../Order/Order'
import My from "../My/My"

class Main extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <Route exact path="/home" component={Home} />
        <Route path="/order" component={Order} />
        <Route path="/my" component={My} />
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