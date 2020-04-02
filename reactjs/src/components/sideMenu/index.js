import styles from './sideMenu.module.css';

import React from 'react';
import PropTypes from 'prop-types';

import { Menu, MenuLabel, MenuList } from 'bloomer';
import { NavLink } from 'react-router-dom';

import tagData from '../../exampleData/tags.json';

export default class SideMenu extends React.Component {
  componentDidMount() {
    const { fetchWatching } = this.props;
    fetchWatching();
  }

  render() {
    const { loggedIn, watching } = this.props;

    return (
      <Menu className={styles.menu}>
        <MenuLabel>Menu</MenuLabel>
        <MenuList>
          <li>
            <NavLink exact activeClassName="is-active" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink exact activeClassName="is-active" to="/tags">
              Tags
            </NavLink>
          </li>
          <li>
            <NavLink exact activeClassName="is-active" to="/users">
              Users
            </NavLink>
          </li>
        </MenuList>
        {loggedIn && (
          <>
            <MenuLabel>Dashboard</MenuLabel>
            <MenuList>
              <li>
                <NavLink exact activeClassName="is-active" to="/profile">
                  Profile
                </NavLink>
              </li>
              <li>
                <NavLink exact activeClassName="is-active" to="/posts">
                  Your Posts
                </NavLink>
              </li>
              <li>
                <NavLink exact activeClassName="is-active" to="/settings">
                  Settings
                </NavLink>
              </li>
            </MenuList>
            <MenuLabel>Watched Tags</MenuLabel>
            <MenuList>
              {watching.map((tag) => (
                <li key={tag.id}>
                  <NavLink
                    exact
                    activeClassName="is-active"
                    to={`/tags/${tag.title.toLowerCase()}`}
                  >
                    {tag.title}
                  </NavLink>
                </li>
              ))}
            </MenuList>
          </>
        )}
      </Menu>
    );
  }
}

SideMenu.propTypes = {
  fetchWatching: PropTypes.func,
  loggedIn: PropTypes.bool,
  watching: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string,
      id: PropTypes.string,
      title: PropTypes.string,
    })
  ),
};

SideMenu.defaultProps = {
  fetchWatching: () => {},
  loggedIn: true,
  watching: tagData.slice(3, 10),
};
