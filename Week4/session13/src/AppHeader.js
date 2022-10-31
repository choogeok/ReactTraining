import React from 'react';
import {LoggedIn} from "./stories/Header.stories" ;
import {LoggedOut} from "./stories/Header.stories" ;

function App() {
 
  const handleClick = () => { alert("Clicked")}
  const handleClose = () => { alert("Closed")}
  let checklogin = true;
  return (
     <>
    {checklogin ? <LoggedIn onClick={handleClick}/>: <LoggedOut onClick={handleClose} />}
    
    </>
  );
};
export default App;

