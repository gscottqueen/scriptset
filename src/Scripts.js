import React, { Component } from 'react';

// Bring in our scripts
const importAll = (r) => r.keys().map(r);
const scriptArray = importAll(require.context('./Data/Scripts', true, /\.json$/));

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
              <button>{script.title}</button>
            </li>
          )}
        </ul>
      </div>
    );
  }
}

export default Scripts;