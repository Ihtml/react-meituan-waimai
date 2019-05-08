
import React from 'react';
import { connect } from 'react-redux';
import { getListData } from '../actions/contentListAction';


class ContentList extends React.Component {
  constructor(props) {
    super(props);

    // 请求第一屏数据
    this.fetchData();

  }

  fetchData() {
    this.props.dispatch(getListData({}))
  }
  render() {
    return (
      <div>ContentList</div>
    )
  }
}

export default connect(
  null, null
)(ContentList);