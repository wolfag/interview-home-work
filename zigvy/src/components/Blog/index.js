import React, { useState } from "react";
import { Layout } from "antd";

import { PostList, PostFormModal } from "components/Post";
import MyHeader from "components/Header";

const { Header, Footer, Content } = Layout;

function Blog() {
  const [visiblePostModal, setVisiblePostModal] = useState(false);

  const _onProfile = () => {
    alert("onProfile");
  };

  const _onNewPost = () => {
    setVisiblePostModal(true);
  };

  const _onCancelNewPost = () => {
    setVisiblePostModal(false);
  };

  const _onSubmitNewPost = async values => {
    console.log(values);
    setVisiblePostModal(false);
  };

  return (
    <>
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
      <PostFormModal
        visible={visiblePostModal}
        onCancel={_onCancelNewPost}
        onSubmit={_onSubmitNewPost}
      />
    </>
  );
}

export default Blog;
