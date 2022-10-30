import React, { useState } from 'react';

function App() {
  let arr = ['pink','blue','yellow','orange']
  const [data, setData] = useState(arr);

  function update(){
    const updateArr = [...data];
    updateArr[2] = 'black';
    setData(updateArr);
    return data;
  }
  return (
    <>
      <button onClick= {update}> CLick To Add Colour </button>
      <p> Colours: {data} </p>
    </>
  );
};
export default App;