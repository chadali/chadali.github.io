import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import '../static/landing/landing.css'


class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {activeClass: ""};
  }

  handleMouse(divPosition, state) {
    var newClass = (state === "leave") ? "" : (divPosition === "left") ? "hover-left" : (divPosition === "right") ? "hover-right" : "hover-middle";
    this.setState({
      activeClass: newClass 
    });
  }

  render() {
    return (
      <div className={"container " + this.state.activeClass}>
        <div onMouseEnter={() => this.handleMouse("left","enter")} onMouseLeave={() => this.handleMouse("left","leave")} className="split left">
          <h1>Books</h1>
          <Link to="/books" className="button">Read Reviews</Link>
        </div>
        <div onMouseEnter={() => this.handleMouse("middle","enter")} onMouseLeave={() => this.handleMouse("middle","leave")} className="split middle">
          <h1>Projects</h1>
          <Link to="/" className="button">View All</Link>
        </div>
        <div onMouseEnter={() => this.handleMouse("right","enter")} onMouseLeave={() => this.handleMouse("right","leave")}  className="split right">
          <h1>Coming Soon</h1>
          <Link to="/" className="button">:(</Link>
        </div>
      </div>
    );  
  }
}

export default Landing;
