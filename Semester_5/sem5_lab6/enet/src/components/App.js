import React from 'react';
import '../styles/App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Login from './Login';
import Register from './Register';
import Home from './Home'

//TODO add wrapper
function App() {
  return (
      <Router>
          <Switch>
             <Route path="/auth">
                <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
  );
}

export default App;
