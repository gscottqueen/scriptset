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
    // console.log(this.state.scriptCover)

    return (
      <div className="App">
        <header className="App-header">
          <div>
            <div>{this.state.scriptCover.title}</div>
            <div>{this.state.scriptCover.additional ? this.state.scriptCover.additional : null}</div>
            <div>{this.state.scriptCover.author ? this.state.scriptCover.author : 'unknown'}</div>
          </div>
            {this.state.scriptScenes.map(function(scene) {
              console.log(scene.heading)
              return (
                <div>
                  <div>{scene.heading.title}</div>
                  <div>{scene.heading.description[0]}</div>
                  <div>{scene.heading.description[1]}</div>
                  <div>{scene.heading.description[2]}</div>
                  <div>{scene.heading.setting.title}</div>
                  <div>{scene.heading.sequence.en ? scene.heading.sequence.en : null}</div>
                  {/* <div>{scene.heading.setting.en ? scene.heading.settings.en : null}</div> */}
                </div>
              )
            })}
        </header>
      </div>
    );
  }
}

export default App;
