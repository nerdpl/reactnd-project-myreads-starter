import React, { Component } from 'react'

class Book extends Component {

    render() {
        return (
            <div className="book">
                  <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: 'url(' + this.props.book.imageLinks.smallThumbnail + ')'}}></div>
                    <div className="book-shelf-changer">
                      <select>
                      <option value="move" disabled>Move to...</option>
                      <option value="reading">Currently Reading</option>
                      <option value="wantToRead">Want to Read</option>
                      <option value="read">Read</option>
                      <option value="none">None</option>
                      </select>
                    </div>
                  </div>
                  <div className="book-title">{ this.props.book.title }</div>
                  <div className="book-authors">{ this.props.book.authors.length > 1 
                    ? this.props.book.authors.map((author, index)=> (index !== this.props.book.authors.length - 1 
                      ? author + ', '
                      : author )) 
                    : this.props.book.authors.map((author)=> author)}
                  </div>
                </div>
        )
    }
}

export default Book