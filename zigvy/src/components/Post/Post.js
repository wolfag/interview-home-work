import React, { useState } from "react";
import PropTypes from "prop-types";
import moment from "moment";
import { Typography, Tag, Card, Icon, Modal } from "antd";
import { isEmpty } from "lodash";
import { useDispatch, useSelector } from "react-redux";

import Constant from "common/constant";
import { CommentList } from "components/Comment";
import * as PostAction from "store/post/action";

const { Title, Paragraph } = Typography;
const { confirm } = Modal;

function Post(props) {
  const { id, title, owner, created_at, tags, content, onEditPost } = props;

  const dispatch = useDispatch();

  const _showDeleteConfirm = () => {
    confirm({
      title: "Are you sure delete this post?",
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {
        _onDeletePost(id);
      },
      onCancel() {
        console.log("Cancel");
      }
    });
  };

  const _onDeletePost = postId => {
    dispatch(PostAction.deletePostAction({ postId }));
  };

  return (
    <Card
      style={{
        width: "100%"
      }}
      extra={
        <span
          style={{
            width: 50,
            display: "flex",
            justifyContent: "space-between"
          }}
        >
          <Icon type="edit" onClick={onEditPost} />
          <Icon type="close" onClick={_showDeleteConfirm} />
        </span>
      }
      title={
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: 20
          }}
        >
          <Title level={2}>{title}</Title>
        </div>
      }
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 10
        }}
      >
        <div>
          <div>{`Author: ${owner}`}</div>
          <div>{`Created at: ${moment(created_at).format(
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
      <CommentList postId={id} />
    </Card>
  );
}

Post.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  owner: PropTypes.number.isRequired,
  author: PropTypes.string,
  created_at: PropTypes.number.isRequired,
  tags: PropTypes.array,
  content: PropTypes.string.isRequired,
  onEditPost: PropTypes.func
};
Post.defaultProps = {
  onEditPost: () => {
    alert("onEditPost");
  }
};

export default Post;
