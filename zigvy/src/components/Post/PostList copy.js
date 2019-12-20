import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { List } from "antd";
import { useDispatch, useSelector } from "react-redux";

import Post from "./Post";
import * as PostAction from "store/post/actions";
import * as PostSelector from "store/post/selector";

function PostList(props) {
  loadOptions = { paging: { offset: 0, limit: 10 }, filter: {} };

  const dispatch = useDispatch();
  const { searchValues, authorId } = props;

  useEffect(() => {
    dispatch(PostAction.getListPostByAuthorAction({ ...loadOptions }));
  }, [loadOptions]);

  const paging = useSelector(state => PostSelector.getPostPaging(state));
  const posts = useSelector(state => PostSelector.getListPost(state));
  const loading = useSelector(state =>
    PostSelector.getListPostLoadingStatus(state)
  );

  const _onPaging = (page, pageSite) => {
    loadOptions.paging.offset = (page - 1) * pageSite;
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
            <Post {...post} />
          </List.Item>
        );
      }}
    />
  );
}

PostList.propTypes = {
  authorId: PropTypes.number.isRequired
};
PostList.defaultProps = {
  authorId: 1,

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
