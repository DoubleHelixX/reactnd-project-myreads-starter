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

        query:[],
        shelf:[]
        
    }


    // getBookShelf = (id) =>{
    //     let shelf ='';
    //     setTimeout(
    //         BooksAPI.get(id)
    //         .then((book) => {
    //         console.log('AAA', book)
    //         shelf= book;
    //         }),100000);

    //     console.log('haha', shelf);
    //     return shelf;
    // }

    searchBooks = (search) => {
        if (search.trim().length)
            BooksAPI.search(search)
            .then((query) => {
            this.setState((currentState) => ({
                query
                
            }))
            })
            else{
                let query =[]
                this.setState(() => ({
                    query
                    
                }))
            }
           
           
        

      }
  
    render() {
        const {query} = this.state;
        const {books} = this.props;
        let inShelf = {
            'shelf': [],
            'id' :[]
        };
        books.map((b) =>{ 
            if (query.length>1)
            {
                query.map((book) => {
                if (b.id ==book.id) {
                    inShelf.shelf.push(b.shelf); 
                    inShelf.id.push(b.id);
                }});
            }
            else
                if (b.id ==query.id) {
                    inShelf.shelf.push(b.shelf); 
                    inShelf.id.push(b.id);
                }
            
            });
            
        

        console.log('ehh',  query);
      
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
                            

                            {query.length === 1 && ( 
                                <li key ={query.id}>
                                    <div className="book">
                                        <div className="book-top">
                                        <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: `url(${query.hasOwnProperty('imageLinks') ? query.imageLinks.hasOwnProperty('smallThumbnail') ? query.imageLinks.smallThumbnail :  query.imageLinks.hasOwnProperty('thumbnail') ? query.imageLinks.thumbnail: '' : '' })` }}>
                                        </div> 
                                        <div className="book-shelf-changer">
                                            <select defaultValue={ inShelf.id ? inShelf.id.includes(query.id) ? inShelf.shelf[inShelf.id.indexOf(query.id)]: 'none': 'none'}  onChange={(event) => this.props.updateShelf(query, event.target.value) }>
                                            <option value="move" disabled>Move to...</option>
                                            <option value="currentlyReading">Currently Reading</option>
                                            <option value="wantToRead">Want to Read</option>
                                            <option value="read">Read</option>
                                            <option value="none">None</option>
                                            </select>
                                        </div>
                                        </div>
                                        <div className="book-title">  {query.title || "'NO TITLE'"}   </div>
                                        <div className="book-authors"> {query.authors || "'NO AUTHORS'"}  </div>
                                    </div>
                                </li>
                            )}

                            {query.length > 1 && ( query.map((book)  =>(
                                <li key ={book.id}>
                                    <div className="book">
                                        <div className="book-top">
                                        <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: `url(${book.hasOwnProperty('imageLinks') ? book.imageLinks.hasOwnProperty('smallThumbnail') ? book.imageLinks.smallThumbnail :  book.imageLinks.hasOwnProperty('thumbnail') ? book.imageLinks.thumbnail: '' : '' })` }}>
                                        </div> 
                                        <div className="book-shelf-changer">
                                            <select defaultValue={ inShelf.id ? inShelf.id.includes(book.id) ? inShelf.shelf[inShelf.id.indexOf(book.id)]: 'none': 'none'}  onChange={(event) => this.props.updateShelf(book, event.target.value) }>
                                            <option value="move" disabled>Move to...</option>
                                            <option value="currentlyReading">Currently Reading</option>
                                            <option value="wantToRead">Want to Read</option>
                                            <option value="read">Read</option>
                                            <option value="none">None</option>
                                            </select>
                                        </div>
                                        </div>
                                        <div className="book-title">  {book.title || "'NO TITLE'"}   </div>
                                        <div className="book-authors"> {book.authors || "'NO AUTHORS'"}  </div>
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

