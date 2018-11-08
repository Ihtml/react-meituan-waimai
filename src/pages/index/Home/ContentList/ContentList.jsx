import './ContentList.scss';

import React from 'react';
import { connect } from 'react-redux';

import ListItem from '../../../../component/ListItem/ListItem';

/**
 * @constructor <ContentList />
 * @description 附近商家列表
 */

class ContentList extends React.Component {
  constructor(props) {
    super(props);
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

      </div>
    );
  }
}
export default connect(
  state => ({
    list: state.contentListReducer.list
  })
)(ContentList);