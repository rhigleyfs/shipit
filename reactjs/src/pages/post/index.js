import styles from './post.module.css';

import React from 'react';
import PropTypes from 'prop-types';

import moment from 'moment';
import ReactMarkdown from 'react-markdown';

import PostDetails from '../../components/postDetails';
import PostSlugline from '../../components/postSlugline';
import examplePosts from '../../exampleData/posts.json';

function Post({ comments, post }) {
  return (
    <div className={styles.contentBox}>
      <article className={styles.post}>
        <h1 className={styles.heading}>{post.title}</h1>
        <PostSlugline post={post} />
        <div className={styles.content}>
          <ReactMarkdown source={post.content} />
        </div>
        <PostDetails post={post} />
      </article>
      <h2 className={styles.subTitle}>Comments</h2>
      {comments.map((comment) => (
        <div className={styles.comment}>
          <p>
            <strong>{comment.User.username}</strong>
            {` ${moment(comment.createdAt).fromNow()}`}
          </p>
          <p className={styles.commentContent}>{comment.content}</p>
        </div>
      ))}
    </div>
  );
}

Post.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      content: PropTypes.string,
    })
  ),
  post: PropTypes.shape({
    commentCount: PropTypes.number,
    content: PropTypes.string,
    createdAt: PropTypes.string,
    id: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
    title: PropTypes.string,
    user: PropTypes.shape({
      username: PropTypes.string,
    }),
    votes: PropTypes.arrayOf(
      PropTypes.shape({
        userId: PropTypes.string,
        vote: PropTypes.number,
      })
    ),
  }),
};

Post.defaultProps = {
  comments: [
    {
      content: 'Thanks for all the helpful resources!',
      createdAt: '2020-03-18 10:00:00.000',
      id: 'b04652f7-07fe-4211-8117-71448bf1a336',
      User: {
        username: 'rhigleyfs',
      },
      userId: '26d5689d-b15b-4a94-a699-44b3e0fdc401',
    },
    {
      content: 'These are all awesome links!',
      createdAt: '2020-03-22 10:00:00.000',
      id: 'b04652f7-07fe-4211-8117-71448bf1a336',
      User: {
        username: 'brandonbrown',
      },
      userId: '4f0a2a9e-1c08-4d22-8586-cbeb369c6e50',
    },
  ],
  post: examplePosts[0],
};

export default Post;
