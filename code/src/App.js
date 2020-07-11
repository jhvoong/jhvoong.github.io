import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import About from './components/About'
import BitProject from './components/BitProject'
import HealthyU from './components/HealthyU'
import Home from './components/Home'
import SWF from './components/SWF'

import './reset.css'
import './App.scss'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/healthyu" component={HealthyU} />
        <Route exact path="/bitproject" component={BitProject} />
        <Route exact path="/swf" component={SWF} />
      </Switch>
    </Router>
  );
}

export default App;
