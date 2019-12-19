import React from "react";
import PropTypes from "prop-types";
import { List } from "antd";

import Post from "./Post";

function PostList(props) {
  const { posts } = props;
  return (
    <List
      dataSource={posts}
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
