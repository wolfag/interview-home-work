import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {List} from 'antd';
import {connect} from 'react-redux';

import Post from './Post';
import * as PostAction from 'store/post/action';
import * as PostSelector from 'store/post/selector';

class PostList extends React.Component {
  loadOptions = {paging: {offset: 0, limit: 10}, filter: {}};

  componentDidMount () {
    this._loadListPost ();
  }

  _onPaging = (page, pageSite) => {
    this.loadOptions.paging.offset = (page - 1) * pageSite;
    this._loadListPost ();
  };

  _loadListPost = () => {
    const {getListPost, authorId} = this.props;
    getListPost ({authorId, ...this.loadOptions});
  };

  render () {
    const {searchValues, posts, loading, paging} = this.props;
    return (
      <List
        loading={loading}
        dataSource={posts}
        pagination={{
          ...paging,
          onChange: this._onPaging,
        }}
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
}

PostList.propTypes = {
  authorId: PropTypes.number.isRequired,
};
PostList.defaultProps = {
  authorId: 1,

  //test
  posts: [
    {
      id: 1,
      title: 'title1',
      author: 'author1',
      createdAt: 1576506719083,
      tags: ['red', 'blue'],
      content: `Ant1 Design, a design language for background applications, is refined by Ant UED Team. Ant
      Design, a design language for background applications, is refined by Ant UED Team. Ant Design,
      a design language for background applications, is refined by Ant UED Team. Ant Design, a
      design language for background applications, is refined by Ant UED Team. Ant Design, a design
      language for background applications, is refined by Ant UED Team. Ant Design, a design
      language for background applications, is refined by Ant UED Team.`,
    },
    {
      id: 2,
      title: 'title2',
      author: 'author2',
      createdAt: 1376506711083,
      tags: ['brown', 'pink'],
      content: `Ant2 Design, a design language for background applications, is refined by Ant UED Team. Ant
      Design, a design language for background applications, is refined by Ant UED Team. Ant Design,
      a design language for background applications, is refined by Ant UED Team. Ant Design, a
      design language for background applications, is refined by Ant UED Team. Ant Design, a design
      language for background applications, is refined by Ant UED Team. Ant Design, a design
      language for background applications, is refined by Ant UED Team.`,
    },
    {
      id: 3,
      title: 'title3',
      author: 'author3',
      createdAt: 1476506710000,
      tags: ['green', 'yellow'],
      content: `Ant3 Design, a design language for background applications, is refined by Ant UED Team. Ant
      Design, a design language for background applications, is refined by Ant UED Team. Ant Design,
      a design language for background applications, is refined by Ant UED Team. Ant Design, a
      design language for background applications, is refined by Ant UED Team. Ant Design, a design
      language for background applications, is refined by Ant UED Team. Ant Design, a design
      language for background applications, is refined by Ant UED Team.`,
    },
  ],
};

const mapStateToProps = state => ({
  // posts: PostSelector.getListPost(state),
  paging: PostSelector.getPostPaging (state),
  loading: PostSelector.getListPostLoadingStatus (state),
});

const mapDispatchToProps = {
  getListPost: PostAction.getListPostByAuthorAction,
};

export default connect (mapStateToProps, mapDispatchToProps) (PostList);
