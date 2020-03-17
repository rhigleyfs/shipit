import styles from './sideMenu.module.css';

import React from 'react';
import PropTypes from 'prop-types';

import { Menu, MenuLabel, MenuList } from 'bloomer';
import { NavLink } from 'react-router-dom';

export default function SideMenu({ loggedIn }) {
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
            <li>
              <NavLink exact activeClassName="is-active" to="/tags/redux">
                Redux
              </NavLink>
            </li>
            <li>
              <NavLink exact activeClassName="is-active" to="/tags/react">
                React
              </NavLink>
            </li>
            <li>
              <NavLink exact activeClassName="is-active" to="/tags/node">
                Node
              </NavLink>
            </li>
          </MenuList>
        </>
      )}
    </Menu>
  );
}

SideMenu.propTypes = {
  loggedIn: PropTypes.bool,
};

SideMenu.defaultProps = {
  loggedIn: true,
};
