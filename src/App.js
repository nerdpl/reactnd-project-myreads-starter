import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookCase from './BookCase'
import { Route } from 'react-router-dom'
import SearchBooks from './SearchBooks'

class BooksApp extends React.Component {
  state = {
    books: [],
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then((results)=> {
        this.setState(()=> ({
          books: results
        }))
      })
  }
  
  shelfChange = (book, shelf)=> {
    BooksAPI.update(book, shelf)
      .then(()=> {
        BooksAPI.get(book.id)
          .then((results)=> {
            const currState = this.state.books
            const newState = currState.map((book)=> {
              if (book.id === results.id) book.shelf = results.shelf
              return book
            })
            this.setState(()=> ({
              books: newState
            }))
          })
      })
  }

  render() {
    return (
      <div>
        <Route exact path='/' render={()=> (
          <BookCase books={ this.state.books } onShelfChange={ this.shelfChange } />
        )} />
        <Route path='/search' render={()=> (
          <SearchBooks onShelfChange={ this.shelfChange } />
        )} />
      </div>  
    )
  }
}

export default BooksApp
