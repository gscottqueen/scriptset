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
        <div className="scene-header">
          <div>
            <div>{this.state.scriptCover.title}</div>
            <div>{this.state.scriptCover.additional ? this.state.scriptCover.additional : null}</div>
            <div>{this.state.scriptCover.author ? this.state.scriptCover.author : 'unknown'}</div>
          </div>
            {this.state.scriptScenes.map(function(scene, key) {
              return (
                <div key={key}>
                  <div>{scene.heading.title}</div>
                  {scene.heading.description.map(function(detail, key) {
                    console.log(detail)
                    return (
                      <div key={key}>
                        <div>{detail}</div>
                      </div>
                    )
                  })}
                  <div>{scene.heading.setting.title}</div>
                  <div>{scene.heading.sequence.en ? scene.heading.sequence.en : null}</div>
                  {/* <div>{scene.heading.setting.en ? scene.heading.settings.en : null}</div> */}
                </div>
              )
            })}
        </div>
      </div>
    );
  }
}

export default App;
