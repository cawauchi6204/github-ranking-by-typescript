import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';

import MyPage from './pages/MyPage'
import LoginPage from './pages/LoginPage'
import ErrorPage from './pages/ErrorPage'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact={true} path="/">
            <MyPage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="*">
            <ErrorPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
