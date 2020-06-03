import React from 'react';

import { Link } from 'react-router-dom';

import { ReactComponent as LogoSvg } from '../../assets/img/instagram-logo.svg';

import './Topbar.scss';

const Topbar = () => (
  <header className="topbar">
    <div className="container">
      <LogoSvg className="topbar__logo"/>
    </div>
  </header>
);

export default Topbar;
