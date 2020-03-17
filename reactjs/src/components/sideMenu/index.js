import styles from './sideMenu.module.css';

import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {
  Icon,
  Navbar,
  NavbarBrand,
  NavbarBurger,
  NavbarDivider,
  NavbarDropdown,
  NavbarEnd,
  NavbarItem,
  NavbarLink,
  NavbarMenu,
  NavbarStart,
 } from 'bloomer';
import { NavLink } from 'react-router-dom';



export default function SideMenu({ loggedIn, isActive }) {
  const [menu, setMenu] = useState(isActive);

  const toggleMenu = () => {

    const status = menu === false ? true : false
    setMenu(status)
  }

  return (
    <Navbar style={{ border: 'solid 1px #00D1B2', margin: '0' }}>
      <NavbarBrand>
          <NavbarItem>
              {/* <img src={brand} style={{ marginRight: 5 }} /> */}
              Bloomer
          </NavbarItem>
          <NavbarItem isHidden='desktop'>
              <Icon className='fa fa-github' />
          </NavbarItem>
          <NavbarItem isHidden='desktop'>
              <Icon className='fa fa-twitter' style={{ color: '#55acee' }} />
          </NavbarItem>
          <NavbarBurger isActive={menu} onClick={toggleMenu} />
      </NavbarBrand>
      <NavbarMenu isActive={menu} onClick={toggleMenu}>
          <NavbarStart>
              <NavbarItem href='#/'>Home</NavbarItem>
              <NavbarItem hasDropdown isHoverable>
                  <NavbarLink href='#/documentation'>Documentation</NavbarLink>
                  <NavbarDropdown>
                      <NavbarItem href='#/'>One A</NavbarItem>
                      <NavbarItem href='#/'>Two B</NavbarItem>
                      <NavbarDivider />
                      <NavbarItem href='#/'>Two A</NavbarItem>
                  </NavbarDropdown>
              </NavbarItem>
          </NavbarStart>
          <NavbarEnd>
              <NavbarItem href="https://github.com/AlgusDark/bloomer" isHidden='touch'>
                  <Icon className='fa fa-github' />
              </NavbarItem>
              <NavbarItem href="https://twitter.com/AlgusDark" isHidden='touch'>
                  <Icon className='fa fa-twitter' style={{ color: '#55acee' }} />
              </NavbarItem>
          </NavbarEnd>
      </NavbarMenu>
    </Navbar>
  );
}

SideMenu.propTypes = {
  loggedIn: PropTypes.bool,
  isActive: PropTypes.bool,
};

SideMenu.defaultProps = {
  loggedIn: true,
  isActive: false,
};
