import './BottomBar.scss'
import React from 'react'
import { connect } from 'react-redux'

class BottomBar extends React.Component {
  constructor(props) {
    super(props)
  }
  renderItems() {
    let tabs = this.props.tabs

    return tabs.map((item, index) => {
      let cls = item.key + ' btn-item'
      let name = item.name
      return (
        <div key={index} className={cls}>
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