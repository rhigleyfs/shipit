import styles from './home.module.css';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Icon, Tab, TabLink, TabList, Tabs } from 'bloomer';

import PostList from '../../components/postList';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: '',
    };
  }

  componentDidMount() {
    const { fetchPosts, loggedIn } = this.props;
    if (loggedIn) {
      this.setState({ activeTab: 'watching' });
      fetchPosts({ type: 'watching' });
    } else {
      this.setState({ activeTab: 'popular' });
      fetchPosts({ type: 'popular' });
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
        <h1 className={styles.heading}>Top Posts</h1>
        <Tabs className={styles.tabs}>
          <TabList>
            {loggedIn && (
              <Tab isActive={activeTab === 'watching'}>
                <TabLink onClick={activateTab('watching')}>
                  <Icon isSize="small" className="fa fa-eye" />
                  <span>Watching</span>
                </TabLink>
              </Tab>
            )}
            <Tab isActive={activeTab === 'popular'}>
              <TabLink onClick={activateTab('popular')}>
                <Icon isSize="small" className="fa fa-fire" />
                <span>Popular</span>
              </TabLink>
            </Tab>
            <Tab isActive={activeTab === 'new'}>
              <TabLink onClick={activateTab('new')}>
                <Icon isSize="small" className="fa fa-certificate" />
                <span>New</span>
              </TabLink>
            </Tab>
            <Tab isActive={activeTab === 'top'}>
              <TabLink onClick={activateTab('top')}>
                <Icon isSize="small" className="fas fa-sort-amount-up" />
                <span>Top</span>
              </TabLink>
            </Tab>
          </TabList>
        </Tabs>
        <PostList posts={posts} />
      </>
    );
  }
}

Home.propTypes = {
  allPosts: PropTypes.shape({
    new: PropTypes.arrayOf(
      PropTypes.shape({
        date: PropTypes.object,
        id: PropTypes.string,
        tags: PropTypes.arrayOf(PropTypes.string),
        title: PropTypes.string,
        totalVotes: PropTypes.number,
        username: PropTypes.string,
        views: PropTypes.number,
        votes: PropTypes.arrayOf(
          PropTypes.shape({
            userId: PropTypes.string,
            vote: PropTypes.number,
          })
        ),
      })
    ),
    popular: PropTypes.arrayOf(
      PropTypes.shape({
        date: PropTypes.object,
        id: PropTypes.string,
        tags: PropTypes.arrayOf(PropTypes.string),
        title: PropTypes.string,
        totalVotes: PropTypes.number,
        username: PropTypes.string,
        views: PropTypes.number,
        votes: PropTypes.arrayOf(
          PropTypes.shape({
            userId: PropTypes.string,
            vote: PropTypes.number,
          })
        ),
      })
    ),
    top: PropTypes.arrayOf(
      PropTypes.shape({
        date: PropTypes.object,
        id: PropTypes.string,
        tags: PropTypes.arrayOf(PropTypes.string),
        title: PropTypes.string,
        totalVotes: PropTypes.number,
        username: PropTypes.string,
        views: PropTypes.number,
        votes: PropTypes.arrayOf(
          PropTypes.shape({
            userId: PropTypes.string,
            vote: PropTypes.number,
          })
        ),
      })
    ),
    watching: PropTypes.arrayOf(
      PropTypes.shape({
        date: PropTypes.object,
        id: PropTypes.string,
        tags: PropTypes.arrayOf(PropTypes.string),
        title: PropTypes.string,
        totalVotes: PropTypes.number,
        username: PropTypes.string,
        views: PropTypes.number,
        votes: PropTypes.arrayOf(
          PropTypes.shape({
            userId: PropTypes.string,
            vote: PropTypes.number,
          })
        ),
      })
    ),
  }),
  fetchPosts: PropTypes.func,
  loggedIn: PropTypes.bool,
};

Home.defaultProps = {
  allPosts: {
    new: [],
    popular: [],
    top: [],
    watching: [
      {
        date: new Date(2020, 3, 16, 10, 23, 12),
        id: '84e89cc1-5981-44af-87b2-a1518217785d',
        tags: ['react', 'redux'],
        title: 'How to add redux to a react project',
        totalVotes: 1,
        username: 'eMediaLab',
        views: 100,
        votes: [
          { direction: 1, userId: '26d5689d-b15b-4a94-a699-44b3e0fdc401' },
        ],
      },
      {
        date: new Date(2020, 3, 16, 10, 23, 12),
        id: '5cca3c5c-bb63-4024-98c7-9a4f44760130',
        tags: ['react', 'redux'],
        title:
          'Just trying to make this a really long title to see what happens on overflow',
        totalVotes: 1,
        username: 'eMediaLab',
        views: 100,
        votes: [
          { direction: 1, userId: 'ed7586f6-6022-487a-b7f0-404fa3c2da13' },
        ],
      },
    ],
  },
  fetchPosts: () => {},
  loggedIn: true,
};
