import React, { Component } from 'react'
import Book from './Book'

class BookShelf extends Component {

  render() {
    const listBooks = this.props.books.filter((book)=> (
        book.shelf === this.props.shelf
    ))
    
    return(
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.shelfName}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {listBooks.map((book)=> (
              <li key={book.id}>
                <Book book={ book } />    
              </li>
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default BookShelf