import React from "react";

function Display(props) {
  return (
    <React.Fragment>
      <ul>
        <li> First Name: {props.firstName} </li>
        <li> Last Name: {props.lastName} </li>
        <li> Gender: {props.gender} </li>
        <li> Phone: {props.phone} </li>
      </ul>
    </React.Fragment>
  );
}
export default Display;
