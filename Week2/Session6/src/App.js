import React, { Component } from "react";

class App extends Component {
  state = {
    companyName: "Temp Technology",
    companyTel: "12345678",
    employeeDetails: [
      {
        id: 1,
        firstName: "alina",
        lastName: "Tan",
        address: "blk 1 tampines st 33 Singapore 123456",
        startDate: "2022/01/01",
        Dept: "IT",
      },
      {
        id: 2,
        firstName: "Harry",
        lastName: "Teo",
        address: "blk 2 tampines st 33 Singapore 123456",
        startDate: "2022/02/02",
        Dept: "IT",
      },
    ],
  };

  handleClick = () => {
    this.setState({
      companyTel:"89765432"
      })};

  render() {
    return (
      <div>
        <h1> Display of Employee Details</h1>
        <h4> Company Name: {this.state.companyName} </h4>
        <h4> Compnay Contact: {this.state.companyTel}</h4>
        {this.state.employeeDetails.map((ele) => (
          <ul>
            <li key={ele.id}>{ele.firstName} {ele.lastName}</li>
            <li> {ele.address} </li>
            <li> {ele.startDate} </li>
            <li> {ele.Dept} </li>
          </ul>
        ))}
        <button onClick={this.handleClick}> Change details </button>
      </div>
    );
  }
}
export default App;
