import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


class ListCurrentBooks extends Component {
    static propTypes = {
        
        shelf1: PropTypes.shape({
            'id':PropTypes.array.isRequired,
            'urls': PropTypes.array.isRequired,
            'titles': PropTypes.array.isRequired,
            'authors': PropTypes.array.isRequired
        }),
    
        // shelf2: PropTypes.shape({
        //     'id':PropTypes.array.isRequired,
        //     'urls': PropTypes.array.isRequired,
        //     'titles': PropTypes.array.isRequired,
        //     'authors': PropTypes.array.isRequired
        // }),
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
        // }),
    
    
        moveToShelf: PropTypes.func.isRequired
    }

      
    
    render() {
    const {shelf1, moveToShelf} = this.props

    let prevKey='';
    const titles_length= shelf1.titles.length;
    const authors_length= shelf1.authors.length;
    const urls_length= shelf1.urls.length;



    Object.keys(shelf1).map((key, index)=> {
        if (index <= 0)
            prevKey= key;
        else 
        {
            if (shelf1[key].length > shelf1[prevKey].length)
                prevKey= key;
        }
        return '';
    })
    //moveToShelf(1,2,3);
        return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">Currently Reading</h2>
            <div className="bookshelf-books">
            <ol className="books-grid">
                {shelf1[prevKey].map((name,i) =>(
                    <li key ={shelf1.id[i]}>
                    <div className="book">
                        <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: `url(${i<=urls_length-1 ? shelf1.urls[i]: '' })` }}>
                        </div> 
                        <div className="book-shelf-changer">
                            <select defaultValue='currentlyReading' onChange={(event) => moveToShelf(shelf1,{'id': shelf1.id[i], 'url': shelf1.urls[i], 'author': shelf1.authors[i], 'title': shelf1.titles[i]} ,event.target.value)}>
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                            </select>
                        </div>
                        </div>
                        <div className="book-title">  {i<=titles_length-1 ? shelf1.titles[i] : ''}   </div>
                        <div className="book-authors"> {i<=authors_length-1 ? shelf1.authors[i] : ''}  </div>
                    </div>
                    </li>
                       ))}
            </ol>
            </div>
        </div>
         

            )
    }
}

export default ListCurrentBooks




