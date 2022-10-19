import React, { Component } from 'react';
import WarehouseDetails from "./WarehouseDetails";
import WarehouseData from "./WarehouseData";

class Warehouse extends Component {

     warehouseElements = WarehouseData.details.map( (item) => {
        return(
            <WarehouseDetails 
                key={item.id}
                id={item.id}
                itemName={item.itemName}
                description={item.description}
                type={item.type}
                expiry={item.expiry}
                location={item.location}
                quantity={item.quantity}
                />
        )});     

    render(){
        return(
            <>
            <h4> Warehouse Items Details</h4>
                {this.warehouseElements}
            </>
            );
    }
      
};
export default Warehouse;