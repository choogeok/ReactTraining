import React, { Component } from 'react';
import FormInput from './FormInput';
import Display from '../Display';
import NavBar from '../NavBar';

class App extends Component{
state = {userData:[]};

AddData =(user) =>{
  console.log(user);
    this.setState({
      userData: [...this.state.userData,user]
    })
}

  render() {
    return (
       <div>
        <NavBar/> <br/><br/>
       <FormInput data={this.AddData} /> <br />
       <Display details={this.state.userData} />
       </div>
    );
  }
};
export default App;