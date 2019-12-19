import React from "react";
import { Layout } from "antd";

import { PostList } from "components/Post";
import MyHeader from "components/Header";

const { Header, Footer, Content } = Layout;

function Blog() {
  const _onProfile = () => {
    alert("onProfile");
  };

  const _onNewPost = () => {
    alert("onNewPost");
  };

  return (
    <Layout>
      <Header>
        <MyHeader
          menus={[
            {
              title: "Profile",
              icon: "user",
              action: _onProfile
            },
            {
              title: "New Post",
              action: _onNewPost,
              icon: "plus"
            }
          ]}
        />
      </Header>
      <Content>
        <PostList />
      </Content>
      <Footer>footer</Footer>
    </Layout>
  );
}

export default Blog;
