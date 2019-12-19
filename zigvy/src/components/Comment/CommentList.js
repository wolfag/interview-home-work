import React from 'react';
import PropTypes from 'prop-types';
import {List} from 'antd';

import Comment from './Comment';

function CommentList (props) {
  const {comments} = props;
  return (
    <List
      dataSource={comments}
      renderItem={comment => {
        return <List.Item key={comment.id}><Comment {...comment} /></List.Item>;
      }}
    />
  );
}

CommentList.propTypes = {
  postId: PropTypes.number.isRequired,
};

CommentList.defaultProps = {
  postId: 1,

  //test
  comments: [
    {
      id: 1,
      owner: 1,
      post: 1,
      content: 'Boring!!!',
      created_at: 1576506719083,
    },
    {
      id: 2,
      owner: 3,
      post: 1,
      content: 'Very good. But very bad also',
      created_at: 1576506719083,
    },
    {
      id: 3,
      owner: 2,
      post: 2,
      content: 'Delightful unreserved impossible few estimating men favourable see entreaties. She propriety immediate was improving. He or entrance humoured likewise moderate. Much nor game son say feel. Fat make met can must form into gate. Me we offending prevailed discovery. ',
      created_at: 1576506719083,
    },
  ],
};

export default CommentList;
