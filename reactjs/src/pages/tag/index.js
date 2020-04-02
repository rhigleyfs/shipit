import React, { Component } from 'react';
import PropTypes from 'prop-types';

import PostList from '../../components/postList';
import examplePosts from '../../exampleData/posts.json';

class Tag extends Component {
  componentDidMount() {
    const {
      fetchPosts,
      match: {
        params: { tag },
      },
    } = this.props;
    fetchPosts({ tag });
  }

  render() {
    const { posts } = this.props;
    return (
      <>
        <PostList posts={posts} />
      </>
    );
  }
}

Tag.propTypes = {
  fetchPosts: PropTypes.func,
  posts: PropTypes.arrayOf(PropTypes.object),
};

Tag.defaultProps = {
  fetchPosts: () => {},
  posts: examplePosts.slice(3, 4),
};

export default Tag;
