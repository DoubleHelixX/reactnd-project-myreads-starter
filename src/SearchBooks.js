import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


class SearchBooks extends Component {
    static propTypes = {
        booksFound: PropTypes.shape({
            'id':PropTypes.array,
            'urls': PropTypes.array,
            'titles': PropTypes.array,
            'authors': PropTypes.array
        }),   
        
        moveToShelf: PropTypes.func.isRequired,
        findBooks: PropTypes.func.isRequired,
        affectedShelves : PropTypes.array

    }


    render() {

        const {booksFound, moveToShelf, findBooks, affectedShelves} = this.props;
        let totalUrls = 0;
        let totalTitles = 0;
        let totalAuthors = 0;
        let empty = Object.keys(booksFound).length === 0 ? true : false;

        if (!empty){
            totalUrls = booksFound.urls ? booksFound.urls.length-1 : 0;
            totalTitles = booksFound.titles ? booksFound.titles.length-1: 0;
            totalAuthors = booksFound.authors ? booksFound.authors.length-1: 0;
        }
        
        console.log('booksFound state passed' , booksFound, 'affected shelves state passed', affectedShelves,  'empty', empty);

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
                                onChange={(event) => findBooks(event.target.value)} 

                            />

                        </div>
                        </div>
                        <div className="search-books-results">
                        <ol className="books-grid">
                            {!empty && ( booksFound.id.map((value, key)  =>(
                            
                                <li key ={booksFound.id[key]}>
                                    {/* {console.log( 'dict', booksFound.id, 'key', key , 'value', value)} */}
                                <div className="book">
                                    <div className="book-top">
                                    <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: `url(${key<=totalUrls ? booksFound.urls[key]: '' })` }}>
                                    </div> 
                                    <div className="book-shelf-changer">
                                        <select defaultValue='currentlyReading' onChange={(event) => moveToShelf(affectedShelves[key],{'id': booksFound.id[key], 'url': booksFound.urls[key], 'author': booksFound.authors[key], 'title': booksFound.titles[key]} ,event.target.value)}>
                                        <option value="move" disabled>Move to...</option>
                                        <option value="currentlyReading">Currently Reading</option>
                                        <option value="wantToRead">Want to Read</option>
                                        <option value="read">Read</option>
                                        <option value="none">None</option>
                                        </select>
                                    </div>
                                    </div>
                                    <div className="book-title">  {key<=totalTitles ? booksFound.titles[key] : ''}   </div>
                                    <div className="book-authors"> {key<=totalAuthors ? booksFound.authors[key] : ''}  </div>
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

