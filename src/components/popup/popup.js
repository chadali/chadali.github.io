import React from 'react';
import '../../static/popup/styles.css';

class Popup extends React.Component {
  packageData() {
    var data = {}
    data["title"] = document.getElementById("reviewTitle").value;
    data["review"] = document.getElementById("reviewText").value;
    data["password"] = document.getElementById("reviewPassword").value;
    data["email"] = document.getElementById("reviewEmail").value;
    data["year"] = document.getElementById("reviewYear").value;
    data["rating"] = document.getElementById("reviewRating").value;
    data["image"] = document.getElementById("reviewImage").value;
    return data;
  }
  render() {
    return (
      <div className='popup'>
        <div className='popup_inner'>
          <span className="closebtn" onClick={this.props.closePopup}>&times;</span>
          <h1>{this.props.text}</h1>
          <textarea rows="10" cols="50" defaultValue="Enter review here.." id="reviewText" />
          <br/>
          Title: <input id="reviewTitle" type="text" name="title" />
          <br/>
          Year: <input id="reviewYear" type="text" name="year" />
          <br/>
          Rating: <input type="text" id="reviewRating" name="rating" />
          <br/>
          Image: <input type="text" name="image" id="reviewImage" />
          <br/>
          Email: <input type="text" name="email" id="reviewEmail" />
          <br/>
          Password: <input type="text" name="password" id="reviewPassword" />
          <br/>
          <br/>
          <button onClick={() => {this.props.submitNewReview(this.packageData())}}>submit</button>
        </div>
      </div>
    );
  }
}

export default Popup;
