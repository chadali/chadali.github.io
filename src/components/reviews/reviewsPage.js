import React, {Component} from 'react';
import Review from './review.js';
import Navbar from '../navbar.js';
import SpecificReview from './specificReview.js';
import Loading from '../loading.js';
import DescriptionOverlay from './descriptionOverlay';
import '../../static/reviews/styles.css';

class Reviews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ready: false,
      overlayReviewDescription: "",
      overlayReviewPic: ""
    };
    this.reviews = null
    this.openDescription = this.openDescription.bind(this);
  }

  async getReviews(url) {
    try {
      let response = await fetch(url);
      let responseText = await response.text();
      let formattedReviews = await this.formatData(responseText);
      let sortedReviews = await this.sortReviews(formattedReviews);
      let reviews = await this.reviewsToComponent(sortedReviews);
      console.log(reviews);
      this.reviews = reviews;
      this.setState({ready: true});
    } catch(error) {
      console.error(error);
    }
  }

  formatData(responseText) {
    let unorganizedArr = responseText.split('\n');
    let organizedArr = [];
    for(var i=0; i<unorganizedArr.length; i+=4) {
      organizedArr.push(new Review(unorganizedArr[i],parseInt(unorganizedArr[i+1], 10),parseInt(unorganizedArr[i+2], 10),unorganizedArr[i+3])); 
    }
    return organizedArr;
  }

  sortReviews(reviews) {
    return reviews.sort(function(a, b) {
      return b.year - a.year;
    });
  }

  reviewsToComponent(reviews) {
    let reviewComponents = reviews.map(x => <span onClick={e => this.openDescription(e,x)} key={x.title}><SpecificReview onClick={() => {console.log('test');}} review={x} type={this.props.type}/></span>);
    return reviewComponents;
  }


  componentDidMount() {
    this.getReviews(this.props.type === "book" ? "https://docs.google.com/spreadsheets/d/e/2PACX-1vQ639gx3DtWge7UOlXW0Frt08fsj2u4SaeWdQdCrh7XaYZnNlaEXBWh4QZ_u0hFTrTC-fmJGA7OoUrG/pub?gid=0&single=true&output=tsv" : "https://docs.google.com/spreadsheets/d/e/2PACX-1vRRoDum8RqANxVyF7kRG1X0Qs3ZwolilKMbeAywmG0uxT1V_LNELFmJDxZuE0N2osR0CceBQr9S-nqV/pub?gid=0&single=true&output=tsv");
  }

  openDescription(e,review) {
    this.setState({
      overlayReviewDescription: review.description,
      overlayReviewPic: review.title
    });
    document.getElementById("myNav").style.height = "100%";
  }

  render() {
    if(!this.state.ready) {
      return (
        <div className="reviewsRoot">
          <Navbar/>
          <Loading/>
        </div>
      );
    } else {
      return (
        <div className="reviewsRoot">
          <Navbar/>
          <div className="reviewsContainer">
            <h1 className="reviewsTitle">{this.props.type[0].toUpperCase() + this.props.type.slice(1)}<span role="img" aria-label="Clap Hand">👏</span>Review</h1>
            {this.reviews}
            <DescriptionOverlay type={this.props.type} reviewDescription={this.state.overlayReviewDescription} reviewPic={this.state.overlayReviewPic}/>
          </div>
        </div>
      )
    }
  }
}

export default Reviews;
