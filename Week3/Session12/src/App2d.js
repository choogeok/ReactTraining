import React from 'react';
import _, { set } from 'lodash';

function App(){

    const t = [['E', 'F'], [['F'],['G']]]
 
    let newarr=_.flattenDepth(t,2);
    console.log(newarr);
    let arr = _.uniq(newarr);
    console.log(arr);
    return(
        <>
       <p> hello</p>
       
        </>
    )
};
export default App;