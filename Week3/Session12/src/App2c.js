import React from 'react';
import _ from 'lodash';

function App(){

    const a = [['E'], ['F']] 
    let newarr=_.flatten(a);
    console.log(newarr);
    return(
        <>
       <p> hello</p>
       
        </>
    )
};
export default App;

