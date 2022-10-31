import React from 'react';
import PropTypes from 'prop-types';

export const Form = ({name, value, type,label}) => {
  function handleChange(e){
    console.log(e.target.value)
  }
    return(
      <div>
        <form>
        <label> {label} </label>
        <input type={type} name={name} value={value} onChange={handleChange} />
        </form>
      </div>
  );
  };

Form.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string.isRequired,
};

Form.defaultProps = {
  name: "name",
 label:"label",
  type: "text",
  value:"Enter Value"
};
