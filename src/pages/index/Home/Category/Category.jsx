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
    this.props.getHeaderData()
  }
  renderItems() {
    let items = this.props.items
    let _items = JSON.parse(JSON.stringify(items))

    return _items.splice(0, 8).map((item, index) => {
      return (
        <div key={index} className="category-item" >
          <img className='item-icon' src={item.url} />
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
const mapDispacth = (dispatch) => ({
  getHeaderData() {
    dispatch(getHeaderData())
  }
})

export default connect(mapState, mapDispacth)(Category)
