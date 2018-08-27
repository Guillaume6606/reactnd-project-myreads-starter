import React, {Component} from 'react';
import ShelfSelector from './ShelfSelector'

class Book extends Component {

  render() {
    const {book, onShelfChange} = this.props;

      return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
          <ShelfSelector
            book={book}
            checked={book.shelf}
            onShelfChange={onShelfChange}
          />
        </div>
        <div className="book-title">{book &&(book.title)}</div>
        <div className="book-authors">{book &&(book.authors)}</div>
      </div>
    )
  }
}

export default Book
