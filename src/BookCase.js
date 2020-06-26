import React from 'react'
import PropTypes from 'prop-types'
import BookShelf from './BookShelf'
import { Link } from 'react-router-dom'

function BookCase(props) {
  return(
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <BookShelf books={ props.books } shelf={ 'currentlyReading' } shelfName={ 'Currently Reading' } onShelfChange={ props.onShelfChange } />
        <BookShelf books={ props.books } shelf={ 'wantToRead' } shelfName={ 'Want To Read' } onShelfChange={ props.onShelfChange } />
        <BookShelf books={ props.books } shelf={ 'read' } shelfName={ 'Read' } onShelfChange={ props.onShelfChange } />
      </div>
      <div className="open-search">
        <Link className='open-search' to='/search'>Add a book</Link>
      </div>
    </div>
  )
}


BookCase.propTypes = {
    books: PropTypes.array.isRequired,
    onShelfChange: PropTypes.func.isRequired
}

export default BookCase