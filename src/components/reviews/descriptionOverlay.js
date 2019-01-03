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
        <span className="closebtn" onClick={this.closeNav}>&times;</span>
        <div className="overlay-content" style={{color:"#eaecef"}}>
          <div id="overlayPic"><img src={Images[this.props.type][this.props.reviewPic.trim()]} style={{maxHeight:"300px"}} className="img-rounded img-responsive" alt={this.props.reviewPic}/></div>
          <div id="actualContent"><b>{this.props.reviewPic}</b>, {this.props.reviewDescription.replace(/\\n/g,"\n")}</div>
        </div>
      </div>
    );  

  }
}

export default DescriptionOverlay;
