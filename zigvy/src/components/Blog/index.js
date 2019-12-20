import React, { useState , useEffect} from "react";
import { Layout } from "antd";
import {useDispatch, useSelector} from 'react-redux';
import PropTypes from 'prop-types';

import { PostList, PostFormModal } from "components/Post";
import MyHeader from "components/Header";

import * as PostAction from 'store/post/action';


const { Header, Footer, Content } = Layout;

function Blog(props) {
  const {userId} = props;
  const [visiblePostModal, setVisiblePostModal] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch ();

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
    dispatch(PostAction.addPostAction({data:{...values, owner: userId}}))
    setVisiblePostModal(false);
  };

  const _onSearchPost = values => {
    alert(values);
  };

  const _onSearchChange = event => {
    setSearchValue(event.target.value);
  };

  return (
    <>
      <Layout>
        <Header style={{ background: "grey" }}>
          <MyHeader
            searchValue={searchValue}
            onSearch={_onSearchPost}
            onSearchChange={_onSearchChange}
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
          <PostList authorId={userId} />
        </Content>
        <Footer>This is footer</Footer>
      </Layout>
      <PostFormModal
        visible={visiblePostModal}
        onCancel={_onCancelNewPost}
        onSubmit={_onSubmitNewPost}
      />
    </>
  );
}

Blog.propTypes={
  userId: PropTypes.number.isRequired
}

Blog.defaultProps={
  userId: 1
}

export default Blog;
