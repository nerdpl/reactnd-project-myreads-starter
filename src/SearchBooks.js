import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'
import { debounce } from 'debounce'

class SearchBooks extends Component {
  state = {
    query: '',
    searchResults: []
  }

  handleSearch = (q)=> {
    this.setState(()=> ({ query: q }))
    debounce(this.getSearchResults(q), 1000)
  }

  getSearchResults = (q)=> {
    q === '' && this.setState(()=> ({ searchResults: [] }))
    q !== '' && BooksAPI.search(q)
      .then((results)=> {
        if (results.length > 0) {
          const newResults = results.map((book)=> {
            this.props.books.map((bookOnShelf)=> {
              if (bookOnShelf.id === book.id) book.shelf = bookOnShelf.shelf
              return null
            })
            return book
          })
          this.setState(()=> ({ searchResults: newResults }))
        }
      })
  }

  render() {
    
    return(
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to='/'>Close</Link>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author" value={ this.state.query } onChange={ (event)=> this.handleSearch(event.target.value) } />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            { this.state.searchResults.length > 0 && this.state.searchResults.map((book)=> (
              <li key={ book.id }>
                <Book book={ book } onShelfChange={ this.props.onShelfChange } />
              </li>
            )) }
          </ol>
        </div>
      </div>
    )
  }
}

SearchBooks.propTypes = {
  books: PropTypes.array.isRequired,
  onShelfChange: PropTypes.func.isRequired
}

export default SearchBooks