import React, {useState} from 'react';
import {atomData} from "./atomData";
import {useRecoilState} from 'recoil';

export const Form = () => {
  
    function getid(){
        setId(id+1)
        return id  ;
    }
    const [inputValue,setInputValue] = useState("");
    const [id,setId] = useState(0);
    const [val,setVal] = useRecoilState(atomData);

    const handleChange = (e) =>{
        if (e.target.value !==''){
        setInputValue(e.target.value)
        }
    }

    const addData = () => {
        if (inputValue) {setVal( (list) => [
            ...list,
            {text:inputValue,
                id: getid(),
            }
            
        ])} 
       }

   
    return(
        <div>
            <input type="text" value={inputValue} onChange={handleChange} placeholder="Task"/>
            <button onClick={addData}> Add Task </button>
        </div>
    )
};
