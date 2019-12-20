import React from 'react';
import PropTypes from 'prop-types';
import {useDispatch} from 'react-redux';

import * as CommentAction from 'store/comment/action';
import CommentForm from './CommentForm';

function ReplyPost (props) {
  const {postId, ownerId} = props;
  const dispatch = useDispatch ();

  const _onSubmitComment = async values => {
    dispatch (
      CommentAction.addCommentAction ({
        data: {...values, post: postId, owner: ownerId},
      })
    );
  };

  return <CommentForm onSubmit={_onSubmitComment} />;
}

ReplyPost.propTypes = {
  postId: PropTypes.number.isRequired,
  ownerId: PropTypes.number.isRequired,
};
ReplyPost.defaultProps = {
  postId: 1,
  ownerId: 1,
};

export default ReplyPost;
