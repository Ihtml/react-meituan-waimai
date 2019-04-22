import React from 'react';

import { connect } from 'react-redux';

import { TABKEY } from '../config';

import { changeTab, getFilterData, changeFilter } from '../actions/headerAction';

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.fetchData()
  }
  fetchData() {
    this.props.dispatch(getFilterData());
  }
  render() {
    return (
      <div className="header">
      </div>
    )
  }
}

export default connect(
  state => ({
    tabs: state.headerReducer.tabs,
    activeKey: state.headerReducer.activeKey,
    filterData: state.headerReducer.filterData,
    closePanel: state.headerReducer.closePanel
  })
)(Header)