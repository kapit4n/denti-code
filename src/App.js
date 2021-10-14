import React from 'react'
import Clients from './views/clients'
import Doctors from './views/doctors'
import Records from './views/records'
import Login from './views/login'

import './App.css';


import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom"

import Nav from './Nav'

export const UserContext = React.createContext(
  {
    user: {}, setUser: () => { }
  });

function App() {
  const [user, setUser] = React.useState({});
  const value = { user, setUser };

  return (
    <div className="App">
      <Router>
        <UserContext.Provider value={value}>
          <Nav />
          <main style={{ position: 'relative', top: '5rem' }}>
            <Switch>
              <Route path="/clients">
                <Clients />
              </Route>
              <Route path="/doctors">
                <Doctors />
              </Route>
              <Route path="/records">
                <Records />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
            </Switch>
          </main>
        </UserContext.Provider>
      </Router>
    </div>
  );
}

export default App;
