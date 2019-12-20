import React from 'react';
import PropTypes from 'prop-types';
import {Comment, Avatar, Tooltip, Icon, Modal} from 'antd';
import moment from 'moment';
import {useDispatch, useSelector} from 'react-redux';

import Constant from 'common/constant';
import * as CommentAction from 'store/comment/action';

const {confirm} = Modal;

function MyComment (props) {
  const {
    id,
    owner,
    userId,
    author,
    avatar,
    content,
    created_at,
    onReply,
    onDelete,
    onEdit,
  } = props;

  const dispatch = useDispatch ();

  const _onDeleteComment = ({commentId, ownerId, userId}) => {
    dispatch (CommentAction.deleteCommentAction ({commentId, ownerId, userId}));
  };

  const _showDeleteConfirm = () => {
    confirm ({
      title: 'Are you sure delete this comment?',
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk () {
        _onDeleteComment ({id, owner, userId});
      },
      onCancel () {
        console.log ('Cancel');
      },
    });
  };

  const actions = [
    <span key="comment-basic-reply-to" onClick={onReply}>
      Reply to
    </span>,
  ];

  if (owner === userId) {
    actions.unshift (
      <span key="comment-basic-edit">
        <Tooltip title="Edit">
          <Icon type="edit" onClick={onEdit} />
        </Tooltip>
      </span>
    );
    actions.unshift (
      <span key="comment-basic-delete">
        <Tooltip title="Delete">
          <Icon type="close" onClick={_showDeleteConfirm} />
        </Tooltip>
      </span>
    );
  }

  return (
    <Comment
      actions={actions}
      author={<a>{owner}</a>}
      avatar={<Avatar src={avatar} alt={author} />}
      content={<p>{content}</p>}
      datetime={
        <Tooltip title={moment (created_at).format (Constant.dateTimeFormat)}>
          <span>{moment (created_at).fromNow ()}</span>
        </Tooltip>
      }
    />
  );
}

MyComment.propTypes = {
  id: PropTypes.number.isRequired,
  owner: PropTypes.number.isRequired,
  userId: PropTypes.number.isRequired, //get from store , id of user login
  author: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  created_at: PropTypes.number.isRequired,
  onReply: PropTypes.func.isRequired,
  loading: PropTypes.bool,
};
MyComment.defaultProps = {
  id: 1,
  owner: 1,
  userId: 1,
  author: 'Han Solo',
  avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
  content: 'Fork the repo and checkout your forked repo',
  created_at: 1576506719083,
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
