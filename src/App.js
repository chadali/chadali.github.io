import React, { Component } from 'react';
import Landing from './components/landing.js';
import { Switch, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Landing}/>
        <Route path='/books' component={Landing}/>
      </Switch>
    );
  }
}

export default App;
