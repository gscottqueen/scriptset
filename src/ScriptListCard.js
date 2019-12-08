import React, { Component } from 'react';
import history from './history';

// const { isAuthenticated } = this.props.auth;

class ScriptListCard extends Component {
  goTo(route) {
    history.replace(`/${route}`)
  }

  render() {
    console.log(this.props.history);
    // console.log(this.props);
    return (
      <button onClick={this.goTo.bind(this, 'scriptset')}>
        {this.props.title}
      </button>
    );
  }
}


export default ScriptListCard;