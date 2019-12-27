import React from 'react';
import '../../static/popup/styles.css';

class Popup extends React.Component {

  constructor(props) {
    super(props);
    this.formInputsName = ["Title", "Description", "Year", "Rating", "Image", "Password", "Email"];
  }

  componentDidMount() {
    this.formInputs = this.formInputsName.map(x => document.getElementById("review" + x));
  }

  packageData() {
    var data = {}
    for(var i = 0; i < this.formInputs.length; i++) {
      data[this.formInputsName[i].toLowerCase()] = this.formInputs[i].value;
    }
    return data;
  }

  prefill(x) {
    for(var i = 0; i < this.formInputs.length - 2; i++) {
      this.formInputs[i].value = x[this.formInputsName[i].toLowerCase()];
    }
  }

  render() {
    let options = this.props.data.map(x => <button onClick={() => this.prefill(x)} key={x.title}>{x.title}</button>);
      //reviews = reviews.map(x => <span onClick={e => this.openDescription(e,x)} key={x.title}><SpecificReview onClick={() => {console.log('test');}} review={x} ty    pe={this.props.type}/></span>);
    return (
      <div className='popup'>
        <div className='popup_inner'>
          <span className="closebtn" onClick={this.props.closePopup}>&times;</span>
          <h1>{this.props.text}</h1>
          <textarea rows="10" cols="50" defaultValue="Enter review here.." id="reviewDescription" />
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
          <br/>
          <br/>
          <span>
          Pre-fill from existing:   
          { options }
          </span>
        </div>
      </div>
    );
  }
}

export default Popup;
