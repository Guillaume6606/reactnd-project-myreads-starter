import React {Component} from 'react';
import ShelfSelector from './ShelfSelector'

class Book extends Component {

  render() {
    const {book} = this.props.book;
    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url({book.imageLinks.thumbnail})' }}></div>
          <ShelfSelector/>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors}</div>
      </div>
    )
  }
}

export default Book
