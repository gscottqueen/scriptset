import React, { Component } from 'react';
import './App.css';
import DATA from './farmland.json'

// componentDidMount() {
//   console.log('height: ' + document.getElementById('script-page'))
// }

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

  componentDidMount() {
    console.log('script height: ' + document.getElementById('script').clientHeight)
    console.log('script-cover height: ' + document.getElementById('script-cover').clientHeight)
    console.log('script-page height: ' + document.getElementById('script-page').clientHeight / document.getElementById('script-cover').clientHeight)

  }
  
  render() {
    console.log(this.state.script)
    console.log(this.state.scriptScenes)


    return (
      <div className="App">
        <div id="script" className="script">
          <div  id="script-cover" className="script-cover script-cover">
            <div className="script-cover--title">"{this.state.scriptCover.title}"</div>
            <div className="script-cover--additional">{this.state.scriptCover.additional ? this.state.scriptCover.additional : null}</div>
            <div className="script-cover--byline">written by</div>
            <div className="script-cover--author">{this.state.scriptCover.author ? this.state.scriptCover.author : 'unknown'}</div>
          </div>
          <div id="script-page" className="script-dialog script-page">
          <div className="script-dialog--title">{this.state.scriptCover.title}</div>
            {this.state.scriptScenes.map(function(scene, key) {
              return (
                <div key={key} className="scene" data-number={key}>
                <div className="scene-heading">
                <div className="scene-heading--setting-sequence">
                  <span className="scene-heading--context">{scene.heading.context.en ? scene.heading.context.en + ".  " : null}</span>
                    <span className="scene-heading--setting">{scene.heading.setting.en ? scene.heading.setting.en + ' - ' : null}</span>
                    <span className="scene-heading--sequence">{scene.heading.sequence.en ? scene.heading.sequence.en : null}</span>
                  </div>
                  <div className="scene-heading--title">{scene.heading.title ? scene.heading.title : null}</div>
                  <div className="scene-heading--descirption">
                    {scene.heading.description.map(function(detail, key) {
                      return (
                          <span className="scene-heading--description-detail" key={key}>{detail}</span>
                      )
                    })}
                  </div>
                  </div>
                  <div className="scene-body">
                    {scene.body.map(function(content, key) {
                      return (
                          <div className={"scene-body-" + content.type} key={key}>{content.content.en}</div>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
