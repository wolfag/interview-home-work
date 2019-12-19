import React from "react";
import PropTypes from "prop-types";
import { Comment, Avatar, Tooltip } from "antd";
import moment from "moment";

import Constant from "common/constant";

function MyComment(props) {
  const { author, avatar, content, createdAt, onReply } = props;

  const actions = [
    <span key="comment-basic-reply-to" onClick={onReply}>
      Reply to
    </span>
  ];

  return (
    <Comment
      actions={actions}
      author={<a>{author}</a>}
      avatar={<Avatar src={avatar} alt={author} />}
      content={<p>{content}</p>}
      datetime={
        <Tooltip title={moment(createdAt).format(Constant.dateTimeFormat)}>
          <span>{moment(createdAt).fromNow()}</span>
        </Tooltip>
      }
    />
  );
}

MyComment.propTypes = {
  author: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  createdAt: PropTypes.number.isRequired,
  onReply: PropTypes.func.isRequired,
  loading: PropTypes.bool
};
MyComment.defaultProps = {
  author: "Han Solo",
  avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
  content: "Fork the repo and checkout your forked repo",
  createdAt: 1576506719083,
  onReply: () => {
    alert("onReply");
  }
};

export default MyComment;
