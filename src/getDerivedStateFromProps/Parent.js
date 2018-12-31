import React, { Component } from "react";

import Child from "./Child";

class Parent extends Component {
  state = {
    value: ""
  };

  handleChange = e => {
    this.setState({
      value: e.target.value
    });
  };

  render() {
    console.log("Parent Render...");
    return (
      <div>
        <input
          placeholder="enter here"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <Child value={this.state.value}/>
      </div>
    );
  }
}

export default Parent;
