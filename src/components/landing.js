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
        <Link to="/books" onMouseEnter={() => this.handleMouse("left","enter")} onMouseLeave={() => this.handleMouse("left","leave")} className="split left">
          <h1>Books</h1>
          <div className="button">Read Reviews</div>
        </Link>
        <Link to="/projects" onMouseEnter={() => this.handleMouse("middle","enter")} onMouseLeave={() => this.handleMouse("middle","leave")} className="split middle">
          <h1>Projects</h1>
          <div className="button">View All</div>
        </Link>
        <Link to="/" onMouseEnter={() => this.handleMouse("right","enter")} onMouseLeave={() => this.handleMouse("right","leave")}  className="split right">
          <h1>Coming Soon</h1>
          <div className="button">:(</div>
        </Link>
      </div>
    );  
  }
}

export default Landing;
