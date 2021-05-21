import React from 'react';

import { Link, Switch, useRouteMatch, Route } from 'react-router-dom';

import List from './list'
import Create from './create'
import Details from './details';

export default function Index() {

  const { url, path } = useRouteMatch()

  return (
    <div>
      <ul>
        <li>
          <Link to={`${url}/create`}>Create</Link>
        </li>
        <li>
          <Link to={`${url}`}>List</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path={path}>
          <List />
        </Route>
        <Route path={`${path}/create`}>
          <Create />
        </Route>
        <Route path={`${path}/list`}>

        </Route>
        <Route path={`${path}/:id`}>
          <Details />
        </Route>
      </Switch>
    </div>
  )
}