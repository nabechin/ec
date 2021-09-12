import React, { FC } from 'react'
import loadable from '@loadable/component'
import { createBrowserHistory } from 'history'
import { Switch, Route, Router } from 'react-router-dom'

const TopPage = loadable(
  () => import(/* webpackChunkName: 'top' */ './TopPage'),
)

const history = createBrowserHistory()

export const App: FC = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path='/'>
          <TopPage></TopPage>
        </Route>
      </Switch>
    </Router>
  )
}
