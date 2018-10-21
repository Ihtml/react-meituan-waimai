import './BottomBar.scss'
import React from 'react'
import { connect } from 'react-redux'
import { changeTab } from '../actions/tabAction'

class BottomBar extends React.Component {
  constructor(props) {
    super(props)
  }
  changeTab(item) {
    this.props.dispatch(changeTab({
      activeKey: item.key
    }))
  }
  renderItems() {
    let tabs = this.props.tabs

    return tabs.map((item, index) => {
      let cls = item.key + ' btn-item'
      if (item.key === this.props.activeKey) {
        cls += ' active'
      }
      let name = item.name
      return (
        <div key={index} className={cls} onClick={() => this.changeTab(item)}>
          <div className="tab-icon"></div>
          <div className="btn-name">{name}</div>
        </div>
      )
    })
  }
  render() {
    return (
      <div className="bottom-bar">
        {this.renderItems()}
      </div>
    )
  }
}

const mapState = (state) => ({
  tabs: state.tabReducer.tabs,
  activeKey: state.tabReducer.activeKey
})
export default connect(mapState, null)(BottomBar)