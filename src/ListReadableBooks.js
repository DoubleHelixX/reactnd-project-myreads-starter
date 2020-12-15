import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


class ListReadableBooks extends Component {
    static propTypes = {
        shelf3: PropTypes.array.isRequired
      }
    
    render() {
    const {shelf3} = this.props

        return (
            <div className="bookshelf">
            <h2 className="bookshelf-title">Read</h2>
            <div className="bookshelf-books">
            <ol className="books-grid">
            {Object.keys(shelf3).map((key, index)=>(
                <li>
                <div className="book">
                    <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url(${shelf3.urls[index]})` }}></div>
                    <div className="book-shelf-changer">
                        <select>
                        <option value="move" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                        </select>
                    </div>
                    </div>
                    <div className="book-title"> {shelf3.titles[index]}    </div>
                    <div className="book-authors">  {shelf3.authors[index]} </div>
                </div>
                </li>

                ))}
               
            </ol>
            </div>
            </div>
        )
    }
}

export default ListReadableBooks


