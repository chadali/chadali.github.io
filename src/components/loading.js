import React, {Component} from 'react';

class Loading extends Component {
  constructor(props) {
    super(props)
    this.state = {}   
  }

  render() {
    return (
      <div style={{textAlign:"center"}}>
        <h1> Fetching Resources.. </h1>
        <img alt="loading icon" src={require('../static/img/spinner.svg')} width="150" height="150"/>
      </div>
    )   
  }
}

export default Loading;
