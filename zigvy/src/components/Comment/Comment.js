import React from 'react';
import PropTypes from 'prop-types';
import {Comment, Avatar, Tooltip, Icon} from 'antd';
import moment from 'moment';

import Constant from 'common/constant';

function MyComment (props) {
  const {author, avatar, content, createdAt, onReply, onDelete, onEdit} = props;

  const actions = [
    <span key="comment-basic-delete">
      <Tooltip title="Delete">
        <Icon type="close" onClick={onDelete} />
      </Tooltip>
    </span>,
    <span key="comment-basic-edit">
      <Tooltip title="Edit">
        <Icon type="edit" onClick={onEdit} />
      </Tooltip>
    </span>,
    <span key="comment-basic-reply-to" onClick={onReply}>
      Reply to
    </span>,
  ];

  return (
    <Comment
      actions={actions}
      author={<a>{author}</a>}
      avatar={<Avatar src={avatar} alt={author} />}
      content={<p>{content}</p>}
      datetime={
        <Tooltip title={moment (createdAt).format (Constant.dateTimeFormat)}>
          <span>{moment (createdAt).fromNow ()}</span>
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
  loading: PropTypes.bool,
};
MyComment.defaultProps = {
  author: 'Han Solo',
  avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
  content: 'Fork the repo and checkout your forked repo',
  createdAt: 1576506719083,
  onReply: () => {
    alert ('onReply');
  },
  onEdit: () => {
    alert ('onEdit');
  },
  onDelete: () => {
    alert ('onDelete');
  },
};

export default MyComment;
