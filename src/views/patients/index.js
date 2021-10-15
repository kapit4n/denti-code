import React from 'react';

import { Switch, useRouteMatch, Route } from 'react-router-dom';
import List from './list'
import Create from './create'
import Details from './details';
import Breadcrumbs from '../../components/breadcrumb'


export default function Index() {

  const { path } = useRouteMatch()

  const [breadcrumbs, setBreadcrumbs] = React.useState([]);

  return (
    <div>
      <Breadcrumbs items={breadcrumbs} />

      <Switch>
        <Route exact path={path}>
          <List setBreadcrumbs={setBreadcrumbs} />
        </Route>

        <Route path={`${path}/create`}>
          <Create setBreadcrumbs={setBreadcrumbs} />
        </Route>

        <Route path={`${path}/:id`}>
          <Details setBreadcrumbs={setBreadcrumbs} />
        </Route>
      </Switch>
    </div>
  )
}