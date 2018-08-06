import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import Navbar from './navbar.js';

class Project extends Component {
  constructor(props) {
    super(props);
    //this.state = {activeClass: ""};
  }

  render() {
    return (
      <Navbar/>
    );    
  }
}

export default Project;
