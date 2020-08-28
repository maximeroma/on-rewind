import React from 'react'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import HomePage from './pages/HomePage'
import EventPage from './pages/EventPage'

import styles from './App.module.scss'

function App() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div>On Rewind App</div>
      </div>

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
