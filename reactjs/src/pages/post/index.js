import styles from './post.module.css';

import React from 'react';
import PropTypes from 'prop-types';

import ReactMarkdown from 'react-markdown';

import examplePosts from '../../exampleData/posts.json';

function Post({ post }) {
  return (
    <>
      <h1 className={styles.heading}>{post.title}</h1>
      <article className={styles.content}>
        <ReactMarkdown source={post.content} />
      </article>
    </>
  );
}

Post.propTypes = {
  post: PropTypes.shape({
    createdAt: PropTypes.string,
    id: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
    title: PropTypes.string,
    user: PropTypes.shape({
      username: PropTypes.string,
    }),
    views: PropTypes.number,
    votes: PropTypes.arrayOf(
      PropTypes.shape({
        userId: PropTypes.string,
        vote: PropTypes.number,
      })
    ),
  }),
};

Post.defaultProps = {
  post: examplePosts[0],
};

export default Post;
