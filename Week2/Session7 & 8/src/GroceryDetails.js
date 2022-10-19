import React from "react";
import PropTypes from 'prop-types';

function GroceryDetails(props){
    return (
            <div>
                <ul>
                    <li> Item Name: {props.itemName}</li>
                    <li> Description: {props.description} </li>
                    <li> Type: {props.type} </li>
                    <li> Expiry: {props.expiry} </li>
                    <li> Quantity: {props.quantity} </li>
                    <li> Brand: {props.brand} </li>
                </ul>
            </div>
   
  );
}

// To check that type is not an empty string
const isType = (props, propName) => {
  let regex = /^$/g ;
  regex.test(props.quantity);
  if (regex.test(props[propName])) {
    return Error('Type is empty');
  }
}
  
  //Validation of the propTypes 
 GroceryDetails.propTypes = {
    itemName: PropTypes.string.isRequired,
    description: PropTypes.string,
    type: isType,
    expiry: PropTypes.string,
    quantity: PropTypes.number,
    brand: PropTypes.string,
  }
  
  //Default value for the props
  GroceryDetails.defaultProps = {
    itemName: "Orange Juice",
    description: "Orange Juice with Pulp",
    type: "drink",
    expiry: "2022/11/1",
    quantity:2,
    brand: "sunkist"
  }
  

export default GroceryDetails;
