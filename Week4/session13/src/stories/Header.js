import React from 'react';
import PropTypes from 'prop-types';
import logo from "../stories/logo512.png"
import { Button } from './Button';
import './header.css';


export const Header = ({ user, onLogin, onLogout, onCreateAccount }) => (
 
  <header>
     
    <div className="wrapper">
      <div>
       <img  src={logo} alt="React Logo" width="50" height="50" />
      <h1>ReactJS Storybook Training</h1>
      </div>
      <div>
        {user ? (
          <>
            <span className="welcome">
              Welcome, <b>{user.name}</b>!
            </span>
            <Button size="small" onClick={onLogout} label="Log out" />
          </>
        ) : (
          <>
            <Button size="small" onClick={onLogin} label="Log in" />
            <Button primary size="small" onClick={onCreateAccount} label="Sign up" />
          </>
        )}
      </div>
    </div>
  </header>
);

Header.propTypes = {
  user: PropTypes.shape({}),
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  onCreateAccount: PropTypes.func.isRequired,
};

Header.defaultProps = {
  user: null,
};
