import React, { Component } from 'react';
import './App.css';
import DATA from './farmland.json'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      script: [DATA],
    }
  }
  
  render() {
    console.log(this.state.script)
    return (
      <div className="App">
        <header className="App-header">
          <div>{this.state.script[0].id}</div>
        </header>
      </div>
    );
  }
}

export default App;
