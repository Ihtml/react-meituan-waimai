import './ContentList.scss';

import React from 'react';
import { connect } from 'react-redux';

import { getListData } from '../../actions/contentListAction';

/**
 * @constructor <ContentList />
 * @description 附近商家列表
 */

class ContentList extends React.Component {
  constructor(props) {
    super(props);
  }

  fetchData(page) {
    this.props.dispatch(getListData(page));

  }

  render() {
    return (
      <div className="list-content">

      </div>
    );
  }
}
export default connect(
  state => ({
    list: state.contentListReducer.list
  })
)(ContentList);