import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
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
      <Button onClick={this.goTo.bind(this, 'scriptset')}>
        {this.props.title}
      </Button>
    );
  }
}


export default ScriptListCard;