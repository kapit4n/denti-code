import './App.css';

import Clients from './views/clients'
import Doctors from './views/doctors'
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
              <Clients />
            </Route>
            <Route path="/doctors">
              <Doctors />
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
