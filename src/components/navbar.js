import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import '../static/navbar/navbar.css'

class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mobileToggle: false
    }
  }

  toggleMobileNav() {
    this.setState((prevState) => ({
      mobileToggle: !prevState.mobileToggle
    }));
  }

  render() {
    return (
      <section className="navigation">
        <div className="nav-container">
          <div className="brand">
            <a href="/">CHADALI</a>
          </div>
          <nav>
            <div onClick={() => this.toggleMobileNav()} className="nav-mobile">
              <a id="nav-toggle"><span></span></a>
            </div>
            <ul className={"nav-list " + (this.state.mobileToggle ? "active" : "")}>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/books">Books</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/movies">Movies</Link></li>
            </ul>
          </nav>
        </div>
      </section>
    )
  }
}

export default Navbar;
