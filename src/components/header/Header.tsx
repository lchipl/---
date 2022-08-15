import React from 'react';
import logo from '../../assets/logo.png';

import '../../styles/styles.scss';

export const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <nav className="menu">
            <button className="menu__button">
            </button>
          </nav>
          <div className="logo">
            <a className="logo__link" href="#">
              <img src={logo} alt="logo" />
            </a>
          </div>
          <div className="phone">
            <button className="phone__button">
            </button>
          </div>
          <div className="message">
            <button className="message__button">
            </button>
          </div>
          <div className="person">
            <button className="person__button">
            </button>
          </div>
          <div className="divider-icon"></div>
          <div className="search">
            <button className="search__button">
            </button>
          </div>
          <div className="tools">
            <button className="tools__button">
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
