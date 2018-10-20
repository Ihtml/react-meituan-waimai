import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions/tabAction'
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

const mapState = (state) => ({
})
const mapDispatch = (dispatch) => ({
})

export default connect(mapState, mapDispatch)(Main)