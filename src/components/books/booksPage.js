import React, {Component} from 'react';
import Book from './book.js';
import Navbar from '../navbar.js';
import SpecificBook from './specificBook.js';
import Loading from '../loading.js';
import DescriptionOverlay from './descriptionOverlay';
import '../../static/books/styles.css';

class Books extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ready: false,
      overlayBookDescription: "",
      overlayBookPic: ""
    };
    this.books = null
    this.openDescription = this.openDescription.bind(this);
  }

  async getBooks() {
    try {
      let response = await fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vQ639gx3DtWge7UOlXW0Frt08fsj2u4SaeWdQdCrh7XaYZnNlaEXBWh4QZ_u0hFTrTC-fmJGA7OoUrG/pub?gid=0&single=true&output=tsv');
      let responseText = await response.text();
      let formattedBooks = await this.formatData(responseText);
      let sortedBooks = await this.sortBooks(formattedBooks);
      let books = await this.booksToComponent(sortedBooks);
      console.log(books);
      this.books = books;
      this.setState({ready: true});
    } catch(error) {
      console.error(error);
    }
  }

  formatData(responseText) {
    let unorganizedArr = responseText.split('\n');
    let organizedArr = [];
    for(var i=0; i<unorganizedArr.length; i+=4) {
      organizedArr.push(new Book(unorganizedArr[i],parseInt(unorganizedArr[i+1], 10),parseInt(unorganizedArr[i+2], 10),unorganizedArr[i+3])); 
    }
    return organizedArr;
  }

  sortBooks(books) {
    return books.sort(function(a, b) {
      return b.year - a.year;
    });
  }

  booksToComponent(books) {
    let bookComponents = books.map(x => <span onClick={e => this.openDescription(e,x)} key={x.title}><SpecificBook onClick={() => {console.log('test');}} book={x}/></span>);
    return bookComponents;
  }


  componentDidMount() {
    this.getBooks();
  }

  openDescription(e,book) {
    this.setState({
      overlayBookDescription: book.description,
      overlayBookPic: book.title
    });
    document.getElementById("myNav").style.height = "100%";
  }

  render() {
    if(!this.state.ready) {
      return (
        <div className="booksRoot">
          <Navbar/>
          <Loading/>
        </div>
      );
    } else {
      return (
        <div className="booksRoot">
          <Navbar/>
          <div className="booksContainer">
            <h1 className="booksTitle">Book👏Review </h1>
            {this.books}
            <DescriptionOverlay bookDescription={this.state.overlayBookDescription} bookPic={this.state.overlayBookPic}/>
          </div>
        </div>
      )
    }
  }
}

export default Books;
