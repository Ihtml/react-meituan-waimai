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
  /**
   * 渲染顶部默认tab
   */
  renderTabs() {
    let tabs = this.props.tabs;
    let array = []

    for (const key in tabs) {
      let item = tabs[key]
      let cls = item.key + ' item'
      if (item.key === this.props.activeKey && !this.props.closePanel) {
        cls += ' current'
      }
      array.push(
        <div className={cls} key={item.key} onClick={() => { this.changeTab(item.key) }}>
          {item.text}
        </div>
      )
    }

    return array
  }
  render() {
    return (
      <div className="header">
        <div className="header-top">
          {this.renderTabs()}
        </div>
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