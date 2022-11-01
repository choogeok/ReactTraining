import React from 'react';
import PropTypes from 'prop-types';
import './header.css';

export const Header = ({username}) => (
 
  <header>
    <div className="wrapper">
      <div>
       <h1>To Do List </h1>
      </div>
      <div>
             <span className="welcome">
              Welcome, <b>{username}</b>!
             </span>
      </div>
    </div>
  </header>
);

Header.propTypes = {
  username: PropTypes.string.isRequired,
};

Header.defaultProps = {
  username: null,
 };
