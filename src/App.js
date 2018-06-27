import React, { Component } from 'react';
import './App.css';
import Header from './components/header.js';
import Footer from './components/footer.js';
import Tutorial from './components/tutorial.js';
import Main from './components/main.js';
import { Switch, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' component={Main}/>
          <Route path='/tutorials' component={Tutorial}/>
        </Switch>
      </div>
    );
  }
}

export default App;
