import React from 'react';
import PropTypes from 'prop-types';
import logo from "../stories/logo512.png"
import './footer.css';

export const Footer = ({ address,contact,officehours }) => (
   <footer>
      <div className="wrapper">
      <div>
       <img  src={logo} alt="React Logo" width="50" height="50" />
      <h3>ReactJS Storybook Training - Footer</h3>
      </div>
      <div className='text'>
        <h5> Address: {address}</h5> 
        <h5>Contact: {contact}</h5> 
        <h5>Office Hours: {officehours}</h5> 
      </div>
    </div>
  </footer>
);

Footer.propTypes = {
  address: PropTypes.string.isRequired,
  contact: PropTypes.string,
  officehours: PropTypes.string,
  };

Footer.defaultProps = {
  address: "Address",
  contact: "Contact No",
  officehours: "Operations Time",
};
