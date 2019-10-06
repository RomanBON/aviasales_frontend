import React from 'react';

import { ReactComponent as Logo } from '../../assets/logo.svg';
import './style.css';

const Header: React.FC = () => (
  <header className={Header.displayName}>
    <Logo className={`${Header.displayName}__logo`} />
  </header>
);

Header.displayName = 'Header';

export default Header;
