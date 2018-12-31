import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { debounce } from "lodash";

class App extends Component {

  state={
    Value:''
  }

  handleChange=debounce((text)=>{
    console.log(text)
  },2000)
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <input onChange={(e)=>this.handleChange(e.target.value)}/>
        </header>
      </div>
    );
  }
}

export default App;
