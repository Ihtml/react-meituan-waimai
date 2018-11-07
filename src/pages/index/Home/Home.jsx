import React from 'react';

import Header from './Header/Header.jsx';
import Category from './Category/Category.jsx';
import ContentList from './ContentList/ContentList';

/**
 * @constructor <Home />
 * @description 首页tab代码
 */

class Home extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Category />
        <ContentList />
      </div>
    );
  }
}

export default Home;