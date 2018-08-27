import React, {Component} from 'react';

class ShelfSelector extends Component {
  render() {
    return (
      <div className="book-shelf-changer">
        {this.props.selector ==="currentlyReading" && (
          <select defaultValue="currentlyReading">
          <option value="move" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>)}
        {this.props.selector ==="wantToRead" && (
          <select defaultValue="wantToRead">
          <option value="move" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>)}
        {this.props.selector ==="read" && (
          <select defaultValue="read">
          <option value="move" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>)}
      </div>
    )
  }
}

export default ShelfSelector
