import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {List, Collapse} from 'antd';
import {useDispatch, useSelector} from 'react-redux';

import Comment from './Comment';
import ReplyEditor from 'components/ReplyEditor';
import * as CommentAction from 'store/comment/action';
import * as CommentSelector from 'store/comment/selector';

const {Panel} = Collapse;

function CommentList (props) {
  const {postId, ownerId} = props;
  const dispatch = useDispatch ();

  const comments = useSelector (CommentSelector.getListComment (postId));

  useEffect (
    () => {
      dispatch (CommentAction.getListCommentByPostAction ({postId}));
    },
    [postId]
  );

  return (
    <Collapse bordered={false}>
      <Panel header={`${comments.length} replies`} showArrow={false}>
        <List
          header={<ReplyEditor postId={postId} ownerId={ownerId} />}
          dataSource={comments}
          split={false}
          pagination={{
            onChange: page => {
              console.log (page);
            },
            pageSize: 5,
          }}
          renderItem={comment => {
            return (
              <List.Item key={comment.id}>
                <Comment {...comment} />
              </List.Item>
            );
          }}
        />
      </Panel>
    </Collapse>
  );
}

CommentList.propTypes = {
  postId: PropTypes.number.isRequired,
  ownerId: PropTypes.number.isRequired,
};

CommentList.defaultProps = {
  postId: 1,
  ownerId: 1,

  //test
  comments: [
    {
      id: 1,
      owner: 1,
      post: 1,
      content: 'Boring!!!',
      createdAt: 1575158400000,
    },
    {
      id: 2,
      owner: 3,
      post: 1,
      content: 'Very good. But very bad also',
      createdAt: 1576627200000,
    },
    {
      id: 3,
      owner: 2,
      post: 2,
      content: 'Delightful unreserved impossible few estimating men favourable see entreaties. She propriety immediate was improving. He or entrance humoured likewise moderate. Much nor game son say feel. Fat make met can must form into gate. Me we offending prevailed discovery. ',
      createdAt: 1575936000000,
    },
  ],
};

export default CommentList;
