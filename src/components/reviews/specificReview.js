import React from 'react';
import Images from '../../static/img/images';

class SpecificReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {

    var alt = this.props.review.title + " Image";

    return (
      <span className="specificReview">
        <figure className="snip1556">
          <figcaption>
            <h3>{this.props.review.title}</h3>
          </figcaption><img src={Images[this.props.type][this.props.review.title.trim()]} className="reviewImage img-rounded img-responsive" alt={alt}/>
        </figure>

      </span>   
    );
  }
}

export default SpecificReview;
