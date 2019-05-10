
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

  renderItems() {
    let list = this.props.list;
    return list.map((item, index) => {
      return <ListItem key={index} itemData={item}></ListItem>
    });
  }
  render() {
    return (
      <div className="list-content">
        {this.renderItems()}
      </div>
    )
  }
}

const mapState = (state) => ({
  list: state.contentListReducer.list,
  page: state.contentListReducer.page,
  isend: state.contentListReducer.isend,
})

export default connect(mapState)(ContentList);