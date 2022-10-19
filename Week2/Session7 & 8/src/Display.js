import React from 'react';
import "./App.css";
import PropTypes, { func } from 'prop-types';

function Display(props) {

  function handleChange(id) {
    return(
      alert("First Name: " + props.firstName + " " + "Last Name: " + props.lastName + " " + "Dept: " + props.dept + " " + "Designation: " + props.designation + " " + "Age: " + props.age)
    )
    }

   return(
      <div>
        <h4> Employee Details</h4>
        <ul>
          <li onMouseOver={() => handleChange(props.id)}>{props.firstName} {props.lastName} </li>
          <li>{props.designation} </li>
          <li><img className="personImage" src={props.image} alt="image" /> </li>
          <li> </li>
        </ul>
      </div>
    )
}

Display.propTypes = {
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    designation: PropTypes.string,
    dept: PropTypes.string,
    age: PropTypes.number,
    }

export default Display;


