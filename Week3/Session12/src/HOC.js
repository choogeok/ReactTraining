import React from 'react';

const HOC = (Propspect) => {
    const color = [ 'pink','blue','orange' ];
    const randomColor = color [Math.floor(Math.random()*4)];
    return() => {
        return(
            <div>
                <p style={{backgroundColor:randomColor}}> <Propspect /> </p>
            </div>
        )
    }
} ;
export default HOC;