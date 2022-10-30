import React from 'react';
import _ from "lodash";

const App = () =>{

    const str = ['u', 'ec'];

    const arr = [
            {
            storageVal: 'u',
            table: ['E', 'F']
            },
            {
            storageVal: 'data',
            id: 3
            }, 
            {
            storageVal: 'ec',
            table: ['E']
            }
        ];

        const item = str.map( items =>{
        let res =_.find(arr,{storageVal: items});
        console.log(items)
        console.log(res);
        return res;
         });

    return(
        <>
            <p> Find Objects  </p>
        </>
    )
};
export default App;

