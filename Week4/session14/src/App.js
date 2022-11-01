import React from 'react';
import {Name} from "./stories/Header.stories";
import {Display} from "./stories/Footer.stories";
import {DisplayData} from './recoil/DisplayData';

function App() {
  return (
     <>
     <Name username="Alex Ong" />
     <DisplayData />
     <br/> 
     <Display reminder="Please check bills" outstanding="none" />
    </>
  );
};
export default App;
