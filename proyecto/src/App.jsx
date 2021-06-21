import React from 'react'
import Principal from './Components/Principal'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const App = () => {

  return (
    <Router>
      <Switch>
        <Route>
          <Principal/>
        </Route>
      </Switch>
    </Router>
  )
}

export default App
