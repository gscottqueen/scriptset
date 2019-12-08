import React, { Component } from 'react';
import './App.css';

class App extends Component {
  goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }

  componentDidMount() {
    const { renewSession } = this.props.auth;

    if (localStorage.getItem('isLoggedIn') === 'false') {
      renewSession();
    }
  }

  render() {
    const { isAuthenticated } = this.props.auth;
    // console.log(process.env.REACT_APP_DOMAIN);
    // console.log(process.env.REACT_APP_CLIENT_ID);
    // console.log(process.env.REACT_APP_CALLBACK_URL);

    return (
      <div>
        <button 
          onClick={this.goTo.bind(this, 'dashboard')}>Auth0 - React</button>
        <button
          bsStyle="primary"
          className="btn-margin"
          onClick={this.goTo.bind(this, 'dashboard')}>Dashboard</button>
          {
            !isAuthenticated() && (
              <button
                id="qsLoginBtn"
                bsStyle="primary"
                className="btn-margin"
                onClick={this.login.bind(this)}>Log In</button>
                )
          }
          {
            isAuthenticated() && (
              <button
                id="qsLogoutBtn"
                bsStyle="primary"
                className="btn-margin"
                onClick={this.logout.bind(this)}>Log Out</button>
                )
          }
      </div>
    );
  }
}

export default App;