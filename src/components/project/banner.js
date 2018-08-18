import React, {Component} from 'react';
import '../../static/project/banner.css';

class Banner extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      removeBanner: false,
    }   
  }

  removeBanner() {
    this.setState({removeBanner: true});
  }

  render() {
    return (
      <div className={(this.state.removeBanner) ? "hide at-banner" : "at-banner"}>
        <div className="at-banner__content">
          <div className="at-banner__text">
            Hey there! I've put additional info, pictures, videos, and key files in every README so check them out!
          </div>
          <a className="at-banner__button" rel="noopener noreferrer" href="https://github.com/chadali" target="_blank">View Github</a>
        </div>
        <div className="at-banner__close" onClick={() => this.removeBanner()}></div>
      </div>
    )   
  }
}

export default Banner;
