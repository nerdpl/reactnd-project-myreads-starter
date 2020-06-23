import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class BookShelf extends Component {

  render() {
    const listBooks = this.props.books.filter((book)=> (
        book.shelf === this.props.shelfName
    ))
    
    console.log(listBooks)
    
    return(
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.shelfName}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {listBooks.map((book)=> (
                <li>
                <div className="book">
                    <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: 'url(' + book.bookCover + ')'}}></div>
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
                    <div className="book-title">{ book.title }</div>
                    <div className="book-authors">{ book.authors }</div>
                </div>
                </li>
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default BookShelf