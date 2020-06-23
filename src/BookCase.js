import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'

class BookCase extends Component {

  render() {
    return(
      <div>  
        <BookShelf books={this.props.books} shelfName={'Reading'} />
        <BookShelf books={this.props.books} shelfName={'Want To Read'} />
        <BookShelf books={this.props.books} shelfName={'Read'} />
      </div>
    )
  }
}

export default BookCase