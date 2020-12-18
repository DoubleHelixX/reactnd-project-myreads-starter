import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


class ListReadableBooks extends Component {
    static propTypes = {
        
        books: PropTypes.array.isRequired,
        updateShelf: PropTypes.func.isRequired
    }

      
    
    render() {
    const {books } = this.props;



   
    console.log(books);
        return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">Read</h2>
            <div className="bookshelf-books">
            <ol className="books-grid">
                {books.map((book) =>(
                    book.shelf==='read' &&(
                        <li key ={book.id}>
                        <div className="book">
                            <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: `url(${book.imageLinks.thumbnail})` }}>
                            </div> 
                            <div className="book-shelf-changer">
                                <select defaultValue={book.shelf} onChange={(event) => {this.props.updateShelf(book, event.target.value)}}>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                                </select>
                            </div>
                            </div>
                            <div className="book-title">  {book.title}   </div>
                            <div className="book-authors"> {book.authors}  </div>
                        </div>
                        </li>
                    )
                       ))}
            </ol>
            </div>
        </div>
         

            )
    }
}

export default ListReadableBooks


