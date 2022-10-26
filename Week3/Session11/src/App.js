import React, { Component } from 'react';

class App extends Component {

  constructor(){
    super();
    this.state={
    count:0
    };
  }

  handleChange=(e) =>{
    if(e.target.value >= this.state.count){
    this.setState({
      count:e.target.value
      });
    }else {
      alert("Score cannot be smaller than the current score");
      this.setState({
        count:this.state.count
      });
    }
  }

  handleSubmit=(e) => {
    e.preventDefault();
     this.setState({
      count:0
    });
  }

  shouldComponentUpdate=(nextProps,nextState) => {
    let check=false;
      if(this.state.count <= nextState.count){
      check=true;
      alert("The Previous Score is: " + this.state.count + " The New Score is: " + nextState.count);
      }else{
      alert("Score cannot be smaller than the current score")
      check=false;
       }
    return check;
  }

  getSnapshotBeforeUpdate(prevProps,prevState){
    console.log("snapshot " + prevState.count);
  }
  
  componentDidUpdate(prevProps,prevState,snapshot){
    if(prevState.count < this.state.count){
    console.log("ComponetDidUpdate-Changes Updated" + prevState.count);
  }
}

  render(){
  return(
      <div>
          <form onSubmit={this.handleSubmit}>
          <label htmlFor='score'> Score </label>
          <input type="number" placeholder='Score' id="score" name="score" value={this.state.count} onChange={this.handleChange}/>
          </form>
      </div>
  );
  }
};
export default App;