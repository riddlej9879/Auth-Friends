import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import Login from './Components/Login'
import PrivateRoute from './Components/PrivateRoute'
import Friends from './Components/Friends'
// import AddFriend from './Components/AddFriend'
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
            {/* Why the hell does this link to the login page?
            <li>
              <Link to="/friends/add-friend">Add Friend</Link>
            </li> */}
          </ul>
        </nav>
        <Switch>
          <PrivateRoute exact path='/friends' component={Friends} />
          <Route path='login' component={Login} />
          <Route component={Login} />
          {/* <Route path='/friends/add-friend' component={AddFriend} />
          <Route component={AddFriend} /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
