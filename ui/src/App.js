import logo from './logo.svg';
import './App.css';

import ClientsList from './views/clients/list'

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
        <Switch>
          <Route path="clients">
            <ClientsList />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
