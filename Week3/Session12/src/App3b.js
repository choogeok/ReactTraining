import React, {useState} from 'react';

function App(){
    const [user,setUser] = useState({
        name:'Alex', 
        username: 'alexong', 
        address:'Blk 34 Tampines'
        });
     
    return(
        <div>
            <h2 style={{color:'blue'}}> Welcome </h2>
            <h4>Name: {user.name} </h4> 
            <h4>User Name: {user.username} </h4>
            <button onClick={ () => setUser({...user,name:'Alex Ong Tien Tien',username:'alexongtt'})}> Update Name </button>
        </div>
    )
};
export default App;