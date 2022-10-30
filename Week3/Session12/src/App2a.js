import React from 'react';
import _ from "lodash";

const App = () => {

const arrOne = [
        {
        id: 20,
        name: 'alex'
        }, 
        {
        id: 30,
        name: 'alina'
        }
    ]

const arrTwo = [
    {
        id: 40,
        name: 'hello'
    }, 
    {
        id: 30,
        name: 'world'
    }
]

let test= _.xor(arrOne,arrTwo);
console.log(test);

//Trying out different methods and get the same outcome
// let diff1 = _.difference(arrOne, arrTwo);
// console.log(diff1);
// let diff2 = _.difference(arrTwo,arrOne);
// console.log(diff2);
// let symmetric=_.union(diff1,diff2);
// console.log(symmetric);

    return(
        <div>
            <p> hello</p>
        </div>
    );
};
export default App;