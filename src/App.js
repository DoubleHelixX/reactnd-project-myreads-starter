import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import ListCurrentBooks from './ListCurrentBooks'
import ListWantedBooks from './ListWantedBooks'
import ListReadableBooks from './ListReadableBooks'
import SearchBooks from './SearchBooks'
import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'
import * as BooksAPI from './utils/BooksAPI'


class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books:[]


  }

  componentDidMount() {
    BooksAPI.getAll()
    .then((books) => {
      this.setState(() => ({
        books
      }))
    })
  }

  updateShelf = (book, shelf) => {
    BooksAPI.update(book, shelf)
    .then((resolve) => {
      console.log(resolve)
    })
  }


  // moveToShelf = (from, fromData) => {
  //   const to = fromData.shelf;

  //   console.log('hereeee', from, fromData,  to);

  //   if (from === this.state.shelf1){
  //     this.setState((currentState) => ({
        
  //       shelf1 : { 
  //         id: currentState.shelf1.id.filter((c) => {
  //         return c !== fromData.id;
  //         }),
  //         urls : currentState.shelf1.urls.filter((c) => {
  //           return c !== fromData.url;
  //           }),
  //         authors : currentState.shelf1.authors.filter((c) => {
  //           return c !== fromData.author;
  //           }),
  //         titles : currentState.shelf1.titles.filter((c) => {
  //           return c !== fromData.title;
  //           })}
  
  //       }));
  //   }
  //   else if (from === this.state.shelf2){
  //     this.setState((currentState) => ({
       
  //         shelf2 : { 
  //           id: currentState.shelf2.id.filter((c) => {
  //           return c !== fromData.id;
  //           }),
  //           urls : currentState.shelf2.urls.filter((c) => {
  //             return c !== fromData.url;
  //             }),
  //           authors : currentState.shelf2.authors.filter((c) => {
  //             return c !== fromData.author;
  //             }),
  //           titles : currentState.shelf2.titles.filter((c) => {
  //             return c !== fromData.title;
  //             })
  //         }}));}

  //   else if (from === this.state.shelf3){
  //     this.setState((currentState) => ({
      
  //         shelf3 : { 
  //           id: currentState.shelf3.id.filter((c) => {
  //           return c !== fromData.id;
  //           }),
  //           urls : currentState.shelf3.urls.filter((c) => {
  //             return c !== fromData.url;
  //             }),
  //           authors : currentState.shelf3.authors.filter((c) => {
  //             return c !== fromData.author;
  //             }),
  //           titles : currentState.shelf3.titles.filter((c) => {
  //             return c !== fromData.title;
  //             })
  //         }}));}  

  //   else if (from === this.state.none){
  //     this.setState((currentState) => ({
      
  //         shelf3 : { 
  //           id: currentState.none.id.filter((c) => {
  //           return c !== fromData.id;
  //           }),
  //           urls : currentState.none.urls.filter((c) => {
  //             return c !== fromData.url;
  //             }),
  //           authors : currentState.none.authors.filter((c) => {
  //             return c !== fromData.author;
  //             }),
  //           titles : currentState.none.titles.filter((c) => {
  //             return c !== fromData.title;
  //             })
  //         }}));} 

  //   if (to === "currentlyReading"){
  //     this.setState((currentState) => ({
      
  //         shelf1 : {
  //           id: currentState.shelf1.id.concat([fromData.id]),
  //           urls: currentState.shelf1.urls.concat([fromData.url]),
  //           authors: currentState.shelf1.authors.concat([fromData.author]),
  //           titles: currentState.shelf1.titles.concat([fromData.title]),
  //           shelf: to.trim()
  //         }}));}

  //   else if (to ==="wantToRead"){
  //     this.setState((currentState) => ({
  //       shelf2 : {
  //         id: currentState.shelf2.id.concat([fromData.id]),
  //         urls: currentState.shelf2.urls.concat([fromData.url]),
  //         authors: currentState.shelf2.authors.concat([fromData.author]),
  //         titles: currentState.shelf2.titles.concat([fromData.title]),
  //         shelf: to.trim()
  //       }}));} 
            
  //   else if (to === "read"){
  //     this.setState((currentState) => ({
      
  //         shelf3 : {
  //           id: currentState.shelf3.id.concat([fromData.id]),
  //           urls: currentState.shelf3.urls.concat([fromData.url]),
  //           authors: currentState.shelf3.authors.concat([fromData.author]),
  //           titles: currentState.shelf3.titles.concat([fromData.title]),
  //           shelf: to.trim()
  //         }}));}  
          
  //   else if (to === "none"){
  //     this.setState((currentState) => ({
      
  //         none : {
  //           id: currentState.none.id.concat([fromData.id]),
  //           urls: currentState.none.urls.concat([fromData.url]),
  //           authors: currentState.none.authors.concat([fromData.author]),
  //           titles: currentState.none.titles.concat([fromData.title]),
  //           shelf: to.trim()
  //         }}));}                                


  // }

