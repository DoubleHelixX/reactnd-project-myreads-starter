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
            'shelf': ['tempHolder'],
            'id' :['tempHolder']
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
                            
                            <div className = "results"  style={{padding: "5px", display: 'block', width:"100%", textAlign: "center", verticalAlign: "middle", lineHeight: "90px", fontWeight: "bolder"     }}> 
                            <div className = "search-options">
                                <div className="dropdown">
                                    <button className="dropbtn">Filter</button>
                                    <div className="dropdown-content">
                                        <li onClick= {(event) => this.searchBooks(event.target.innerText ? event.target.innerText : '@_____@')}>Android</li> 
                                        <li onClick= {(event) => this.searchBooks(event.target.innerText ? event.target.innerText : '@_____@')}> Art</li> 
                                        <li onClick= {(event) => this.searchBooks(event.target.innerText ? event.target.innerText : '@_____@')}>Artificial Intelligence</li> 
                                        <li onClick= {(event) => this.searchBooks(event.target.innerText ? event.target.innerText : '@_____@')}>Astronomy</li> 
                                        <li onClick= {(event) => this.searchBooks(event.target.innerText ? event.target.innerText : '@_____@')}>Austen</li> 
                                        <li onClick= {(event) => this.searchBooks(event.target.innerText ? event.target.innerText : '@_____@')}>Baseball</li> 
                                        <li onClick= {(event) => this.searchBooks(event.target.innerText ? event.target.innerText : '@_____@')}>Basketball</li> 
                                        <li onClick= {(event) => this.searchBooks(event.target.innerText ? event.target.innerText : '@_____@')}>Bhagat</li> 
                                        <li onClick= {(event) => this.searchBooks(event.target.innerText ? event.target.innerText : '@_____@')}>Biography</li> 
                                        <li onClick= {(event) => this.searchBooks(event.target.innerText ? event.target.innerText : '@_____@')}>Brief</li> 
                                        <li onClick= {(event) => this.searchBooks(event.target.innerText ? event.target.innerText : '@_____@')}>Business</li> 
                                        <li onClick= {(event) => this.searchBooks(event.target.innerText ? event.target.innerText : '@_____@')}>Camus</li> 
                                        <li onClick= {(event) => this.searchBooks(event.target.innerText ? event.target.innerText : '@_____@')}>Cervantes</li> 
                                        <li onClick= {(event) => this.searchBooks(event.target.innerText ? event.target.innerText : '@_____@')}>Christie</li> 
                                        <li onClick= {(event) => this.searchBooks(event.target.innerText ? event.target.innerText : '@_____@')}>Classics</li> 
                                        <li onClick= {(event) => this.searchBooks(event.target.innerText ? event.target.innerText : '@_____@')}>Comics</li> 
                                        <li onClick= {(event) => this.searchBooks(event.target.innerText ? event.target.innerText : '@_____@')}>Cook</li> 
                                        <li onClick= {(event) => this.searchBooks(event.target.innerText ? event.target.innerText : '@_____@')}>Android</li> 
                                        <li onClick= {(event) => this.searchBooks(event.target.innerText ? event.target.innerText : '@_____@')}> Art</li> 
                                        <li onClick= {(event) => this.searchBooks(event.target.innerText ? event.target.innerText : '@_____@')}>Artificial Intelligence</li> 
                                        <li onClick= {(event) => this.searchBooks(event.target.innerText ? event.target.innerText : '@_____@')}>Astronomy</li> 
                                        <li onClick= {(event) => this.searchBooks(event.target.innerText ? event.target.innerText : '@_____@')}>Austen</li> 
                                        <li onClick= {(event) => this.searchBooks(event.target.innerText ? event.target.innerText : '@_____@')}>Baseball</li> 
                                        <li onClick= {(event) => this.searchBooks(event.target.innerText ? event.target.innerText : '@_____@')}>Basketball</li> 
                                        <li onClick= {(event) => this.searchBooks(event.target.innerText ? event.target.innerText : '@_____@')}>Bhagat</li> 
                                        <li onClick= {(event) => this.searchBooks(event.target.innerText ? event.target.innerText : '@_____@')}>Biography</li> 
                                        <li onClick= {(event) => this.searchBooks(event.target.innerText ? event.target.innerText : '@_____@')}>Brief</li> 
                                        <li onClick= {(event) => this.searchBooks(event.target.innerText ? event.target.innerText : '@_____@')}>Business</li> 
                                        <li onClick= {(event) => this.searchBooks(event.target.innerText ? event.target.innerText : '@_____@')}>Camus</li> 
                                        <li onClick= {(event) => this.searchBooks(event.target.innerText ? event.target.innerText : '@_____@')}>Cervantes</li> 
                                        <li onClick= {(event) => this.searchBooks(event.target.innerText ? event.target.innerText : '@_____@')}>Christie</li> 
                                        <li onClick= {(event) => this.searchBooks(event.target.innerText ? event.target.innerText : '@_____@')}>Classics</li> 
                                        <li onClick= {(event) => this.searchBooks(event.target.innerText ? event.target.innerText : '@_____@')}>Comics</li> 
                                        <li onClick= {(event) => this.searchBooks(event.target.innerText ? event.target.innerText : '@_____@')}>Cook</li> 
                                        <li onClick= {(event) => this.searchBooks(event.target.innerText ? event.target.innerText : '@_____@')}>Cricket</li> 
                                        <li onClick= {(event) => this.searchBooks(event.target.innerText ? event.target.innerText : '@_____@')}>Cycling</li> 
                                        <li onClick= {(event) => this.searchBooks(event.target.innerText ? event.target.innerText : '@_____@')}>Desai</li>
                                        <li onClick= {(event) => this.searchBooks(event.target.innerText ? event.target.innerText : '@_____@')}>Design</li>
                                        <li onClick= {(event) => this.searchBooks(event.target.innerText ? event.target.innerText : '@_____@')}>Development</li>
                                        <li onClick= {(event) => this.searchBooks(event.target.innerText ? event.target.innerText : '@_____@')}>Digital</li>
                                        <li onClick= {(event) => this.searchBooks(event.target.innerText ? event.target.innerText : '@_____@')}>Marketing</li>
                                        <li onClick= {(event) => this.searchBooks(event.target.innerText ? event.target.innerText : '@_____@')}>Drama</li>
                                        <li onClick= {(event) => this.searchBooks(event.target.innerText ? event.target.innerText : '@_____@')}>Drawing</li>
                                        <li onClick= {(event) => this.searchBooks(event.target.innerText ? event.target.innerText : '@_____@')}>Dumas</li>
                                        <li onClick= {(event) => this.searchBooks(event.target.innerText ? event.target.innerText : '@_____@')}>Education</li>
                                        <li onClick= {(event) => this.searchBooks(event.target.innerText ? event.target.innerText : '@_____@')}>Everything</li>
                                        <li onClick= {(event) => this.searchBooks(event.target.innerText ? event.target.innerText : '@_____@')}>Fantasy</li>
                                        <li onClick= {(event) => this.searchBooks(event.target.innerText ? event.target.innerText : '@_____@')}>Film</li>
                                        <li onClick= {(event) => this.searchBooks(event.target.innerText ? event.target.innerText : '@_____@')}>Finance</li>
                                        <li onClick= {(event) => this.searchBooks(event.target.innerText ? event.target.innerText : '@_____@')}>First</li>
                                        <li onClick= {(event) => this.searchBooks(event.target.innerText ? event.target.innerText : '@_____@')}>Fitness</li>
                                        <li onClick= {(event) => this.searchBooks(event.target.innerText ? event.target.innerText : '@_____@')}>Football</li>
                                        <li onClick= {(event) => this.searchBooks(event.target.innerText ? event.target.innerText : '@_____@')}>Future</li>
                                        <li onClick= {(event) => this.searchBooks(event.target.innerText ? event.target.innerText : '@_____@')}>Games</li>
                                        <li onClick= {(event) => this.searchBooks(event.target.innerText ? event.target.innerText : '@_____@')}>Gandhi</li>
                                        <li onClick= {(event) => this.searchBooks(event.target.innerText ? event.target.innerText : '@_____@')}>Homer</li>
                                        <li onClick= {(event) => this.searchBooks(event.target.innerText ? event.target.innerText : '@_____@')}>Horror</li>
                                        <li onClick= {(event) => this.searchBooks(event.target.innerText ? event.target.innerText : '@_____@')}>Hugo</li>
                                        <li onClick= {(event) => this.searchBooks(event.target.innerText ? event.target.innerText : '@_____@')}>Ibsen</li>
                                        <li onClick= {(event) => this.searchBooks(event.target.innerText ? event.target.innerText : '@_____@')}>Journey</li>
                                        <li onClick= {(event) => this.searchBooks(event.target.innerText ? event.target.innerText : '@_____@')}>Kafka</li>
                                        <li onClick= {(event) => this.searchBooks(event.target.innerText ? event.target.innerText : '@_____@')}>King</li>
                                        <li onClick= {(event) => this.searchBooks(event.target.innerText ? event.target.innerText : '@_____@')}>Lahiri</li>
                                        <li onClick= {(event) => this.searchBooks(event.target.innerText ? event.target.innerText : '@_____@')}>Larsson</li>
                                        <li onClick= {(event) => this.searchBooks(event.target.innerText ? event.target.innerText : '@_____@')}>Learn</li>
                                        <li onClick= {(event) => this.searchBooks(event.target.innerText ? event.target.innerText : '@_____@')}>Literary</li>
                                        <li onClick= {(event) => this.searchBooks(event.target.innerText ? event.target.innerText : '@_____@')}>Make</li>
                                        <li onClick= {(event) => this.searchBooks(event.target.innerText ? event.target.innerText : '@_____@')}>Manage</li>
                                        <li onClick= {(event) => this.searchBooks(event.target.innerText ? event.target.innerText : '@_____@')}>Marquez</li>
                                        <li onClick= {(event) => this.searchBooks(event.target.innerText ? event.target.innerText : '@_____@')}>Money</li>
                                        <li onClick= {(event) => this.searchBooks(event.target.innerText ? event.target.innerText : '@_____@')}>Mystery</li>
                                        <li onClick= {(event) => this.searchBooks(event.target.innerText ? event.target.innerText : '@_____@')}>Negotiate</li>
                                        <li onClick= {(event) => this.searchBooks(event.target.innerText ? event.target.innerText : '@_____@')}>Painting</li>
                                        <li onClick= {(event) => this.searchBooks(event.target.innerText ? event.target.innerText : '@_____@')}>Philosophy</li>
                                        <li onClick= {(event) => this.searchBooks(event.target.innerText ? event.target.innerText : '@_____@')}>Photography</li>
                                        <li onClick= {(event) => this.searchBooks(event.target.innerText ? event.target.innerText : '@_____@')}>Poetry</li>
                                        <li onClick= {(event) => this.searchBooks(event.target.innerText ? event.target.innerText : '@_____@')}>Production</li>
                                        <li onClick= {(event) => this.searchBooks(event.target.innerText ? event.target.innerText : '@_____@')}>Programming</li>
                                        <li onClick= {(event) => this.searchBooks(event.target.innerText ? event.target.innerText : '@_____@')}>React</li>
                                        <li onClick= {(event) => this.searchBooks(event.target.innerText ? event.target.innerText : '@_____@')}>Redux</li>
                                        <li onClick= {(event) => this.searchBooks(event.target.innerText ? event.target.innerText : '@_____@')}>River</li>
                                        <li onClick= {(event) => this.searchBooks(event.target.innerText ? event.target.innerText : '@_____@')}>Robotics</li>
                                        <li onClick= {(event) => this.searchBooks(event.target.innerText ? event.target.innerText : '@_____@')}>Rowling</li>
                                        <li onClick= {(event) => this.searchBooks(event.target.innerText ? event.target.innerText : '@_____@')}>Satire</li>
                                        <li onClick= {(event) => this.searchBooks(event.target.innerText ? event.target.innerText : '@_____@')}>Science</li>
                                        <li onClick= {(event) => this.searchBooks(event.target.innerText ? event.target.innerText : '@_____@')}>Fiction</li>
                                        <li onClick= {(event) => this.searchBooks(event.target.innerText ? event.target.innerText : '@_____@')}>Shakespeare</li>
                                        <li onClick= {(event) => this.searchBooks(event.target.innerText ? event.target.innerText : '@_____@')}>Singh</li>
                                        <li onClick= {(event) => this.searchBooks(event.target.innerText ? event.target.innerText : '@_____@')}>Swimming</li>
                                        <li onClick= {(event) => this.searchBooks(event.target.innerText ? event.target.innerText : '@_____@')}>Tale</li>
                                        <li onClick= {(event) => this.searchBooks(event.target.innerText ? event.target.innerText : '@_____@')}>Thrun</li>
                                        <li onClick= {(event) => this.searchBooks(event.target.innerText ? event.target.innerText : '@_____@')}>Time</li>
                                        <li onClick= {(event) => this.searchBooks(event.target.innerText ? event.target.innerText : '@_____@')}>Tolstoy</li>
                                        <li onClick= {(event) => this.searchBooks(event.target.innerText ? event.target.innerText : '@_____@')}>Travel</li>
                                        <li onClick= {(event) => this.searchBooks(event.target.innerText ? event.target.innerText : '@_____@')}>Ultimate</li>
                                        <li onClick= {(event) => this.searchBooks(event.target.innerText ? event.target.innerText : '@_____@')}>Virtual</li>
                                        <li onClick= {(event) => this.searchBooks(event.target.innerText ? event.target.innerText : '@_____@')}>Reality</li>
                                        <li onClick= {(event) => this.searchBooks(event.target.innerText ? event.target.innerText : '@_____@')}>Web</li>
                                        <li onClick= {(event) => this.searchBooks(event.target.innerText ? event.target.innerText : '@_____@')}>Development</li>
                                        <li onClick= {(event) => this.searchBooks(event.target.innerText ? event.target.innerText : '@_____@')}>iOS</li>
                                    </div>
                                </div>

                            </div>
                            {query.length === undefined ? 'Search Results: 0 books' : `Search Results: ${query.length} books`}
                            
                            </div>
                            
                            {query.length === 1 && ( 
                                <li key ={query.id}>
                                    <div className="book">
                                        <div className="book-top">
                                        <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: `url(${query.hasOwnProperty('imageLinks') ? query.imageLinks.hasOwnProperty('smallThumbnail') ? query.imageLinks.smallThumbnail :  query.imageLinks.hasOwnProperty('thumbnail') ? query.imageLinks.thumbnail: '' : '' })` }}>
                                        </div> 
                                        <div className="book-shelf-changer">
                                            <select defaultValue={inShelf.id.includes(query.id) ? inShelf.shelf[inShelf.id.indexOf(query.id)]: 'none'}  onChange={(event) => this.props.updateShelf(query, event.target.value) }>
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
                                            <select defaultValue={ inShelf.id.includes(book.id) ? inShelf.shelf[inShelf.id.indexOf(book.id)]: 'none'}  onChange={(event) => this.props.updateShelf(book, event.target.value) }>
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

