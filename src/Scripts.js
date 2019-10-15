import React, { Component } from 'react';
import ScriptListCard from './ScriptListCard';
// Bring in our scripts
const importAll = (r) => r.keys().map(r);
const scriptArray = importAll(require.context('./Data/Scripts', true, /\.json$/)); // TODO: update this as an API call

class Scripts extends Component {

  constructor(props) {
    super(props)
    this.state = { 
      scripts: scriptArray,
    }
  }

  render() {
    //map our scripts
    console.log(this.state.scripts);
    return (
      <div>
        <ul className="scripts-list">
          {this.state.scripts.map((script, index) =>
            <li key={index}>
              <ScriptListCard title={script.title} />
            </li>
          )}
        </ul>
      </div>
    );
  }
}

export default Scripts;