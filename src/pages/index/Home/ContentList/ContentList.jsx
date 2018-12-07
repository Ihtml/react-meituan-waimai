import './ContentList.scss';

import React from 'react';
import { connect } from 'react-redux';

import ListItem from '@/component/ListItem/ListItem';
import ScrollView from '@/component/ScrollView/ScrollView.jsx';
import { getListData } from '../../actions/contentListAction';

/**
 * @constructor <ContentList />
 * @description 附近商家列表
 */

class ContentList extends React.Component {
  constructor(props) {
    super(props)
    this.page = 0
    // 请求第一道数据
    this.fetchData(this.page)
    this.state = {
      isend: false
    }
  }
  fetchData(page) {
    this.props.dispatch(getListData(page))
  }

  renderItems() {
    let list = this.props.list;
    return list.map((item, index) => {
      return <ListItem key={index} itemData={item}></ListItem>
    });
  }

  render() {
    return (
      <div className="list-content">
        <h4 className="list-title">
          <span className="title-line"></span>
          <span>附近商家</span>
          <span className="title-line"></span>
        </h4>
        <ScrollView dis="content" loadCallback={this.onLoadPage.bind(this)} isend={this.state.isend}>
          {this.renderItems()}
        </ScrollView>
      </div>
    );
  }
}
export default connect(
  state => ({
    list: state.contentListReducer.list
  })
)(ContentList);