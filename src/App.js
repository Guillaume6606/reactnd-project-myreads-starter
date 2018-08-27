import React from 'react'
import {Route} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import SearchPage from './SearchPage'
import './App.css'
import ListBooks from './ListBooks'


class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({books});
    })
  }

  changeShelf = (book, shelf) => {
    BooksAPI.update(book,shelf).then((response)=>{
      let updatedBooks = this.state.books.filter((b) => (b.id !== book.id));
      if(book.shelf !== "none") {
        book.shelf = shelf;
        updatedBooks.push(book);
      }
      this.setState({books:updatedBooks});
    });
  }

  render() {
    return (
      <div className="app">
      <Route path='/search' render={()=>(
        <SearchPage/>
      )}>
      </Route>
      <Route exact path='/' render={() => {
        return (<ListBooks books={this.state.books} onShelfChange={this.changeShelf}/>
      )}}>
      </Route>
      </div>
    )
  }
}

export default BooksApp
