import 'component/common.scss';

import { React, Component } from 'react'
import { connect } from 'react-redux'

import NavHeader from 'component/NavHeader/NavHeader';


class Main extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="detail">
        <NavHeader></NavHeader>
      </div>
    )
  }
}

export default connect(null, null)(Main)