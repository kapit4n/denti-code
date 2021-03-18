import logo from './logo.svg';
import './App.css';

import ClientsList from './views/clients/list'
import Login from './views/login'

import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom"

import Nav from './Nav'

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <main style={{ position: 'relative', top: '5rem' }}>
          <Switch>
            <Route path="/clients">
              <ClientsList />
            </Route>

            <Route path="/login">
              <Login />
            </Route>

          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
