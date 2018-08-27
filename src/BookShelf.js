import React, {Component} from 'react'
import Book from './Book'

class BookShelf extends Component {
  render() {
    const content = this.props.content;
    let shelfTitle='';
    if(content[0]){
      {content[0].shelf === 'currentlyReading' && (shelfTitle='Currently Reading')
      content[0].shelf === 'wantToRead' && (shelfTitle='Want to Read')
      content[0].shelf === 'read' && (shelfTitle='Read')}
    }
    return(
      <div className="bookshelf">
      <h2 className="bookshelf-title">{shelfTitle}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {content[0] && (content.map(book => (
            <li key={book.id}>
              <Book book={book}/>
            </li>
          )))}
          </ol>
        </div>
      </div>
    )
  }
}

export default BookShelf
