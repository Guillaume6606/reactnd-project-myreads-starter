import React, {Component} from 'react';
import ShelfSelector from './ShelfSelector'

class Book extends Component {

  render() {
    const {book, onShelfChange} = this.props;
    const imageURL = book.imageLinks && book.imageLinks.thumbnail ? book.imageLinks.thumbnail : 'no Cover';
    const title = book && book.title ? book.title : "No defined title";
    const authors = book && book.authors ? book.authors : "No defined author";
    
      return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover">
            <img src={imageURL} alt={`The cover of ${title}`}/>
          </div>
          <ShelfSelector
            book={book}
            checked={book.shelf}
            onShelfChange={onShelfChange}
          />
        </div>
        <div className="book-title">{title}</div>
        <div className="book-authors">{authors}</div>
      </div>
    )
  }
}

export default Book
