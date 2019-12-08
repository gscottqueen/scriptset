import React from 'react';
import { Route, Router } from 'react-router-dom';
import App from './App';
import Dashboard from './Dashboard/Dashboard';
import ScriptSet from './ScriptSet.js';
import Callback from './Callback/Callback';
import Auth from './Auth/Auth';
import history from './history';

const auth = new Auth();

const handleAuthentication = ({location}) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
}

export const makeMainRoutes = () => {
  return (
      <Router history={history}>
        <div>
          <Route path="/" render={(props) => <App auth={auth} {...props} />} />
          <Route path="/dashboard" render={(props) => <Dashboard auth={auth} {...props} />} />
          <Route path="/scriptset" render={(props) => <ScriptSet auth={auth} {...props} />} />
          <Route path="/callback" render={(props) => {
            handleAuthentication(props);
            return <Callback {...props} /> 
          }}/>
        </div>
      </Router>
  );
}