//   findBooks = (value) => {
//     const {shelf1, shelf2, shelf3, none} = this.state || {};
//     let query=[].concat(shelf1, shelf2, shelf3, none);
//     let shelvesList=[]
//     console.log('v', value);
  
  
    

//     let bookQue = {
//         'id' : [],
//         'urls': [],
//         'titles': [],
//         'authors': [],
//         'shelves' : []
//         };
//     if(value){
//       query.filter((book) =>{

//           book.titles.map((title, index) => {
//             if (title.toLowerCase().includes(value.toLowerCase())){
          
//                 bookQue.id.push(book.id[index]);
//                 bookQue.urls.push(book.urls[index]);
//                 bookQue.authors.push(book.authors[index]);
//                 bookQue.titles.push(book.titles[index]);
//                 bookQue.shelves.push(book.shelf);

//                 shelvesList.push(book);
//             }
//             else if (book.authors[index].toLowerCase().includes(value.toLowerCase())){
                      
//               bookQue.id.push(book.id[index]);
//               bookQue.urls.push(book.urls[index]);
//               bookQue.authors.push(book.authors[index]);
//               bookQue.titles.push(book.titles[index]);
//               bookQue.shelves.push(book.shelf);
//               shelvesList.push(book);

//           }
//           });
          


//       });

//       this.setState((currentState) => ({
//         booksFound: {
//             'id' :  'id' in currentState.booksFound ? currentState.booksFound.id.filter((v,i)=> i>10000).concat(bookQue.id): currentState.booksFound.id.concat(bookQue.id) ,
//             'urls': 'urls' in currentState.booksFound ?  currentState.booksFound.urls.filter((v,i)=> i>10000).concat(bookQue.urls) : currentState.booksFound.urls.concat(bookQue.urls),
//             'titles': 'titles' in currentState.booksFound ?  currentState.booksFound.authors.filter((v,i)=> i>10000).concat(bookQue.titles) : currentState.booksFound.authors.concat(bookQue.titles),
//             'authors': 'authors' in currentState.booksFound ?  currentState.booksFound.titles.filter((v,i)=> i>10000).concat(bookQue.authors) : currentState.booksFound.titles.concat(bookQue.authors),
//             'shelves' :  'shelves' in currentState.booksFound ? currentState.booksFound.shelves.filter((v,i)=> i>10000).concat(bookQue.shelves) : currentState.booksFound.shelves.concat(bookQue.shelves)
//           },
//         affectedShelves : currentState.affectedShelves.slice(0, -1).concat(shelvesList)
          
      
//       }));
//       console.log('booksFound State 1', this.state.booksFound, 'affected shelves state 1' , this.state.affectedShelves);
//     }

//     else if (!value){
//       this.setState((currentState) => ({
//         booksFound: {
//           'id' : currentState.booksFound.id.filter((v,i)=> i>10000),
//           'urls': currentState.booksFound.urls.filter((v,i)=> i>10000),
//           'titles': currentState.booksFound.titles.filter((v,i)=> i>10000),
//           'authors': currentState.booksFound.authors.filter((v,i)=> i>10000),
//           'shelves': currentState.booksFound.shelves.filter((v,i)=> i>10000)
//         },
//         affectedShelves : currentState.affectedShelves.filter((v,i)=> i>10000)
          
      
//       }));
//       console.log('booksFound State 2', this.state.booksFound, 'affected shelves state 2' , this.state.affectedShelves);
//     }
// }


  render() {
    return (
      <div className="app">

        <Route exact path='/search-books' render={() => (
          <SearchBooks booksFound={this.state.booksFound} findBooks= {this.findBooks} moveToShelf={this.moveToShelf} affectedShelves={this.state.affectedShelves} />
          )}/>

          <Route exact path='/' render={() => (
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <div className="list-books-content">
                
                  <div>
                    <ListCurrentBooks shelf1={this.state.shelf1} moveToShelf={this.moveToShelf}/> 
                    <ListWantedBooks shelf2={this.state.shelf2} moveToShelf={this.moveToShelf}/>
                    <ListReadableBooks shelf3={this.state.shelf3} moveToShelf={this.moveToShelf} />
                  </div>
                
              </div>
              <div className="open-search">
              <Link to='/search-books'className="search"><button>Add a book</button></Link>

                
              </div>
            </div>
            )}/>
      </div>
    )
  }
}

export default BooksApp
