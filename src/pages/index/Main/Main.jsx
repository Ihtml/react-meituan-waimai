import React, { Component } from 'react'
import { connect } from 'react-redux'
import BottomBar from '../BottomBar/BottomBar.jsx'
import Home from '../Home/Home'

class Main extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <Home></Home>
        <BottomBar></BottomBar>
      </div>
    )
  }
}

const mapState = () => ({
})
const mapDispatch = () => ({
})

export default connect(mapState, mapDispatch)(Main)