import React from "react";
import data from "./data";
import "./App.css";
import Display from "./Display";

const App = () => {

  const dataElements = data.employeeDetails.map((items) => {
    return (
      <Display
        id={items.id}
        firstName={items.firstName}
        lastName={items.lastName}
        age={items.age}
        dept={items.dept}
        dob={items.dob}
        designation={items.designation}
        address={items.address}
        image={items.image}
      />
    );
  });

  return (
    <>
      {dataElements}
    </>
  );
  
};
export default App;
