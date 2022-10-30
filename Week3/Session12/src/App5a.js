import React, { Component , createRef} from 'react';

class App extends Component{
constructor(){
    super();
    this.name = createRef();
}

    handleClick = (e)=>{
        e.preventDefault();
        let nameVal = this.name.current.value
        console.log("nameval" + nameVal);
        this.name.current.focus();
    }

    render() {
        return (
             <div>
                <form> 
                    <input type="text" ref={this.name} placeholder="Name"/>
                    <button onClick={this.handleClick}> Submit </button>
                </form>

             </div>
        );
    }
};
export default App;