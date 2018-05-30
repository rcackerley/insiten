import React from 'react';
import Logo from './Logo';
import Navlinks from './Navlinks';
import Avatar from './Avatar';

let Navbar = () =>
  <nav className="layout-across layout-space-between">
    <div className="layout-across">
      <Logo />
      <Navlinks />
    </div>
    <Avatar />
  </nav>

export default Navbar;
