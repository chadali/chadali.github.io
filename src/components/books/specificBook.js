import React from 'react';
import Images from '../../static/img/images';

class SpecificBook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {

    var alt = this.props.book.title + " Image";

    return (
      <span className="specificBook">
        <figure className="snip1556">
          <figcaption>
            <h3>{this.props.book.title}</h3>
          </figcaption><img src={Images['books'][this.props.book.title.trim()]} className="bookImage img-rounded img-responsive" alt={alt}/>
        </figure>

      </span>   
    );
  }
}

export default SpecificBook;
