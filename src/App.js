import React from 'react'
import Patients from './views/patients'
import Doctors from './views/doctors'
import Records from './views/records'
import RecordTypes from './views/recordTypes'
import Appointments from './views/appointments'
import Login from './views/login'
import Dashboard from './views/dashboard'

import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom"

import './App.css';

import Nav from './Nav'

export const UserContext = React.createContext({ user: {}, setUser: () => { } });

function App() {
  const [user, setUser] = React.useState(() => {
    try {
      const item = window.localStorage.getItem('user');
      return item ? JSON.parse(item) : {};
    } catch(e) {
      console.log(e)
      return {}
    }
  });
  const handleUserChange = (val) => {
    setUser(val)
    window.localStorage.setItem('user', JSON.stringify(val))
  }
  const value = { user, handleUserChange };

  return (
    <div className="container">
        <Router>
          <UserContext.Provider value={value}>
            <Nav />
            <main style={{ position: 'relative', top: '5rem' }}>
              <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route path="/patients">
                  <Patients />
                </Route>
                <Route path="/doctors">
                  <Doctors />
                </Route>
                <Route path="/records">
                  <Records />
                </Route>
                <Route path="/appointments">
                  <Appointments />
                </Route>
                <Route path="/recordTypes">
                  <RecordTypes />
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
