import React, { Component } from 'react';
import Landing from './components/landing.js';
import Project from './components/project/projectPage.js';
import { Switch, Route } from 'react-router-dom';
import ReactGA from 'react-ga';



class App extends Component {
  fireTracking() {
    ReactGA.pageview(window.location.hash);
  }

  render() {
    return (
      ReactGA.initialize('UA-125104725-1'),
      <Switch>
        <Route exact path='/' component={Landing}/>
        <Route path='/books' component={Landing}/>
        <Route onupdate={this.fireTracking()} path='/projects' component={Project}/>
      </Switch>
    );
  }
}

export default App;
