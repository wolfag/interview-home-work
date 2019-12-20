import React, {useState} from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import {Typography, Tag, Card, Icon, Modal} from 'antd';
import {isEmpty} from 'lodash';

import Constant from 'common/constant';
import {CommentList} from 'components/Comment';

const {Title, Paragraph} = Typography;
const {confirm} = Modal;

function Post (props) {
  const {
    id,
    title,
    author,
    createdAt,
    tags,
    content,
    onDeletePost,
    onEditPost,
  } = props;

  const _showDeleteConfirm = () => {
    confirm ({
      title: 'Are you sure delete this post?',
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk () {
        onDeletePost (id);
      },
      onCancel () {
        console.log ('Cancel');
      },
    });
  };

  return (
    <Card
      style={{
        width: '100%',
      }}
      extra={
        <span
          style={{
            width: 50,
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Icon type="edit" onClick={onEditPost} />
          <Icon type="close" onClick={_showDeleteConfirm} />
        </span>
      }
      title={
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: 20,
          }}
        >
          <Title level={2}>{title}</Title>
        </div>
      }
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: 10,
        }}
      >
        <div>
          <div>{`Author: ${author}`}</div>
          <div
          >{`Created at: ${moment (createdAt).format (Constant.dateFormat)}`}</div>
        </div>
        <div>
          {!isEmpty (tags) &&
            tags.map (tag => {
              return <Tag key={tag}>{tag}</Tag>;
            })}
        </div>
      </div>
      <div>
        <Paragraph ellipsis={{rows: 4, expandable: true}}>
          {content}
        </Paragraph>
      </div>
      <CommentList postId={id} />
    </Card>
  );
}

Post.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  createdAt: PropTypes.number.isRequired,
  tags: PropTypes.array,
  content: PropTypes.string.isRequired,
  onDeletePost: PropTypes.func,
  onEditPost: PropTypes.func,
};
Post.defaultProps = {
  id: 1,
  title: 'Post 1',
  author: 'Author 1',
  createdAt: 1576506719083,
  tags: ['red', 'blue'],
  content: `Ant Design, a design language for background applications, is refined by Ant UED Team. Ant
  Design, a design language for background applications, is refined by Ant UED Team. Ant Design,
  a design language for background applications, is refined by Ant UED Team. Ant Design, a
  design language for background applications, is refined by Ant UED Team. Ant Design, a design
  language for background applications, is refined by Ant UED Team. Ant Design, a design
  language for background applications, is refined by Ant UED Team.`,
  onDeletePost: () => {
    alert ('onDeletePost');
  },
  onEditPost: () => {
    alert ('onEditPost');
  },
};

export default Post;
