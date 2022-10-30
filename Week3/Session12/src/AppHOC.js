import React from "react";
import HOC from './HOC';
import Hook from "./Hook";

const App = () => {
  return (
    <>
    <p >Welcome to the ReactJS Training </p>
    <Hook />
    </>
    
  ) 

};
export default HOC(App);
