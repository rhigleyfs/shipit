import styles from './tags.module.css';


import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Container, Panel, PanelHeading, PanelIcon, PanelBlock, Control, Input, PanelTabs, PanelTab, Checkbox, Button, Icon} from 'bloomer';

import PostList from '../../components/postList';
import examplePosts from '../../exampleData/posts.json';


class Tags extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: '',
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
                  <PanelTab>Public</PanelTab>
                  <PanelTab>Private</PanelTab>
                  <PanelTab>Sources</PanelTab>
                  <PanelTab>Fork</PanelTab>
              </PanelTabs>
              <PanelBlock className={styles.panelBlock} isActive>
                  <PanelIcon className="fa fa-atom" />
                  React
              </PanelBlock>
              <PanelBlock className={styles.panelBlock}>
                  <PanelIcon className="fa fa-atlas" />
                  Redux
              </PanelBlock>
              <PanelBlock className={styles.panelBlock}>
                  <PanelIcon className="fa fa-brain" />
                  Functional Programming
              </PanelBlock>
              <PanelBlock className={styles.panelBlock}>
                  <PanelIcon className="fa fa-bug" />
                  Unit Testing
              </PanelBlock>
              <PanelBlock className={styles.panelBlock}>
                  <PanelIcon className="fa fa-adjust" />
                  Continuous Integration
              </PanelBlock>
              <PanelBlock tag='label' className={styles.panelBlock}>
                  <Checkbox> Remember me</Checkbox>
              </PanelBlock>
              <PanelBlock className={styles.panelBlock}>
                  <Button isOutlined isFullWidth isColor='primary'> Reset all filters</Button>
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
  // allPosts: PropTypes.shape({
  //   new: PropTypes.arrayOf(PropTypes.object),
  //   popular: PropTypes.arrayOf(PropTypes.object),
  //   top: PropTypes.arrayOf(PropTypes.object),
  //   watching: PropTypes.arrayOf(PropTypes.object),
  // }),
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
