import styles from './postList.module.css';

import React from 'react';
import PropTypes from 'prop-types';

import { Icon, Tag } from 'bloomer';
import moment from 'moment';

export default function PostList({ addVote, currentUserId, posts }) {
  // direction being 1 if up vote and -1 if down vote
  const onVoteClick = direction => () => {
    addVote(direction);
  };

  // has this user voted?
  const isSelected = (votes, direction) => {
    const vote = votes.find(v => v.userId === currentUserId);
    // the current user voted for this post and this direction
    if (vote && vote.direction === direction) return 'is-selected';
    // the current user voted for this post but not this direction
    if (vote) return 'is-disabled';
    // the current user did not vote for this post
    return '';
  };

  // calculate the votes based on the array of votes
  const totalVotes = votes =>
    votes.map(vote => vote.direction).reduce((a, b) => a + b, 0);

  return (
    <div className={styles.list}>
      {posts.map(post => (
        <div key={post.id} className={styles.post}>
          <h1 className={styles.title}>{post.title}</h1>
          <h2 className={styles.subTitle}>
            Posted By:
            {post.username}
            {' on '}
            {moment(post.date).format('MMMM Do YYYY, h:mm a')}
          </h2>
          <div>
            {post.tags.map(tag => (
              <Tag key={tag}>{`#${tag}`}</Tag>
            ))}
          </div>
          <div className={styles.meta}>
            <Icon
              className={`fa fa-arrow-up ${isSelected(post.votes, 1)}`}
              onClick={onVoteClick(1)}
            />
            {totalVotes(post.votes)}
            <Icon
              className={`fa fa-arrow-down ${isSelected(post.votes, -1)}`}
              onClick={onVoteClick(-1)}
            />
            {`${post.views} Views`}
          </div>
        </div>
      ))}
    </div>
  );
}

PostList.propTypes = {
  addVote: PropTypes.func,
  currentUserId: PropTypes.string,
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.object,
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
    })
  ),
};

PostList.defaultProps = {
  addVote: () => {},
  currentUserId: 'ed7586f6-6022-487a-b7f0-404fa3c2da13',
  posts: [],
};
