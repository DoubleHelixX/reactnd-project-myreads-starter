import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


class SearchBooks extends Component {
    static propTypes = {
        shelf1: PropTypes.shape({
            'id':PropTypes.array.isRequired,
            'urls': PropTypes.array.isRequired,
            'titles': PropTypes.array.isRequired,
            'authors': PropTypes.array.isRequired
        }),
        
        shelf2: PropTypes.shape({
            'id':PropTypes.array.isRequired,
            'urls': PropTypes.array.isRequired,
            'titles': PropTypes.array.isRequired,
            'authors': PropTypes.array.isRequired
        }),
        
        shelf3: PropTypes.shape({
            'id':PropTypes.array.isRequired,
            'urls': PropTypes.array.isRequired,
            'titles': PropTypes.array.isRequired,
            'authors': PropTypes.array.isRequired
        }),
        
        none: PropTypes.shape({
            'id':PropTypes.array.isRequired,
            'urls': PropTypes.array.isRequired,
            'titles': PropTypes.array.isRequired,
            'authors': PropTypes.array.isRequired
        }),
        //affectedShelves.push(book)
        
        moveToShelf: PropTypes.func.isRequired
    }
    state = {
        booksFound: {
        'id' : [],
        'urls': [],
        'titles': [],
        'authors': []
    }}
    

    // console.log(booksFound);
    findBooks (value) => {
        const {shelf1, shelf2, shelf3, none, moveToShelf} = this.props || {};
        let query=[].concat(shelf1, shelf2, shelf3, none);
        let affectedShelves = [];
        
        const {booksFound} = this.state || {};
        const totalIds = booksFound.id ? booksFound.urls.length : 0;
        const totalUrls = booksFound.urls ? booksFound.urls.length : 0;
        const totalTitles = booksFound.titles ? booksFound.titles.length: 0;
        const totalAuthors = booksFound.authors ? booksFound.authors.length: 0;
        let matchedSearch = false;
    
        let bookQue = {
            'id' : [],
            'urls': [],
            'titles': [],
            'authors': []
            };
        let i =0;
        query.filter((book) =>{
            console.log('BOOK', book.titles);

            book.titles.map((title, index) => {
                if (title.includes(value)){
                    matchedSearch = true;
              
                    bookQue.id.push(book.id[index]);
                    bookQue.urls.push(book.urls[index]);
                    bookQue.authors.push(book.authors[index]);
                    bookQue.titles.push(book.titles[index]);
                    affectedShelves.push(book);
                }
            })
            if (!matchedSearch){
                book.authors.map((author, index) => {
                    if (author.includes(value)){
                        
                        bookQue.id.push(book.id[index]);
                        bookQue.urls.push(book.urls[index]);
                        bookQue.authors.push(book.authors[index]);
                        bookQue.titles.push(book.titles[index]);
                        affectedShelves.push(book);

                    }
                })
            }
            console.log(i++);
            matchedSearch=false
        });
        
        this.setState((currentState) => ({
            booksFound: {
                'id' :  currentState.booksFound.id.splice(0, (totalIds-1)).concat(bookQue.id),
                'urls': currentState.booksFound.urls.splice(0, (totalUrls-1)).concat(bookQue.urls),
                'titles': currentState.booksFound.authors.splice(0, (totalTitles-1)).concat(bookQue.titles),
                'authors': currentState.booksFound.titles.splice(0, (totalAuthors-1)).concat(bookQue.authors)
        }}));
        
    }

    render() {

       
    
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
                                onKeyPress={(event) => findBooks(event.target.value)} 

                            />

                        </div>
                        </div>
                        <div className="search-books-results">
                        <ol className="books-grid">
                            {booksFound.id && ( booksFound.id.map((name,i) =>(
                                <li key ={booksFound.id[i]}>
                                <div className="book">
                                    <div className="book-top">
                                    <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: `url(${i<=totalUrls-1 ? booksFound.urls[i]: '' })` }}>
                                    </div> 
                                    <div className="book-shelf-changer">
                                        <select defaultValue='currentlyReading' onChange={(event) => moveToShelf(affectedShelves[i],{'id': booksFound.id[i], 'url': booksFound.urls[i], 'author': booksFound.authors[i], 'title': booksFound.titles[i]} ,event.target.value)}>
                                        <option value="move" disabled>Move to...</option>
                                        <option value="currentlyReading">Currently Reading</option>
                                        <option value="wantToRead">Want to Read</option>
                                        <option value="read">Read</option>
                                        <option value="none">None</option>
                                        </select>
                                    </div>
                                    </div>
                                    <div className="book-title">  {i<=totalTitles-1 ? booksFound.titles[i] : ''}   </div>
                                    <div className="book-authors"> {i<=totalAuthors-1 ? booksFound.authors[i] : ''}  </div>
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

