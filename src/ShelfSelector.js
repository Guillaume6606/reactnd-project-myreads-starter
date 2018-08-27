import React, {Component} from 'react';

class ShelfSelector extends Component {

  render() {
    const {book, checked, onShelfChange} = this.props;

    return (
      <div className="book-shelf-changer">
          <select defaultValue={checked} onChange={(event) => {onShelfChange(book,event.target.value)}}>
          <option value="move" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    )
  }
}

export default ShelfSelector
