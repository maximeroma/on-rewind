import React from 'react'
import logo from './logo.svg'
import { useQuery, gql } from '@apollo/client'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom'

import HomePage from './pages/HomePage'
import EventPage from './pages/EventPage'

import styles from './App.module.scss'

function App() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div>On Rewind App</div>
      </header>
      <Router>
        <Switch>
          <Route path="/event/:id">
            <EventPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
