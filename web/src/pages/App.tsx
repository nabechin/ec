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

export const App: FC = () => {
  return (
    <ChakraProvider>
      <Router history={history}>
        <Switch>
          <Header />
          <Route path='/'>{TopPage}</Route>
        </Switch>
      </Router>
    </ChakraProvider>
  )
}
