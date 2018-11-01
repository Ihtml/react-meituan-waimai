import './Category.scss'

import React from 'react'
import axios from 'axios'

import { getHeaderData } from '../../actions/categoryActions'

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
    axios({
      method: 'get',
      url: ''
    }).then((res) => {
      this.props.dispatch(getHeaderData(res.data))
    })
  }
}
