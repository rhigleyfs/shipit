import styles from './tags.module.css';


import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Container, Panel, PanelHeading, PanelIcon, PanelBlock, Control, Input, PanelTabs, PanelTab, Checkbox, Button, Icon} from 'bloomer';

import PostList from '../../components/postList';
import examplePosts from '../../exampleData/posts.json';
import exampleTags from '../../exampleData/tags.json';


class Tags extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: '',
      activeTag: 'React',
    };
  }

  componentDidMount() {
    const { fetchPosts, loggedIn } = this.props;
    if (loggedIn) {
      this.setState({ activeTab: 'react' });
      fetchPosts({ type: 'react' });
    } else {
      this.setState({ activeTab: 'redux' });
      fetchPosts({ type: 'redux' });
    }
  }

  render() {

    const { activeTab } = this.state;
    const { allPosts, fetchPosts, loggedIn } = this.props;
    const activateTab = tab => () => {
      this.setState({ activeTab: tab });
      fetchPosts({ type: tab });
    };
    const posts = allPosts[activeTab];

    const renderTags = exampleTags.map(tag => {
      // TODO: Add isActive state to <PanelBlock>
      const detectActive = this.state.activeTag === tag.title ? "is-active" : null
      console.log("detectActive: ", detectActive)
      return(
        <PanelBlock
          className={[styles.panelBlock, detectActive]}

          >
            <PanelIcon className={`fa ${tag.icon}`} />
            {tag.title}
            <Button isSize="small" isColor='success' isOutlined>
              Watch
            </Button>
        </PanelBlock>
      )
    })
    return (
      <>
        <h1 className={styles.heading}>Tags</h1>
        <Container>
          <section className="tagsSection">
            <Panel className={styles.panel}>
              <PanelHeading className={styles.panelHeading}>Discover Topics</PanelHeading>
              <PanelBlock className={styles.panelBlock}>
                  <Control hasIcons='left'>
                      <Input isSize='small' placeholder='Search' />
                      <Icon isSize='small' isAlign='left'>
                          <span className='fa fa-search' aria-hidden='true' />
                      </Icon>
                  </Control>
              </PanelBlock>
              <PanelTabs className={styles.panelTabs}>
                  <PanelTab isActive>All</PanelTab>
                  <PanelTab>Watching</PanelTab>
                  <PanelTab>Popular</PanelTab>
                  <PanelTab>New</PanelTab>
              </PanelTabs>
              {renderTags}
              <PanelBlock className={styles.panelBlock}>
                  <Button isSize="small" isOutlined isFullWidth isColor='primary'>Clear Selected</Button>
              </PanelBlock>
          </Panel>
        </section>
        <section className="tagsSection">
          <PostList posts={posts} />
        </section>
        </Container>
      </>
    );
  }
}



Tags.propTypes = {
  allPosts: PropTypes.shape({
    react: PropTypes.arrayOf(PropTypes.object),
    redux: PropTypes.arrayOf(PropTypes.object),
  }),
  fetchPosts: PropTypes.func,
  loggedIn: PropTypes.bool,
};

Tags.defaultProps = {
  allPosts: {
    react: examplePosts.filter(post => post.tags.includes("react")),
    redux: examplePosts.filter(post => post.tags.includes("redux")),
  },
  fetchPosts: () => {},
  loggedIn: true,
};

export default Tags;
