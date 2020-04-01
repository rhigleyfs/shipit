import 'easymde/dist/easymde.min.css';
import styles from './createPost.module.css';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SimpleMDE from 'react-simplemde-editor';
import ReactTags from 'react-tag-autocomplete';

class CreatePost extends Component {
  constructor(props) {
    super(props);
    this.state = { content: '', tags: [] };
  }

  handleMarkdownChange = (value) => {
    this.setState({
      content: value,
    });
  };

  handleDelete = (i) => {
    const { tags } = this.state;
    const newTags = [...tags];
    newTags.splice(i, 1);
    this.setState({ tags: newTags });
  };

  handleAddition = (tag) => {
    const { tags } = this.state;
    const newTags = [...tags, tag];
    this.setState({ tags: newTags });
  };

  onSubmit = () => {
    const { content, tags } = this.state;
    const { addPost, history } = this.props;
    addPost({ content, tags });
    history.push('/posts');
  };

  render() {
    const { suggestions } = this.props;
    const { content, tags } = this.state;
    return (
      <div className={styles.createPost}>
        <h1 className={styles.heading}>Create a New Post</h1>
        <SimpleMDE
          value={content}
          onChange={this.handleMarkdownChange}
          options={{
            autofocus: true,
            previewClass: [styles.preview, 'editor-preview'],
            spellChecker: true,
          }}
        />
        <ReactTags
          tags={tags}
          suggestions={suggestions}
          handleDelete={this.handleDelete}
          handleAddition={this.handleAddition}
          allowNew
          classNames={{
            root: styles.tags,
            rootFocused: styles.isFocused,
            search: styles.tagsSearch,
            searchInput: styles.tagsSearchInput,
            selected: styles.tagsSelected,
            selectedTag: styles.tagsSelectedTag,
            selectedTagName: styles.tagsSelectedTagName,
            suggestionActive: styles.isActive,
            suggestionDisabled: styles.isDisabled,
            suggestions: styles.tagsSuggestions,
          }}
        />
        <button type="button" onClick={this.onSubmit} className={styles.button}>
          Save Post
        </button>
      </div>
    );
  }
}

CreatePost.propTypes = {
  addPost: PropTypes.func,
  suggestions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    })
  ),
};

CreatePost.defaultProps = {
  addPost: () => {},
  suggestions: [
    { id: '3a73f9f2-96f5-431f-a9f5-9aa0a55306dc', name: 'redux' },
    { id: '460b3749-c808-40bb-ba43-9881afe77975', name: 'node' },
    { id: '9e7a5010-e1a0-42f9-bb9a-23d7ac7e63d3', name: 'react' },
  ],
};

export default CreatePost;
