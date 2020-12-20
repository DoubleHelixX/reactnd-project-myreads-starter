import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import ListCurrentBooks from './ListCurrentBooks'
import ListWantedBooks from './ListWantedBooks'
import ListReadableBooks from './ListReadableBooks'
import SearchBooks from './SearchBooks'
import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'
import * as BooksAPI from './utils/BooksAPI'


class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books:[],
    shelves:{}


  }

  componentDidMount() {
    BooksAPI.getAll()
    .then((books) => {
      this.setState(() => ({
        books
      }))
    })
  }

  updateShelf = (book, shelf) => {
    BooksAPI.update(book, shelf)
    .then((shelves) => {
      this.setState(() => ({
        shelves
      }))
  })
}
componentDidUpdate(prevProps,prevState) {
  // Typical usage (don't forget to compare props):
  console.log('current', this.state.shelves, 'prev', prevState.shelves)
  if (this.state.shelves !== prevState.shelves) {
    BooksAPI.getAll()
    .then((books) => {
      this.setState(() => ({
        books
      }))
    })
  }
}

// not working above ??? updateshelf not triggering rerender

  render() {
  console.log('books', this.state.books, 'shelves', this.state.shelves);

    return (
      <div className="app">

        <Route exact path='/search' render={() => (
          <SearchBooks books={this.state.books} updateShelf={(book,shelf) => {
            this.updateShelf(book,shelf)}}   />
         
          )}/>

          <Route exact path='/' render={({history}) => (
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <div className="list-books-content">
                
                  <div>
                    <ListCurrentBooks books={this.state.books} updateShelf={(book,shelf) => {
                      this.updateShelf(book,shelf) 
                      }} /> 

                    <ListWantedBooks books={this.state.books} updateShelf={(book,shelf) => {
                      this.updateShelf(book,shelf) 
                      }}/>
                    <ListReadableBooks books={this.state.books} updateShelf={(book,shelf) => {
                      this.updateShelf(book,shelf) 
                      }} /> 
                  </div>
                
              </div>
              <div className="open-search">
              <Link to='/search'className="search"><button>Add a book</button></Link>

                
              </div>
            </div>
            )}/>
      </div>
    )
  }
}

export default BooksApp
