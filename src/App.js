import React, { Component } from 'react';
import Landing from './components/landing.js';
import Project from './components/project.js';
import { Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Landing}/>
        <Route path='/books' component={Landing}/>
        <Route path='/projects' component={Project}/>
      </Switch>
    );
  }
}

export default App;
