import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


class ListReadableBooks extends Component {
    static propTypes = {

        // shelf1: PropTypes.shape({
        //     'id':PropTypes.array.isRequired,
        //     'urls': PropTypes.array.isRequired,
        //     'titles': PropTypes.array.isRequired,
        //     'authors': PropTypes.array.isRequired
        // }),

        // shelf2: PropTypes.shape({
        //     'id':PropTypes.array.isRequired,
        //     'urls': PropTypes.array.isRequired,
        //     'titles': PropTypes.array.isRequired,
        //     'authors': PropTypes.array.isRequired
        // }),
        shelf3: PropTypes.shape({
            'id':PropTypes.array.isRequired,
            'urls': PropTypes.array.isRequired,
            'titles': PropTypes.array.isRequired,
            'authors': PropTypes.array.isRequired,
            'shelf' : PropTypes.string.isRequired

        }),
        // none: PropTypes.shape({
        //     'id':PropTypes.array.isRequired,
        //     'urls': PropTypes.array.isRequired,
        //     'titles': PropTypes.array.isRequired,
        //     'authors': PropTypes.array.isRequired
        // })
        moveToShelf: PropTypes.func.isRequired

      }

      
    
    render() {
    const {shelf3 ,moveToShelf} = this.props

    let prevKey='';
    const titles_length= shelf3.titles.length;
    const authors_length= shelf3.authors.length;
    const urls_length= shelf3.urls.length;



    Object.keys(shelf3).map((key, index)=> {
        if (index <= 0)
            prevKey= key;
        else if (index!==4) 
        {
            if (shelf3[key].length > shelf3[prevKey].length)
                prevKey= key;
        }
        return '';
    })

        return (
            <div className="bookshelf">
            <h2 className="bookshelf-title">Read</h2>
            <div className="bookshelf-books">
            <ol className="books-grid">
            {Object.keys(shelf3[prevKey]).map((key, i)=>(
                <li key={shelf3.id[i]}>
                    <div className="book">
                        <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url(${i<=urls_length-1 ? shelf3.urls[i] : ''})` }}></div>
                        <div className="book-shelf-changer">
                            <select defaultValue={shelf3.shelf} onChange={(event) => moveToShelf(shelf3,{'id': shelf3.id[i], 'url': shelf3.urls[i], 'author': shelf3.authors[i], 'title': shelf3.titles[i], 'shelf': event.target.value})}>
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                            </select>
                        </div>
                        </div>
                        <div className="book-title"> {i<=titles_length-1 ? shelf3.titles[i] : ''}    </div>
                        <div className="book-authors">  {i<=authors_length-1 ? shelf3.authors[i] : ''} </div>
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


