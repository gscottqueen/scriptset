import React, { Component } from 'react';

class ScriptListCard extends Component {

  render() {
    // console.log(this.props);
    return (
      <button>
        {this.props.title}
      </button>
    );
  }
}


export default ScriptListCard;

