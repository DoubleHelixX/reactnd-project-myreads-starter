import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


class SearchBooks extends Component {
    static propTypes = {

        updateShelf: PropTypes.func.isRequired

    }
    
    state = {

        query:''
    }

    searchBooks = (query) => {
        BooksAPI.search(query)
        .then((books) => {
          this.setState(() => ({
            query
          }))
        })
      }

    render() {
        const {query} = this.state;
        const {updateShelf} = this.props;
        
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
                                onChange={(event) => this.searchBooks(event.target.value)} 

                            />

                        </div>
                        </div>
                        <div className="search-books-results">
                        <ol className="books-grid">
                            {query && ( query.id.map((value, key)  =>(
                            
                                <li key ={query.id[key]}>
                                    {/* {console.log( 'dict', query.id, 'key', key , 'value', value)} */}
                                <div className="book">
                                    <div className="book-top">
                                    <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: `url(${query.urls[key]})` }}>
                                    </div> 
                                    <div className="book-shelf-changer">
                                        <select defaultValue={query.shelves[key]} onChange={(event) => updateShelf(query[key],event.target.value) }>
                                        <option value="move" disabled>Move to...</option>
                                        <option value="currentlyReading">Currently Reading</option>
                                        <option value="wantToRead">Want to Read</option>
                                        <option value="read">Read</option>
                                        <option value="none">None</option>
                                        </select>
                                    </div>
                                    </div>
                                    <div className="book-title">  {query.titles[key]}   </div>
                                    <div className="book-authors"> {query.authors[key]}  </div>
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

