(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,a){e.exports=a(34)},25:function(e,t,a){},32:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),l=a(18),r=a.n(l),s=a(5),i=a(6),c=a(8),u=a(7),m=a(9),d=(a(25),function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.props.books;return console.log(t),o.a.createElement("div",{className:"bookshelf"},o.a.createElement("h2",{className:"bookshelf-title"},"Currently Reading"),o.a.createElement("div",{className:"bookshelf-books"},o.a.createElement("ol",{className:"books-grid"},t.map(function(t){return"currentlyReading"===t.shelf&&o.a.createElement("li",{key:t.id},o.a.createElement("div",{className:"book"},o.a.createElement("div",{className:"book-top"},o.a.createElement("div",{className:"book-cover",style:{width:128,height:188,backgroundImage:"url(".concat(t.imageLinks.thumbnail,")")}}),o.a.createElement("div",{className:"book-shelf-changer"},o.a.createElement("select",{defaultValue:t.shelf,onChange:function(a){e.props.updateShelf(t,a.target.value)}},o.a.createElement("option",{value:"move",disabled:!0},"Move to..."),o.a.createElement("option",{value:"currentlyReading"},"currentlyReading"===t.shelf?"\ud83d\udcdaCurrently Reading":"Currently Reading"),o.a.createElement("option",{value:"wantToRead"},"wantToRead"===t.shelf?"\ud83d\udcdaWant to Read":"Want to Read"),o.a.createElement("option",{value:"read"},"read"===t.shelf?"\ud83d\udcdaRead":"Read"),o.a.createElement("option",{value:"none"},"none"===t.shelf?"\ud83e\udd7a None":"None"," ")))),o.a.createElement("div",{className:"book-title"},"  ",t.title,"   "),o.a.createElement("div",{className:"book-authors"}," ",t.authors,"  ")))}))))}}]),t}(n.Component)),h=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.props.books;return console.log(t),o.a.createElement("div",{className:"bookshelf"},o.a.createElement("h2",{className:"bookshelf-title"},"Want to read"),o.a.createElement("div",{className:"bookshelf-books"},o.a.createElement("ol",{className:"books-grid"},t.map(function(t){return"wantToRead"===t.shelf&&o.a.createElement("li",{key:t.id},o.a.createElement("div",{className:"book"},o.a.createElement("div",{className:"book-top"},o.a.createElement("div",{className:"book-cover",style:{width:128,height:188,backgroundImage:"url(".concat(t.imageLinks.thumbnail,")")}}),o.a.createElement("div",{className:"book-shelf-changer"},o.a.createElement("select",{defaultValue:t.shelf,onChange:function(a){e.props.updateShelf(t,a.target.value)}},o.a.createElement("option",{value:"move",disabled:!0},"Move to..."),o.a.createElement("option",{value:"currentlyReading"},"currentlyReading"===t.shelf?"\ud83d\udcdaCurrently Reading":"Currently Reading"),o.a.createElement("option",{value:"wantToRead"},"wantToRead"===t.shelf?"\ud83d\udcdaWant to Read":"Want to Read"),o.a.createElement("option",{value:"read"},"read"===t.shelf?"\ud83d\udcdaRead":"Read"),o.a.createElement("option",{value:"none"},"none"===t.shelf?"\ud83e\udd7a None":"None"," ")))),o.a.createElement("div",{className:"book-title"},"  ",t.title,"   "),o.a.createElement("div",{className:"book-authors"}," ",t.authors,"  ")))}))))}}]),t}(n.Component),b=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.props.books;return console.log(t),o.a.createElement("div",{className:"bookshelf"},o.a.createElement("h2",{className:"bookshelf-title"},"Read"),o.a.createElement("div",{className:"bookshelf-books"},o.a.createElement("ol",{className:"books-grid"},t.map(function(t){return"read"===t.shelf&&o.a.createElement("li",{key:t.id},o.a.createElement("div",{className:"book"},o.a.createElement("div",{className:"book-top"},o.a.createElement("div",{className:"book-cover",style:{width:128,height:188,backgroundImage:"url(".concat(t.imageLinks.thumbnail,")")}}),o.a.createElement("div",{className:"book-shelf-changer"},o.a.createElement("select",{defaultValue:t.shelf,onChange:function(a){e.props.updateShelf(t,a.target.value)}},o.a.createElement("option",{value:"move",disabled:!0},"Move to..."),o.a.createElement("option",{value:"currentlyReading"},"currentlyReading"===t.shelf?"\ud83d\udcdaCurrently Reading":"Currently Reading"),o.a.createElement("option",{value:"wantToRead"},"wantToRead"===t.shelf?"\ud83d\udcdaWant to Read":"Want to Read"),o.a.createElement("option",{value:"read"},"read"===t.shelf?"\ud83d\udcdaRead":"Read"),o.a.createElement("option",{value:"none"},"none"===t.shelf?"\ud83e\udd7a None":"None"," ")))),o.a.createElement("div",{className:"book-title"},"  ",t.title,"   "),o.a.createElement("div",{className:"book-authors"}," ",t.authors,"  ")))}))))}}]),t}(n.Component),p=a(4),v=a(15),f="https://reactnd-books-api.udacity.com",k=localStorage.token;k||(k=localStorage.token=Math.random().toString(36).substr(-8));var g={Accept:"application/json",Authorization:k},E=function(){return fetch("".concat(f,"/books"),{headers:g}).then(function(e){return e.json()}).then(function(e){return e.books})},y=function(e,t){return fetch("".concat(f,"/books/").concat(e.id),{method:"PUT",headers:Object(v.a)({},g,{"Content-Type":"application/json"}),body:JSON.stringify({shelf:t})}).then(function(e){return e.json()})},N=function(e){return fetch("".concat(f,"/search"),{method:"POST",headers:Object(v.a)({},g,{"Content-Type":"application/json"}),body:JSON.stringify({query:e})}).then(function(e){return e.json()}).then(function(e){return e.books})},R=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={query:[],shelf:[]},a.searchBooks=function(e){if(e.trim().length)N(e).then(function(e){a.setState(function(t){return{query:e}})});else{var t=[];a.setState(function(){return{query:t}})}},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.state.query,a=this.props.books,n="none",l={shelf:["none"],id:["none"]};a.map(function(e){t.length>1?t.map(function(t){e.id==t.id&&(l.shelf.push(e.shelf),l.id.push(e.id))}):e.id==t.id&&(l.shelf.push(e.shelf),l.id.push(e.id))});var r=function(e){return n=l.shelf[l.id.indexOf(e)]},s=function(){return n="none"};return console.log("ehh",t),o.a.createElement("div",{className:"search-books"},o.a.createElement("div",{className:"search-books-bar"},o.a.createElement(p.b,{to:"/"},o.a.createElement("button",{className:"close-search"},"Close")),o.a.createElement("div",{className:"search-books-input-wrapper"},o.a.createElement("input",{type:"text",className:"search-bar",placeholder:"Search by title or author",onChange:function(t){return e.searchBooks(t.target.value?t.target.value:"@_____@")}}))),o.a.createElement("div",{className:"search-books-results"},o.a.createElement("ol",{className:"books-grid"},o.a.createElement("div",{className:"results",style:{padding:"5px",display:"block",width:"100%",textAlign:"center",verticalAlign:"middle",lineHeight:"90px",fontWeight:"bolder"}},o.a.createElement("div",{className:"search-options"},o.a.createElement("div",{className:"dropdown"},o.a.createElement("button",{className:"dropbtn"},"Filter"),o.a.createElement("div",{className:"dropdown-content"},["Android","Art","Artificial Intelligence","Astronomy","Austen","Baseball","Basketball","Bhagat","Biography","Brief","Business","Camus","Cervantes","Christie","Classics","Comics","Cook","Cricket","Cycling","Desai","Design","Development","Digital Marketing","Drama","Drawing","Dumas","Education","Everything","Fantasy","Film","Finance","First","Fitness","Football","Future","Games","Gandhi","Homer","Horror","Hugo","Ibsen","Journey","Kafka","King","Lahiri","Larsson","Learn","Literary Fiction","Make","Manage","Marquez","Money","Mystery","Negotiate","Painting","Philosophy","Photography","Poetry","Production","Programming","React","Redux","River","Robotics","Rowling","Satire","Science Fiction","Shakespeare","Singh","Swimming","Tale","Thrun","Time","Tolstoy","Travel","Ultimate","Virtual Reality","Web Development","iOS"].map(function(t){return o.a.createElement("li",{onClick:function(t){return e.searchBooks(t.target.innerText?t.target.innerText:"@_____@")}}," ",t)})))),void 0===t.length?"Search Results: 0 books":"Search Results: ".concat(t.length," books")),1===t.length&&o.a.createElement("li",{key:t.id},o.a.createElement("div",{className:"book"},o.a.createElement("div",{className:"book-top"},o.a.createElement("div",{className:"book-cover",style:{width:128,height:188,backgroundImage:"url(".concat(t.hasOwnProperty("imageLinks")?t.imageLinks.hasOwnProperty("smallThumbnail")?t.imageLinks.smallThumbnail:t.imageLinks.hasOwnProperty("thumbnail")?t.imageLinks.thumbnail:"":"",")")}}),o.a.createElement("div",{className:"book-shelf-changer"},o.a.createElement("select",{id:"book-shelf-selector",defaultValue:l.id.includes(t.id)?r(t.id):s(),onChange:function(a){return e.props.updateShelf(t,a.target.value)}},o.a.createElement("option",{value:"move",disabled:!0},"  Move to... "),o.a.createElement("option",{value:"currentlyReading"},"currentlyReading"===n?"\ud83d\udcdaCurrently Reading":"Currently Reading"),o.a.createElement("option",{value:"wantToRead"},"wantToRead"===n?"\ud83d\udcdaWant to Read":"Want to Read"),o.a.createElement("option",{value:"read"},"read"===n?"\ud83d\udcdaRead":"Read"),o.a.createElement("option",{value:"none"},"none"===n?"\ud83e\udd7aNone":"None"," ")))),o.a.createElement("div",{className:"book-title"},"  ",t.title||"'NO TITLE'","   "),o.a.createElement("div",{className:"book-authors"}," ",t.authors||"'NO AUTHORS'","  "))),t.length>1&&t.map(function(t){return o.a.createElement("li",{key:t.id},o.a.createElement("div",{className:"book"},o.a.createElement("div",{className:"book-top"},o.a.createElement("div",{className:"book-cover",style:{width:128,height:188,backgroundImage:"url(".concat(t.hasOwnProperty("imageLinks")?t.imageLinks.hasOwnProperty("smallThumbnail")?t.imageLinks.smallThumbnail:t.imageLinks.hasOwnProperty("thumbnail")?t.imageLinks.thumbnail:"":"",")")}}),o.a.createElement("div",{className:"book-shelf-changer"},o.a.createElement("select",{defaultValue:l.id.includes(t.id)?r(t.id):s(),onChange:function(a){return e.props.updateShelf(t,a.target.value)}},o.a.createElement("option",{value:"move",disabled:!0},"Move to..."),o.a.createElement("option",{value:"currentlyReading"},"currentlyReading"===n?"\ud83d\udcdaCurrently Reading":"Currently Reading"),o.a.createElement("option",{value:"wantToRead"},"wantToRead"===n?"\ud83d\udcdaWant to Read":"Want to Read"),o.a.createElement("option",{value:"read"},"read"===n?"\ud83d\udcdaRead":"Read"),o.a.createElement("option",{value:"none"},"none"===n?"\ud83e\udd7a None":"None"," ")))),o.a.createElement("div",{className:"book-title"},"  ",t.title||"'NO TITLE'","   "),o.a.createElement("div",{className:"book-authors"}," ",t.authors||"'NO AUTHORS'","  ")))}))))}}]),t}(n.Component),O=a(0),w=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={books:[],shelves:{}},a.updateShelf=function(e,t){y(e,t).then(function(e){a.setState(function(){return{shelves:e}})})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;E().then(function(t){e.setState(function(){return{books:t}})})}},{key:"componentDidUpdate",value:function(e,t){var a=this;console.log("current",this.state.shelves,"prev",t.shelves),this.state.shelves!==t.shelves&&E().then(function(e){a.setState(function(){return{books:e}})})}},{key:"render",value:function(){var e=this;return console.log("books",this.state.books,"shelves",this.state.shelves),o.a.createElement("div",{className:"app"},o.a.createElement(O.a,{exact:!0,path:"/search",render:function(){return o.a.createElement(R,{books:e.state.books,updateShelf:function(t,a){e.updateShelf(t,a)}})}}),o.a.createElement(O.a,{exact:!0,path:"/",render:function(t){t.history;return o.a.createElement("div",{className:"list-books"},o.a.createElement("div",{className:"list-books-title"},o.a.createElement("h1",null,"MyReads")),o.a.createElement("div",{className:"list-books-content"},o.a.createElement("div",null,o.a.createElement(d,{books:e.state.books,updateShelf:function(t,a){e.updateShelf(t,a)}}),o.a.createElement(h,{books:e.state.books,updateShelf:function(t,a){e.updateShelf(t,a)}}),o.a.createElement(b,{books:e.state.books,updateShelf:function(t,a){e.updateShelf(t,a)}}))),o.a.createElement("div",{className:"open-search"},o.a.createElement(p.b,{to:"/search",className:"search"},o.a.createElement("button",null,"Add a book"))))}}))}}]),t}(o.a.Component);a(32);r.a.render(o.a.createElement(p.a,null,o.a.createElement(w,null)),document.getElementById("root"))}},[[20,2,1]]]);
//# sourceMappingURL=main.f79b536a.chunk.js.map