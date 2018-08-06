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
              <li><a href="#!">Home</a></li>
              <li><a href="#!">About</a></li>
              <li><a href="#!">Pricing</a></li>
              <li><a href="#!">Contact</a></li>
            </ul>
          </nav>
        </div>
      </section>
    )
  }
}

export default Navbar;
