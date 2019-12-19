import React from 'react';
import {Layout} from 'antd';

import {PostList} from 'components/Post';

const {Header, Footer, Content} = Layout;

function Blog () {
  return (
    <Layout>
      <Header>Header</Header>
      <Content><PostList /></Content>
      <Footer>footer</Footer>
    </Layout>
  );
}

export default Blog;
