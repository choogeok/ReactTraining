import React, {useState} from 'react';

function App(){

    const [lastName, setLastName] = useState('Ong');
    const [check,setCheck] = useState(false);
    const [user,setUser] = useState({userName:'Alex', userId:'200'});
    const styles={color: check? 'red' : 'blue'};
    return(
        <div>
             <h4> Last Name: {lastName} </h4>
            <button onClick={ () => setLastName('Tong')}> Update LastName </button> 
            
            <h4 style={styles}> Check Value:  </h4>
            <button onClick={ () => setCheck(true)}> Update Check</button> 
            
            <h4> User Name: {user.userName} </h4>
            <button onClick={ () => setUser({...user,userName:'Alex Tong'})}> Update UserName </button> 
           
        </div>
    )
};
export default App;