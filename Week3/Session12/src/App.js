import React, {useRef} from 'react';

const App = () => {

    const name = useRef();

    function handleClick(e){
        name.current.focus();
        let nameVal = name.current.value;
        console.log(nameVal);
        }

    return(
        <div>
            <form>
            Name:  <input type="text" ref={name} />
            <button onClick={handleClick}> Submit</button>
            </form>
        </div>
    )
};
export default App;