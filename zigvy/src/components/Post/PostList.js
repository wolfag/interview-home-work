import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { List } from "antd";
import { useDispatch, useSelector } from "react-redux";
import update from "immutability-helper";

import Post from "./Post";
import * as PostAction from "store/post/action";
import * as PostSelector from "store/post/selector";
import Constant from "common/constant";

function PostList(props) {
  const [loadOptions, setLoadOptions] = useState({
    paging: { offset: 0, limit: Constant.postSize },
    filter: {}
  });

  const dispatch = useDispatch();
  const { searchValues, onEditPost } = props;

  useEffect(() => {
    const tmp = update(loadOptions, {
      filter: { $merge: { searchValues } },
      paging: { offset: { $set: 0 } }
    });
    setLoadOptions(tmp);
  }, [searchValues]);

  useEffect(() => {
    dispatch(PostAction.getListPostAction({ ...loadOptions }));
  }, [loadOptions]);

  const paging = useSelector(state => PostSelector.getPostPaging(state));
  const posts = useSelector(state => PostSelector.getListPost(state));
  const loading = useSelector(state =>
    PostSelector.getListPostLoadingStatus(state)
  );

  const _onPaging = (page, pageSite) => {
    const offset = (page - 1) * pageSite;
    const tmp = update(loadOptions, { paging: { offset: { $set: offset } } });
    setLoadOptions(tmp);
  };

  const _onEditPost = post => () => {
    onEditPost(post);
  };
  return (
    <List
      loading={loading}
      dataSource={posts}
      pagination={{
        ...paging,
        onChange: _onPaging
      }}
      renderItem={post => {
        return (
          <List.Item key={post.id}>
            <Post {...post} onEditPost={_onEditPost(post)} />
          </List.Item>
        );
      }}
    />
  );
}

PostList.propTypes = {};
PostList.defaultProps = {
  //test
  posts: [
    {
      id: 1,
      title: "title1",
      author: "author1",
      createdAt: 1576506719083,
      tags: ["red", "blue"],
      content: `Ant1 Design, a design language for background applications, is refined by Ant UED Team. Ant
      Design, a design language for background applications, is refined by Ant UED Team. Ant Design,
      a design language for background applications, is refined by Ant UED Team. Ant Design, a
      design language for background applications, is refined by Ant UED Team. Ant Design, a design
      language for background applications, is refined by Ant UED Team. Ant Design, a design
      language for background applications, is refined by Ant UED Team.`
    },
    {
      id: 2,
      title: "title2",
      author: "author2",
      createdAt: 1376506711083,
      tags: ["brown", "pink"],
      content: `Ant2 Design, a design language for background applications, is refined by Ant UED Team. Ant
      Design, a design language for background applications, is refined by Ant UED Team. Ant Design,
      a design language for background applications, is refined by Ant UED Team. Ant Design, a
      design language for background applications, is refined by Ant UED Team. Ant Design, a design
      language for background applications, is refined by Ant UED Team. Ant Design, a design
      language for background applications, is refined by Ant UED Team.`
    },
    {
      id: 3,
      title: "title3",
      author: "author3",
      createdAt: 1476506710000,
      tags: ["green", "yellow"],
      content: `Ant3 Design, a design language for background applications, is refined by Ant UED Team. Ant
      Design, a design language for background applications, is refined by Ant UED Team. Ant Design,
      a design language for background applications, is refined by Ant UED Team. Ant Design, a
      design language for background applications, is refined by Ant UED Team. Ant Design, a design
      language for background applications, is refined by Ant UED Team. Ant Design, a design
      language for background applications, is refined by Ant UED Team.`
    }
  ]
};

export default PostList;
