import React from 'react';
import {Text} from "./stories/Form.stories" ;
import {Number} from "./stories/Form.stories" ;
import {Email} from "./stories/Form.stories" ;
import logo from "./stories/logo512.png";
import {Large} from './stories/Button.stories';

function App() {
  function handleClick(e){
    e.preventDefault();
    alert("Form Submitted")
  }
  return (
     <>
        <img  src={logo} alt="React Logo" width="50" height="50" />
        <h1>ReactJS Storybook Training - Form </h1>
        <Text name="name" value="Alex Ong" label="Name:"/> <br/>
       <Number name="contact" value="88888888" label="Contact:"/> <br/>
       <Email name="email" value="Alex@gmail.com" label="Email:"/> <br/><br/>
      <Large primary size="small" onClick={handleClick} label="Sign up" />
    </>
  );
};
export default App;

