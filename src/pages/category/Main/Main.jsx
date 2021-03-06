import '@/component/common.scss'
import React, { Component } from 'react'
import { connect } from 'react-redux'

import NavHeader from '@/component/NavHeader/NavHeader';
import Header from '../Header/Header';
import ContentList from '../ContentList/ContentList';

class Main extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="category">
        <NavHeader title="分类"></NavHeader>
        <Header></Header>
        <ContentList />
      </div>
    )
  }
}

export default connect(null, null)(Main)