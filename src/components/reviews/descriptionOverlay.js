import React from 'react';

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
          <div id="overlayPic"><img src={this.props.reviewImage} style={{maxHeight:"300px"}} className="img-rounded img-responsive" alt={this.props.reviewTitle}/></div>
          <div id="actualContent"><b>{this.props.reviewTitle}</b>, {this.props.reviewDescription.replace(/\\n/g,"\n")}</div>
        </div>
      </div>
    );  

  }
}

export default DescriptionOverlay;
