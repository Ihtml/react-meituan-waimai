import React from 'react';

import { connect } from 'react-redux';

import { TABKEY } from '../config';

import { changeTab, getFilterData, changeFilter } from '../actions/headerAction';
import { getListData } from '../actions/contentListAction';


class Header extends React.Component {
  constructor(props) {
    super(props)
    this.fetchData()
  }
  fetchData() {
    this.props.dispatch(getFilterData());
  }
  /**
    * 变化当前点击的item状态 同时发起filter的请求
    */
  changeDoFilter(item, key, dataList) {
    this.revertActive(key, dataList);
    item.active = true;
    this.props.dispatch(changeFilter({
      item,
      key
    }));

    this.props.dispatch(getListData({
      filterData: item,
      toFirstPage: true
    }));
  }
  /**
   * 点击切换tab
   */
  changeTab(key) {
    let closePanel = false;
    // 如果前后点击的是同一个tab 就关闭panel
    if (this.props.activeKey === key && !this.props.closePanel) {
      closePanel = true;
    }
    this.props.dispatch(changeTab({
      activeKey: key,
      closePanel: closePanel
    }));
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
  /**
 * 综合排序类目
 */
  renderTypeContent() {
    let typeList = this.props.filterData.sort_type_list || [];
    return typeList.map((item, index) => {
      let cls = item.active ? "type-item active" : "type-item";

      return (
        <li onClick={() => this.changeDoFilter(item, TABKEY.type, typeList)} key={index} className={cls}>
          {item.name}
        </li>
      );
    })
  }
  /**
   * 全部分类外类目
   */
  renderCateContent() {
    let cateList = this.props.filterData.category_filter_list || [];

    return cateList.map((item, index) => {
      return (
        <li key={index} className="cate-item">
          <p className="item-title">{item.name}<span className="item-count">{item.quantity}</span></p>
          <div className="item-content clearfix">
            {/* {this.renderCateInnerContent(item, cateList)} */}
          </div>
        </li>
      )
    });
  }
  /**
   * 筛选外面类目
   */
  renderFilterContent() {
    let filterList = this.props.filterData.activity_filter_list || [];
    return filterList.map((item, index) => {
      return (
        <li key={index} className="filter-item">
          <p className="filter-title">{item.group_title}</p>
          <div className="item-content clearfix">
            {/* {this.renderFilterInnerContent(item.items, filterList)} */}
          </div>
        </li>
      );
    })
  }
  /**
   * 渲染过滤面板
   */
  renderContent() {
    let tabs = this.props.tabs;
    let array = [];
    for (let key in tabs) {
      let item = tabs[key];
      let cls = item.key + '-panel';
      if (item.key === this.props.activeKey) {
        cls += ' current';
      }

      if (item.key === TABKEY.cate) {
        array.push(
          <ul key={item.key} className={cls}>
            {this.renderCateContent()}
          </ul>
        );
      } else if (item.key === TABKEY.type) {
        array.push(
          <ul key={item.key} className={cls}>
            {this.renderTypeContent()}
          </ul>
        );
      } else if (item.key === TABKEY.filter) {
        array.push(
          <ul key={item.key} className={cls}>
            {this.renderFilterContent()}
          </ul>
        );
      }
    }
    return array;
  }
  render() {
    let cls = 'panel';
    if (!this.props.closePanel) {
      cls += ' show';
    } else {
      cls = 'panel';
    }
    return (
      <div className="header">
        <div className="header-top">
          {this.renderTabs()}
        </div>
        <div className={cls}>
          <div className="panel-inner">
            {this.renderContent()}
          </div>
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