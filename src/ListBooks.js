import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import BookShelf from './BookShelf'

class ListBooks extends Component {

  render() {
    return(
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <BookShelf content={this.props.books.filter((book) => (book.shelf === "currentlyReading"))}/>
          <BookShelf content={this.props.books.filter((book) => (book.shelf === "wantToRead"))}/>
          <BookShelf content={this.props.books.filter((book) => (book.shelf === "read"))}/>
        </div>
        <div className="open-search">
          <Link to='/search'>Add a book</Link>
        </div>
      </div>
    )
  }
}

export default ListBooks
