import React, {Component} from 'react';
import Review from './review.js';
import Navbar from '../navbar.js';
import SpecificReview from './specificReview.js';
import Loading from '../loading.js';
import DescriptionOverlay from './descriptionOverlay';
import '../../static/reviews/styles.css';
import db from '../../Firebase.js';

class Reviews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ready: false,
      overlayReviewDescription: "",
      overlayReviewImage: "",
      overlayReviewTitle: ""
    };
    this.reviews = null
    this.openDescription = this.openDescription.bind(this);
  }

  async getReviews() {
    let reviews = [];
    db.collection(this.props.type).get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        var data = doc.data();
        reviews.push(new Review(data.title, data.year, data.rating, data.review, data.image));
      });

      reviews.sort(function(a,b) {
        return b.year - a.year;
      }); 

      reviews = reviews.map(x => <span onClick={e => this.openDescription(e,x)} key={x.title}><SpecificReview onClick={() => {console.log('test');}} review={x} type={this.props.type}/></span>);

      this.reviews = reviews;
      this.setState({ready: true});
    });
  }

  componentDidMount() {
    this.getReviews();
  }

  componentDidUpdate(prevProps) {
    if (this.props.type !== prevProps.type) {
      this.getReviews();
    }
  }

  openDescription(e,review) {
    this.setState({
      overlayReviewDescription: review.description,
      overlayReviewTitle: review.title,
      overlayReviewImage: review.image,
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
            <h1 className="reviewsTitle">{this.props.type[0].toUpperCase() + this.props.type.slice(1, -1)}<span role="img" aria-label="Clap Hand">👏</span>Review</h1>
            {this.reviews}
            <DescriptionOverlay type={this.props.type} reviewTitle={this.state.overlayReviewTitle} reviewDescription={this.state.overlayReviewDescription} reviewImage={this.state.overlayReviewImage}/>
          </div>
        </div>
      )
    }
  }
}

export default Reviews;
