import React from "react";
import GroceryDetails from "./GroceryDetails";
import GroceryData from "./GroceryData";
import "./App.css"

const Grocery = () => {

const groceryElements = GroceryData.details.map( (item) => {
    return(
        <GroceryDetails 
        key={item.id}
        itemName={item.itemName}
        description={item.description}
        type={item.type}
        expiry={item.expiry}
        quantity={item.quantity}
        brand={item.brand}
        />
    )
})

  return (
    <>
    <h4> Grocery Details </h4>
       {groceryElements}
    </>
  );
};
export default Grocery;
