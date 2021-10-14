import React from 'react';

import { Link, Switch, useRouteMatch, Route } from 'react-router-dom';

import List from './list'
import Create from './create'
import Details from './details';
import Breadcrumbs from '../../components/breadcrumb'


export default function Index() {

  const { url, path, isExact } = useRouteMatch()

  return (
    <div>
      <Breadcrumbs items={isExact ? [
        { label: 'list', route: `${url}` },
        { label: 'create', route: `${url}create` },
      ] : [
        { label: 'list', route: `${url}` }
      ]} />

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