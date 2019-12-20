import React, { useState, useEffect } from "react";
import { Layout } from "antd";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { get } from "lodash";

import { PostList, PostFormModal } from "components/Post";
import MyHeader from "components/Header";
import { history } from "store";

import * as PostAction from "store/post/action";
import * as AuthSelector from "store/auth/selector";
import * as AuthAction from "store/auth/action";

const { Header, Footer, Content } = Layout;

function Blog(props) {
  const userAuth = useSelector(AuthSelector.getAuthInfo);
  const [visiblePostModal, setVisiblePostModal] = useState(false);
  const [initialPostData, setInitialPostData] = useState(null);
  const [isEditPost, setIsEditPost] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch();

  const _onProfile = () => {
    history.push("/profile");
  };

  const _onNewPost = () => {
    setVisiblePostModal(true);
  };

  const _onEditPost = async post => {
    setIsEditPost(true);
    setInitialPostData(post);
    setVisiblePostModal(true);
  };

  const _onResetPostModal = () => {
    setIsEditPost(false);
    setInitialPostData(null);
    setVisiblePostModal(false);
  };

  const _onSubmitNewPost = async values => {
    dispatch(
      PostAction.addPostAction({
        data: { ...values, owner: get(userAuth, "id") }
      })
    );
    setVisiblePostModal(false);
  };

  const _onSubmitEditPost = async values => {
    dispatch(PostAction.updatePostAction({ data: { ...values } }));
    _onResetPostModal();
  };

  const _onSearchPost = values => {
    setSearchValue(values);
  };

  const _onLogout = () => {
    dispatch(AuthAction.logoutAction());
    history.push("/");
  };

  return (
    <>
      <Layout>
        <Header style={{ background: "grey" }}>
          <MyHeader
            onSearch={_onSearchPost}
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
              },
              {
                title: "Logout",
                icon: "logout",
                action: _onLogout
              }
            ]}
          />
        </Header>
        <Content>
          <PostList searchValues={searchValue} onEditPost={_onEditPost} />
        </Content>
        <Footer>This is footer</Footer>
      </Layout>
      <PostFormModal
        visible={visiblePostModal}
        onCancel={_onResetPostModal}
        onSubmit={isEditPost ? _onSubmitEditPost : _onSubmitNewPost}
        initialValues={initialPostData}
        isEdit={isEditPost}
      />
    </>
  );
}

Blog.propTypes = {};

Blog.defaultProps = {};

export default Blog;
