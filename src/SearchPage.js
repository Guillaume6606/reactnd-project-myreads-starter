import React, {Component} from 'react'
import * as BooksAPI from './BooksAPI'
import {Link} from 'react-router-dom'
import Book from './Book'

class SearchPage extends Component {

  state = {
    query:'',
    searchResults: [],
    noResults: false
  }

clearQuery = () => {
  this.setState({
    query:''
  })
}

searchBooks = (event) => {
  const query = event.target.value.trim();
  this.setState({
    query: query
  });

  if(query){
  BooksAPI.search(query)
  .then((response) => {
    response.forEach((book) => {
      book.shelf = 'none';
      this.props.books.forEach((existingBook) => {
        if(book.id === existingBook.id) {
          book.shelf = existingBook.shelf;
        }
      })
    })
    this.setState({searchResults:response});
  })
  .catch((err) => {
    this.setState({
      searchResults:[],
      noResults:true
    })
  })
} else {
  this.setState({searchResults:[]});
}
}

  render() {
    const {query,searchResults, noResults} = this.state;
    const {books, onShelfChange} = this.props;

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to='/'>Close</Link>
          <div className="search-books-input-wrapper">
            <input type="text"
             placeholder="Search by title or author"
             value={query} onChange={(event) => {this.searchBooks(event)}}
             />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
          {
            searchResults.map((book) => (
              <li key={book.id}>
              <Book book={book} onShelfChange={onShelfChange}/>
              </li>
            ))
          }
          {this.state.noResults && (
            <div>There is no result to display. Sorry</div>
          )}
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchPage
