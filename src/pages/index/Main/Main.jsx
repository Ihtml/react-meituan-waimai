import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions/tabAction'
import BottomBar from '../BottomBar/BottomBar'

class Main extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <div onClick={() => { this.props.handleClick() }}>Main Page, num: {this.props.num}</div>
        <BottomBar />
      </div>
    )
  }
}

const mapState = (state) => ({
  num: state.tabReducer.num
})
const mapDispatch = (dispatch) => ({
  handleClick() {
    const action = addTodo({ num: 10 })
    dispatch(action)
  }
})

export default connect(mapState, mapDispatch)(Main)