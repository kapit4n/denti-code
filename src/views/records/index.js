import React from 'react';

import { Link, Switch, useRouteMatch, Route } from 'react-router-dom';

import Breadcrumbs from '../../components/breadcrumb'
import List from './list'
import Create from './create'
import Details from './details';
import Edit from './edit';

export default function Index() {

  const { url, path, isExact } = useRouteMatch()
  const [breadcrumbs, setBreadcrumbs] = React.useState([])

  return (
    <div>
      <Breadcrumbs items={breadcrumbs} />
      <Switch>
        <Route exact path={path}>
          <List  setBreadcrumbs={setBreadcrumbs}/>
        </Route>
        <Route path={`${path}/create`}>
          <Create  setBreadcrumbs={setBreadcrumbs}/>
        </Route>
        <Route path={`${path}/:id/edit`}>
          <Edit  setBreadcrumbs={setBreadcrumbs}/>
        </Route>
        <Route path={`${path}/:id`}>
          <Details  setBreadcrumbs={setBreadcrumbs}/>
        </Route>
      </Switch>
    </div>
  )
}
