import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


class ListWantedBooks extends Component {

    static propTypes = {

        // shelf1: PropTypes.shape({
        //     'id':PropTypes.array.isRequired,
        //     'urls': PropTypes.array.isRequired,
        //     'titles': PropTypes.array.isRequired,
        //     'authors': PropTypes.array.isRequired
        // }),

        shelf2: PropTypes.shape({
            'id':PropTypes.array.isRequired,
            'urls': PropTypes.array.isRequired,
            'titles': PropTypes.array.isRequired,
            'authors': PropTypes.array.isRequired,
            'shelf' : PropTypes.string.isRequired

        }),
        // shelf3: PropTypes.shape({
        //     'id':PropTypes.array.isRequired,
        //     'urls': PropTypes.array.isRequired,
        //     'titles': PropTypes.array.isRequired,
        //     'authors': PropTypes.array.isRequired
        // }),
        // none: PropTypes.shape({
        //     'id':PropTypes.array.isRequired,
        //     'urls': PropTypes.array.isRequired,
        //     'titles': PropTypes.array.isRequired,
        //     'authors': PropTypes.array.isRequired
        // })
        moveToShelf: PropTypes.func.isRequired


      }

    render() {
        const {shelf2,moveToShelf} = this.props
 
        let prevKey='';
        const titles_length= shelf2.titles.length;
        const authors_length= shelf2.authors.length;
        const urls_length= shelf2.urls.length;



        let x = Object.keys(shelf2).map((key, index)=> {
            if (index <= 0)
                prevKey= key;
            else if (index!==4) 
            {
                if (shelf2[key].length > shelf2[prevKey].length)
                    prevKey= key;
            }
            return 0;
        })


        console.log(x, prevKey, titles_length, authors_length, urls_length);
        return (
            <div className="bookshelf">
            <h2 className="bookshelf-title">Want to Read</h2>
            <div className="bookshelf-books">
            <ol className="books-grid">
                {shelf2[prevKey].map((name,i) =>(
                  
                    <li  key={shelf2.id[i]}>
                       
                        <div className="book">
                            <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${i<=urls_length-1 ? shelf2.urls[i]: '' })` }}></div>
                            <div className="book-shelf-changer">
                                <select defaultValue={shelf2.shelf} onChange={(event) => moveToShelf(shelf2,{'id': shelf2.id[i], 'url': shelf2.urls[i], 'author': shelf2.authors[i], 'title': shelf2.titles[i], 'shelf' : event.target.value} )}>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                                </select>
                            </div>
                            </div>
                            <div className="book-title"> {i<=titles_length-1 ? shelf2.titles[i]: ''}   </div>
                            <div className="book-authors"> {i<=authors_length-1 ? shelf2.authors[i] : ''}  </div>
                        </div>
                    </li>
                    
                ))}
              
            </ol>
            </div>
            </div>
        )
    }
}

export default ListWantedBooks
