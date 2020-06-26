import React from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

function BookShelf(props) {
  const listBooks = props.books.filter((book)=> (
    book.shelf === props.shelf
  ))
    
  return(
    <div className="bookshelf">
      <h2 className="bookshelf-title">{ props.shelfName }</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          { listBooks.map((book)=> (
            <li key={ book.id }>
              <Book book={ book } onShelfChange={ props.onShelfChange } />    
            </li>
          )) }
        </ol>
      </div>
    </div>
  )
}

BookShelf.propTypes = {
    book: PropTypes.object,
    shelf: PropTypes.string.isRequired,
    shelfName: PropTypes.string.isRequired,
    onShelfChange: PropTypes.func.isRequired
}

export default BookShelf