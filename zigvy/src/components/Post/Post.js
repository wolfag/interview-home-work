import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import { Typography, Tag } from "antd";
import { isEmpty } from "lodash";

import Constant from "common/constant";
import { CommentList } from "components/Comment";

const { Title, Paragraph } = Typography;

function Post(props) {
  const { title, author, createdAt, tags, content } = props;
  return (
    <div
      style={{
        margin: 30,
        width: "100%"
      }}
    >
      <div
        style={{ display: "flex", justifyContent: "center", marginBottom: 20 }}
      >
        <Title level={2}>{title}</Title>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 10
        }}
      >
        <div>
          <div>{`Author: ${author}`}</div>
          <div>{`Created at: ${moment(createdAt).format(
            Constant.dateFormat
          )}`}</div>
        </div>
        <div>
          {!isEmpty(tags) &&
            tags.map(tag => {
              return <Tag key={tag}>{tag}</Tag>;
            })}
        </div>
      </div>
      <div>
        <Paragraph ellipsis={{ rows: 4, expandable: true }}>
          {content}
        </Paragraph>
      </div>
      <CommentList />
    </div>
  );
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  createdAt: PropTypes.number.isRequired,
  tags: PropTypes.array,
  content: PropTypes.string.isRequired
};
Post.defaultProps = {
  title: "Post 1",
  author: "Author 1",
  createdAt: 1576506719083,
  tags: ["red", "blue"],
  content: `Ant Design, a design language for background applications, is refined by Ant UED Team. Ant
  Design, a design language for background applications, is refined by Ant UED Team. Ant Design,
  a design language for background applications, is refined by Ant UED Team. Ant Design, a
  design language for background applications, is refined by Ant UED Team. Ant Design, a design
  language for background applications, is refined by Ant UED Team. Ant Design, a design
  language for background applications, is refined by Ant UED Team.`
};

export default Post;
