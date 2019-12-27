import React, {Component} from 'react';
import Popup from '../popup/popup.js';
import Review from './review.js';
import Navbar from '../navbar.js';
import SpecificReview from './specificReview.js';
import Loading from '../loading.js';
import DescriptionOverlay from './descriptionOverlay';
import '../../static/reviews/styles.css';
// eslint-disable-next-line
import {db, storage, auth} from '../../Firebase.js';

class Reviews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ready: false,
      overlayReviewDescription: "",
      overlayReviewImage: "",
      overlayReviewTitle: "",
      showPopup: false
    };
    this.reviews = null;
    this.data = null;
    this.openDescription = this.openDescription.bind(this);
  }

  async getReviews() {
    let reviews = [];
    db.collection(this.props.type).get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        var data = doc.data();
        reviews.push(new Review(data.title, data.year, data.rating, data.review, data.image));
      });

      this.data = Array.from(reviews);

      reviews.sort(function(a,b) {
        return b.year - a.year;
      }); 

      reviews = reviews.map(x => <span onClick={e => this.openDescription(e,x)} key={x.title}><SpecificReview review={x} type={this.props.type}/></span>);

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

  togglePopup() {
    this.setState(prevState => ({
      showPopup: !prevState.showPopup
    }));
  }

  submissionUpdate(update) {
    document.getElementById("reviewDescription").value = update + "\n\n\n" + document.getElementById("reviewDescription").value;
  }
  
  async submitReview(data) {
    await auth.signOut();

    await auth.signInWithEmailAndPassword(data.email, data.password).catch((error) => {
      console.log(error);
      var errorCode = error.code;
      var errorMessage = error.message;
      this.submissionUpdate(errorCode + '\n' + errorMessage);
      return;
    });

    console.log("trying to save now");

    await db.collection(this.props.type).doc(data.title).set({
      title: data.title,
      image: data.image,
      rating: parseInt(data.rating), 
      review: data.description,
      year: parseInt(data.year)
    })
    .then(() => {
      console.log("successfully written");
      this.submissionUpdate("Successfully Written");
    })
    .catch((error) => {
      console.log(error);
      this.submissionUpdate(error);
    });
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

            <button onClick={this.togglePopup.bind(this)} className="float"/>
            <i onClick={this.togglePopup.bind(this)} className="fa fa-plus my-float"></i>

            {this.state.showPopup ? <Popup text='Add Review' data={this.data} submitNewReview={this.submitReview.bind(this)} closePopup={this.togglePopup.bind(this)}/> : null }
          </div>
        </div>
      )
    }
  }
}

export default Reviews;
