import React from 'react';
import PropTypes from 'prop-types';
import './footer.css';

export const Footer = ({reminder,outstanding}) => (
   <footer>
      <div className="wrapper">
      <div>
       <h3>To do Footer</h3>
      </div>
      <div className='text'>
      <h5> Reminder:{reminder}</h5> 
      <h5> Outstanding:{outstanding}</h5> 
      </div>
    </div>
  </footer>
);

Footer.propTypes = {
  reminder: PropTypes.string,
  outstanding: PropTypes.string,
  };

Footer.defaultProps = {
  reminder: "Reminder",
  outstanding: "NA",
};
