import React, { Component } from 'react';
import './App.css';
import DATA from './farmland.json'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      script: DATA,
      scriptCover: DATA.document.cover,
      scriptHeader: DATA.document.header,
      scriptFooter: DATA.document.footer,
      scriptScenes: DATA.document.scenes,
    }
  }
  
  render() {
    console.log(this.state.script)
    console.log(this.state.scriptCover)

    return (
      <div className="App">
        <header className="App-header">
          <div>
            <div>{this.state.scriptCover.title}</div>
            <div>{this.state.scriptCover.additional}</div>
            <div>{this.state.scriptCover.author}</div>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
