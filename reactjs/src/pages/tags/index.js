import styles from './tags.module.css';


import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Panel, PanelHeading, PanelIcon, PanelBlock, Control, Input, PanelTabs, PanelTab, Checkbox, Button, Card, CardHeader, CardHeaderTitle, CardHeaderIcon, Icon, CardImage, Image, CardContent, Media, MediaLeft, MediaContent, Title, Subtitle, Content } from 'bloomer';


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
      this.setState({ activeTab: 'watching' });
      fetchPosts({ type: 'watching' });
    } else {
      this.setState({ activeTab: 'popular' });
      fetchPosts({ type: 'popular' });
    }
  }

  render() {
    return (
      <>
        <h1 className={styles.heading}>Tags</h1>
        <section>
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
        <section>
        <Card>
          <CardContent>
              <Media>
                  <MediaLeft>
                      <Image isSize='48x48' src='https://via.placeholder.com/96x96' />
                  </MediaLeft>
                  <MediaContent>
                      <Title isSize={4}>John Wick</Title>
                      <Subtitle isSize={6}>@John Wick</Subtitle>
                  </MediaContent>
              </Media>
              <Content>
                  People Keep Asking If I’m Back, And I Haven’t Really Had An Answer, But Now, Yeah, I’m Thinking I’m Back.
                  <br/>
                  <small>11:09 PM - 30 October 2014</small>
              </Content>
          </CardContent>
        </Card>
        </section>
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
  // allPosts: {
  //   new: examplePosts.slice(3, 4),
  //   popular: examplePosts.slice(1, 2),
  //   top: examplePosts.slice(2, 3),
  //   watching: examplePosts.slice(0, 2),
  // },
  fetchPosts: () => {},
  loggedIn: true,
};

export default Tags;
