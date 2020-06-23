import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookCase from './BookCase'
import { Route } from 'react-router-dom'
import SearchBooks from './SearchBooks'

class BooksApp extends React.Component {
  state = {
    books: []    
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then((results)=> {
        this.setState(()=> ({
          books: results
        }))
      })
  }

  searchBooks = (query)=> {
    BooksAPI.search(query)
  }

  render() {
    return (
      <div>
        <Route exact path='/' render={()=> (
          <BookCase books={this.state.books}/>
        )} />
        <Route path='/search' render={()=> (
          <SearchBooks />
        )} />
      </div>  
    )
  }
}

export default BooksApp
