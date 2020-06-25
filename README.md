# MyReads App

## Table of Contents

* [Project info](#project_info)
* [List of files](#list_of_files)
* [Installation](#installation)
* [Components](#components)

## Project_Info

This is my MyReads project for Udacity's React Fundamentals course. The subject of the project was to build a React app that menages books. It shows 3 shelves with books that the user is currently reading, wants to read and already read. Each book has the control button which allows the user to change the shelf the book is on. On the bottom of the page there is a "Add a book" button which switches the app to the search screen where user can search the books API and add new books to the list. Books API search query list is predefined and available in the SEARCH_TERMS.md file.

## List_Of_Files

package-lock.json
package.json
README.md
SEARCH_TERMS.md

\public
- favicon.ico
- index.html

\src
- App.css
- App.js
- Book.js
- BookCase.js
- BooksAPI.js
- BookShelf.js
- index.css
- index.js
- SearchBooks.js

\src\icons
- style.scss

## Installation

Install all the project dependencies with
- npm install

Start the project with
- npm start

## Components

- App.js
    Main app component.
- BookCase.js
    Component renders 3 bookshelves with currently added books from Books API.
- BookShelf.js
    Component renders a bookshelf of specified category.
- Book.js
    Component renders a book thumbnail with the button that conrols on which shelf the book is currently on.
- SearchBook.js
    Component renders a search input field and a list of search results from Books API.
- BooksAPI.js
    Set of methods for communicating with the Books API.