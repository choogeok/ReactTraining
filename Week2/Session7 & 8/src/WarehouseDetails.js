import React, { Component } from "react";
import "./App.css";
import PropTypes from 'prop-types';


class WarehouseDetails extends Component {
 
    render() {
    return (
      <div>
            <ul>
            <li>Item Name: {this.props.itemName} </li>
            <li>Description: {this.props.description} </li>
            <li>Type: {this.props.type} </li>
            <li>Expiry: {this.props.expiry} </li>
            <li>Location: {this.props.location} </li>
            <li>Quantity: {this.props.quantity} </li>
          </ul>
      </div>
      );
  }
}

// To check that Quantity is between number of 1-100
const isQuantity = (props, propName, componentName) => {
  console.log('propName'+ propName);
  let regex = / [1-100] / ;
  regex.test(props.quantity);
  if (!regex.test(props[propName])) {
    return Error('Invalid quantity `');
  }
}

//Validation of the propTypes 
WarehouseDetails.propTypes = {
  itemName: PropTypes.string.isRequired,
  description: PropTypes.string,
  type: PropTypes.string,
  expiry: PropTypes.string,
  location: PropTypes.string,
  quantity: isQuantity,
}

//Default value for the props
WarehouseDetails.defaultProps = {
        id: 1,
        itemName: "tuna water",
        description: "tuna in water",
        type: "dry",
        expiry: "2022/11/1",
        location: "level 1 General Area",
        quantity: 200,
        brand: "ayam"
}

export default WarehouseDetails;