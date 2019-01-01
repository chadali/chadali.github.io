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

    var description = ""
    // eslint-disable-next-line
    this.props.bookDescription.split("\\n").map( function(string) {
      description += string;
      description += " \n";
    })  

    return (
      <div id="myNav" className="overlay">

        <span className="closebtn" onClick={this.closeNav}>&times;</span>
        <div className="overlay-content" style={{color:"#eaecef"}}>
          <div id="overlayPic"><img src={Images['books'][this.props.bookPic.trim()]} style={{maxHeight:"300px"}} className="img-rounded img-responsive" alt={this.props.bookPic}/></div>
          <div id="actualContent"><b>{this.props.bookPic}</b>, {description}</div>
        </div>
      </div>
    );  

  }
}

export default DescriptionOverlay;
