import { React, Component } from 'react'
import { connect } from 'react-redux'

class Main extends Component {
  constructor(props) {
    super(props)
  }
  render () {
    return (
      <div>Main Page</div>
    )
  }
}

export default connect(null, null)(Main)