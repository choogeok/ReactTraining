import React, { Component } from "react";
import axios from "axios";
import Display from "./Display";


class App extends Component {
  constructor() {
    super();
    this.state = {
      post: [],
    };
  }
  componentDidMount = () => {
    axios
      .get("https://randomuser.me/api/?nat=US&results=10")
      .then((res) => {
        this.setState({ post: res.data.results.slice(0, 5) });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    const dataElements = this.state.post.map((ele) => {
      return (
        <Display
          key={ele.phone}
          firstName={ele.name.first}
          lastName={ele.name.last}
          phone={ele.phone}
          gender={ele.gender}
        />
      );
    });
    return (
      <div>
         <h1> Data Display from the API</h1> {dataElements}
      </div>
    );
  }
}
export default App;
