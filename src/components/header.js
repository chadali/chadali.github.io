import React, {Component} from 'react';
import {Link} from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <header>
        <nav>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/Books'>Books</Link></li>
            <li><Link to='/Tutorials'>Tutorials</Link></li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
