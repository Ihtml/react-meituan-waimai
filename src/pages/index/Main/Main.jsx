import React, { Component } from 'react'
import { connect } from 'react-redux'
import BottomBar from '../BottomBar/BottomBar.jsx'

class Main extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
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