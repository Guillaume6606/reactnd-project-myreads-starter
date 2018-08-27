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

  render() {
    return (
      <div className="app">
      <Route path='/search' render={()=>(
        <SearchPage/>
      )}>
      </Route>
      <Route exact path='/' render={() => {
        return (<ListBooks books={this.state.books}/>
      )}}>
      </Route>
      </div>
    )
  }
}

export default BooksApp
