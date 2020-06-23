import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'

class SearchBooks extends Component {
  state = {
    query: '',
    searchResults: []
  }

  handleSearch = (q)=> {
    this.setState(()=> ({query: q}))
    q === '' && this.setState(()=> ({ searchResults: [] }))
    q !== '' && BooksAPI.search(q, 5)
      .then((results)=> {
        this.setState(()=> ({
          searchResults: results
        }))
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
            {this.state.searchResults.length > 0 && this.state.searchResults.map((book)=> (
              <li key={ book.id }>
                <Book book={ book }/>
              </li>
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchBooks