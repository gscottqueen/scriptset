import React, { Component } from 'react';

// Bring in our scripts
// const scriptsContext = require.context('./Data/Scripts', true, /\.json$/);
// const scriptArray = scriptsContext.keys().map((scripts) => scriptsContext(scripts));
const importAll = (r) => r.keys().map(r);
const scriptArray = importAll(require.context('./Data/Scripts', true, /\.json$/));

class Scripts extends Component {

  state = {
    scripts: scriptArray,
  }

  render() {
    //map our scripts
    console.log(this.state.scripts);
    return (
      <div>
        <ul className="scripts-list">
          {this.state.scripts.map((script, index) =>
            <li index={index}>
              <button>{script.title}</button>
            </li>
          )}
        </ul>
      </div>
    );
  }
}

export default Scripts;