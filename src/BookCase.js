import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BookShelf from './BookShelf'
import { Link } from 'react-router-dom'

class BookCase extends Component {

  render() {
    return(
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <BookShelf books={ this.props.books } shelf={ 'currentlyReading' } shelfName={ 'Currently Reading' } onShelfChange={ this.props.onShelfChange } />
          <BookShelf books={ this.props.books } shelf={ 'wantToRead' } shelfName={ 'Want To Read' } onShelfChange={ this.props.onShelfChange } />
          <BookShelf books={ this.props.books } shelf={ 'read' } shelfName={ 'Read' } onShelfChange={ this.props.onShelfChange } />
        </div>
        <div className="open-search">
          <Link className='open-search' to='/search'>Add a book</Link>
        </div>
      </div>
    )
  }
}

BookCase.propTypes = {
    books: PropTypes.array.isRequired,
    onShelfChange: PropTypes.func.isRequired
}

export default BookCase