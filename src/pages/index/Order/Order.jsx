import './Order.scss';
import React from 'react'

import { connect } from 'react-redux';
import { getOrderData } from '../actions/orderAction';

class Order extends React.Component {
  constructor(props) {
    super(props)
    this.page = 0
    this.fetchData(this.page);
  }
  fetchData(page) {
    this.props.dispatch(getOrderData(page));
  }

  render() {
    return (
      <div className='order'>
        <div className='header'>订单</div>
      </div>
    )
  }
}

export default connect(
  state => ({
    list: state.orderReducer.list
  })
)(Order);