import './Category.scss'

import React from 'react'

import { getHeaderData } from '../../actions/categoryActions'
import { connect } from 'react-redux';

/**
 * @constructor <Category />
 * @description 外卖类别
 */

class Category extends React.Component {
  constructor(props) {
    super(props)
    this.fetchData()
  }

  fetchData() {
    this.props.dispatch(getHeaderData())
  }

  render() {
    return (
      <div></div>
    )
  }
}

export default connect(null, null)(Category)
