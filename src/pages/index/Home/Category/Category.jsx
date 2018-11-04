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
    this.props.getHeadData()
  }
  renderItems() {
    let items = this.props.items
    let _items = JSON.parse(JSON.stringify(items))

    return _items.splice(0, 8).map((item, index) => {
      return (
        <div key={index} className="category-item" onClick="{this.goCategory}">
          <img className='item-cion' src='{item.url}' />
          <p className='item-name'>{item.name}</p>
        </div>
      )
    })

  }

  render() {
    return (
      <div className="category-content clearfix">
        {this.renderItems()}
      </div>
    )
  }
}

const mapState = (state) => ({

  items: state.categoryReducer.items
})
const mapDispatch = (dispatch) => ({
  getHeadData() {
    dispatch(getHeaderData())
  }
})

export default connect(mapDispatch, mapState)(Category)
