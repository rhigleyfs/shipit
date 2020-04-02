import styles from './tag.module.css';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Button } from 'bloomer';

import PostList from '../../components/postList';
import examplePosts from '../../exampleData/posts.json';
import tagData from '../../exampleData/tags.json';

class Tag extends Component {
  componentDidMount() {
    const {
      fetchPosts,
      match: {
        params: { tagId },
      },
    } = this.props;
    fetchPosts({ tag: tagId });
  }

  onWatchClick = () => {
    const {
      addToWatched,
      match: {
        params: { tagId },
      },
    } = this.props;
    addToWatched(tagId);
  };

  render() {
    const { posts, tag } = this.props;
    return (
      <>
        <h1 className={styles.heading}>
          {tag.name}
          <Button className={styles.button} onClick={this.onWatchClick}>
            Watch Tag
          </Button>
        </h1>

        <PostList posts={posts} />
      </>
    );
  }
}

Tag.propTypes = {
  addToWatched: PropTypes.func,
  fetchPosts: PropTypes.func,
  posts: PropTypes.arrayOf(PropTypes.object),
  tag: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
  }),
};

Tag.defaultProps = {
  addToWatched: () => {},
  fetchPosts: () => {},
  posts: examplePosts.filter(
    (post) => post.tags.filter((t) => t.id === tagData[3].id).length
  ),
  tag: tagData[3],
};

export default Tag;
