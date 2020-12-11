import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import { githubProvider, auth } from './firebase'

import Header from './components/Header'
import MyPage from './pages/MyPage'
import LoginButton from './components/LoginButton'
import ErrorPage from './pages/ErrorPage'

const App = () => {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route exact={true} path="/">
            <MyPage />
          </Route>
          <Route path="/login">
            <LoginButton />
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
