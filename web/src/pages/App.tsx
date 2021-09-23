import React, { FC } from 'react'
import loadable from '@loadable/component'
import { createBrowserHistory } from 'history'
import { Switch, Route, Router } from 'react-router-dom'
import Header from '~/organism/Header'
import { ChakraProvider } from '@chakra-ui/react'

const TopPage = loadable(
  () => import(/* webpackChunkName: 'top' */ './TopPage'),
)

const history = createBrowserHistory()

type Props = {
  path: string
}

const AppRoute: FC<Props> = (props) => {
  return (
    <Route path={props.path}>
      <Header></Header>
      {props.children}
    </Route>
  )
}

export const App: FC = () => {
  return (
    <ChakraProvider>
      <Router history={history}>
        <Switch>
          <AppRoute path='/'>
            <TopPage></TopPage>
          </AppRoute>
        </Switch>
      </Router>
    </ChakraProvider>
  )
}
