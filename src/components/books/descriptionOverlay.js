import React from 'react';
import Images from '../../static/img/images';

class DescriptionOverlay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  closeNav() {
    document.getElementById("myNav").style.height = "0%";
  }

  render() {
    return (
      <div id="myNav" className="overlay">

        <a href="javascript:void(0)" className="closebtn" onClick={this.closeNav}>&times;</a>
        <div className="overlay-content" style={{color:"#eaecef"}}>
          <div id="overlayPic"><img src={Images['books'][this.props.bookPic.trim()]} style={{maxHeight:"300px"}} className="img-rounded img-responsive" alt={this.props.bookPic}/></div>
          <div id="actualContent"><b>{this.props.bookPic}</b>, {this.props.bookDescription}</div>
        </div>
      </div>
    );  

  }
}

export default DescriptionOverlay;
