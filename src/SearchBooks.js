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
        let currentShelf= 'none';
        let inShelf = {
            'shelf': ['none'],
            'id' :['none']
        };
        let searchableTerms = ['Android', 'Art', 'Artificial Intelligence', 'Astronomy', 'Austen', 'Baseball', 'Basketball', 'Bhagat', 'Biography', 'Brief', 'Business', 'Camus', 'Cervantes', 'Christie', 'Classics', 'Comics', 'Cook', 'Cricket', 'Cycling', 'Desai', 'Design', 'Development', 'Digital Marketing', 'Drama', 'Drawing', 'Dumas', 'Education', 'Everything', 'Fantasy', 'Film', 'Finance', 'First', 'Fitness', 'Football', 'Future', 'Games', 'Gandhi', 'Homer', 'Horror', 'Hugo', 'Ibsen', 'Journey', 'Kafka', 'King', 'Lahiri', 'Larsson', 'Learn', 'Literary Fiction', 'Make', 'Manage', 'Marquez', 'Money', 'Mystery', 'Negotiate', 'Painting', 'Philosophy', 'Photography', 'Poetry', 'Production', 'Programming', 'React', 'Redux', 'River', 'Robotics', 'Rowling', 'Satire', 'Science Fiction', 'Shakespeare', 'Singh', 'Swimming', 'Tale', 'Thrun', 'Time', 'Tolstoy', 'Travel', 'Ultimate', 'Virtual Reality', 'Web Development', 'iOS'
    ];
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
            
        let getShelf = (id) =>{

            currentShelf = inShelf.shelf[inShelf.id.indexOf(id)];
            return currentShelf;
        };

              
        let setShelf = () =>{

            currentShelf = 'none';
            return currentShelf;
        };

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
                                        {searchableTerms.map((genre) => (
                                        <li onClick= {(event) => this.searchBooks(event.target.innerText ? event.target.innerText : '@_____@')}> {genre}</li> 
                                        ))}
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
                                            <select id = 'book-shelf-selector' defaultValue={inShelf.id.includes(query.id) ? getShelf(query.id): setShelf()}  onChange={(event) => this.props.updateShelf(query, event.target.value) }>
                                            <option value="move" disabled>  Move to... </option>
                                            <option value="currentlyReading">{ currentShelf ==='currentlyReading' ? '📚Currently Reading': 'Currently Reading' }</option>
                                            <option value="wantToRead">{ currentShelf ==='wantToRead' ? '📚Want to Read' : 'Want to Read'}</option>
                                            <option value="read">{ currentShelf ==='read' ? '📚Read' : 'Read'}</option>
                                            <option value="none">{ currentShelf === 'none' ? '🥺None' : 'None'} </option>
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
                                            <select defaultValue={ inShelf.id.includes(book.id) ? getShelf(book.id): setShelf()}  onChange={(event) => this.props.updateShelf(book, event.target.value) }>
                                            <option value="move" disabled>Move to...</option>
                                            <option value="currentlyReading">{ currentShelf ==='currentlyReading' ? '📚Currently Reading': 'Currently Reading' }</option>
                                            <option value="wantToRead">{ currentShelf ==='wantToRead' ? '📚Want to Read' : 'Want to Read'}</option>
                                            <option value="read">{ currentShelf ==='read' ? '📚Read' : 'Read'}</option>
                                            <option value="none">{ currentShelf === 'none' ? '🥺 None' : 'None'} </option>
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

