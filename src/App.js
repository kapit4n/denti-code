import React from 'react'
import Patients from './views/patients'
import Doctors from './views/doctors'
import Records from './views/records'
import Login from './views/login'
import Dashboard from './views/dashboard'
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom"

import './App.css';

import Nav from './Nav'

export const UserContext = React.createContext(
  {
    user: {}, setUser: () => { }
  });

function App() {
  const [user, setUser] = React.useState({});
  const value = { user, setUser };
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <div className="App">
      <div className="page-container">
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
                <Route path="/login">
                  <Login />
                </Route>
              </Switch>
            </main>
          </UserContext.Provider>
        </Router>
      </div>
    </div>
  );
}

export default App;
