import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import * as BooksAPI from './utils/BooksAPI'


class SearchBooks extends Component {
    static propTypes = {
        
        books: PropTypes.array.isRequired,

        updateShelf: PropTypes.func.isRequired

    }
    
    state = {

        query:{},
        shelfQue:[]
    }

    searchBooks = (search) => {
        BooksAPI.search(search)
        .then((query) => {
         let shelQue=[];
         this.setState((currentState) => ({
            shelQue
        }))
        
          this.setState((currentState) => ({
            query
            
          }))
        })
      }
    // getBook = (id) =>{
    //     BooksAPI.get(id)
    //     .then((shelf) => {
    //         this.setState(() => ({
    //             shelf
    //           }))
    //       })
    // }
    componentDidUpdate(prevProps,prevState) {
        // Typical usage (don't forget to compare props):
        console.log('current', this.state.query, 'prev', prevState.query)
        if (this.state.query !== prevState.query) {
            let empty = [];
            this.state.query.map((book)=> {
                BooksAPI.get(book.id)
                .then((info) => {
                this.setState((currentState) => ({
                    shelfQue: currentState.shelfQue.concat(info)
                  }))
              })
        })
      } 
    }
    render() {
        const {query, shelfQue} = this.state;
        let getBook = this.getBook;

        let alreadyOnShelf = (id) =>{
            const {books} = this.props;
            let check = {
                'onShelf': false,
                'shelf' : '',
                'emptyCast' : ''
            };
    
            books.map((book) => {
                if (book.id === id){
                    check.onShelf = true;
                    check.shelf = book.shelf
                }
    
            })
          return check;
            
        };
        

        console.log('QUERY', query, 'shelfQue' , shelfQue);
        return(
            <div className="search-books">
                        <div className="search-books-bar">
                        <Link to='/'>
                        <button className="close-search" >Close</button>

                        </Link>
                        <div className="search-books-input-wrapper">
                            {/*
                            NOTES: The search from BooksAPI is limited to a particular set of search terms.
                            You can find these search terms here:
                            https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                            However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                            you don't find a specific author or title. Every search is limited by search terms.
                            */}
                            <input type="text" className='search-bar' placeholder="Search by title or author"
                                onChange={(event) => this.searchBooks(event.target.value ? event.target.value : '@_____@')} 

                            />

                        </div>
                        </div>
                        <div className="search-books-results">
                        <ol className="books-grid">
                            {Array.isArray(shelfQue) && ( shelfQue.map((book)  =>(
                            
                                <li key ={book.id}>
                                   {alreadyOnShelf(book.id).emptyCast}
                                <div className="book">
                                    <div className="book-top">
                                    <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: `url(${book.imageLinks.thumbnail})` }}>
                                    </div> 
                                    <div className="book-shelf-changer">
                                        <select defaultValue={book.shelf} onChange={(event) => this.props.updateShelf(this.props.updateShelf(book, event.target.value)) }>
                                        <option value="move" disabled>Move to...</option>
                                        <option value="currentlyReading">Currently Reading</option>
                                        <option value="wantToRead">Want to Read</option>
                                        <option value="read">Read</option>
                                        <option value="none">None</option>
                                        </select>
                                    </div>
                                    </div>
                                    <div className="book-title">  {book.titles}   </div>
                                    <div className="book-authors"> {book.authors}  </div>
                                </div>
                                </li>
                            )))}
                        </ol>

                        </div>
                    </div>

        )
    }

}

export default SearchBooks

