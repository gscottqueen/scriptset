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

    return (
      <div className="App">
        <div className="script">
          <div className="script-cover">
            <div className="script-cover--title">{this.state.scriptCover.title}</div>
            <div className="script-cover--additional">{this.state.scriptCover.additional ? this.state.scriptCover.additional : null}</div>
            <div className="script-cover--author">{this.state.scriptCover.author ? this.state.scriptCover.author : 'unknown'}</div>
          </div>
            {this.state.scriptScenes.map(function(scene, key) {
              return (
                <div key={key} className="scene">
                  <div className="scene-heading--title">{scene.heading.title}</div>
                  {scene.heading.description.map(function(detail, key) {
                    return (
                      <div key={key}>
                        <div className="scene-heading--description-detail">{detail}</div>
                      </div>
                    )
                  })}
                  <div className="scene-heading--setting-title">{scene.heading.setting.title}</div>
                  <div className="scene-heading--sequence">{scene.heading.sequence.en ? scene.heading.sequence.en : null}</div>
                  <div className="scene-heading--setting">{scene.heading.setting.en ? scene.heading.setting.en : null}</div>
                </div>
              )
            })}
        </div>
      </div>
    );
  }
}

export default App;
