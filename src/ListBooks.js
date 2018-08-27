import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import BookShelf from './BookShelf'

class ListBooks extends Component {

  render() {
    const {books, onShelfChange} = this.props;

    return(
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <BookShelf content={books.filter((book) => (book.shelf === "currentlyReading"))} onShelfChange={onShelfChange}/>
          <BookShelf content={books.filter((book) => (book.shelf === "wantToRead"))} onShelfChange={onShelfChange}/>
          <BookShelf content={books.filter((book) => (book.shelf === "read"))} onShelfChange={onShelfChange}/>
        </div>
        <div className="open-search">
          <Link to='/search'>Add a book</Link>
        </div>
      </div>
    )
  }
}

export default ListBooks
