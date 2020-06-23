import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import BookCase from './BookCase'
import { Route } from 'react-router-dom'
import SearchBooks from './SearchBooks'

class BooksApp extends React.Component {
  state = {
    books: [
      {
        id: 0,
        title: 'The Adventures of Tom Sawyer',
        authors: 'Mark Twain',
        bookCover: 'http://books.google.com/books/content?id=32haAAAAMAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72yckZ5f5bDFVIf7BGPbjA0KYYtlQ__nWB-hI_YZmZ-fScYwFy4O_fWOcPwf-pgv3pPQNJP_sT5J_xOUciD8WaKmevh1rUR-1jk7g1aCD_KeJaOpjVu0cm_11BBIUXdxbFkVMdi&source=gbs_api',
        shelf: 'Reading'
      }
    ]
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
