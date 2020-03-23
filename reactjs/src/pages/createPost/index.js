import 'easymde/dist/easymde.min.css';
import styles from './createPost.module.css';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SimpleMDE from 'react-simplemde-editor';

class CreatePost extends Component {
  constructor(props) {
    super(props);
    this.state = { content: '' };
  }

  handleMarkdownChange = value => {
    this.setState({
      content: value,
    });
  };

  render() {
    const { content } = this.state;
    return (
      <div className={styles.createPost}>
        <h1 className={styles.heading}>Create a New Post</h1>
        <SimpleMDE
          value={content}
          onChange={this.handleMarkdownChange}
          options={{
            autofocus: true,
            spellChecker: true,
          }}
        />
      </div>
    );
  }
}

CreatePost.propTypes = {};

export default CreatePost;
