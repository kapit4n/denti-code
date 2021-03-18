import React from 'react';

import { Link, Switch, useRouteMatch, Route } from 'react-router-dom';

import List from './list'
import Create from './create'

export default function Index() {

  const { url, path } = useRouteMatch()

  return (
    <div>
      <ul>
        <li>
          <Link to={`${url}/create`}>Create</Link>
        </li>
        <li>
          <Link to={`${url}/list`}>List</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path={path}>
          Create or list clients
        </Route>
        <Route path={`${path}/create`}>
          <Create />
        </Route>
        <Route path={`${path}/list`}>
          <List />
        </Route>
      </Switch>
    </div>
  )
}