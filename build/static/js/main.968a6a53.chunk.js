(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,a){e.exports=a(34)},25:function(e,t,a){},32:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),r=a(18),l=a.n(r),i=a(5),s=a(6),c=a(8),u=a(7),m=a(9),d=(a(25),function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props.books;return console.log(t),o.a.createElement("div",{className:"bookshelf"},o.a.createElement("h2",{className:"bookshelf-title"},"Currently Reading"),o.a.createElement("div",{className:"bookshelf-books"},o.a.createElement("ol",{className:"books-grid"},t.map(function(t){return"currentlyReading"===t.shelf&&o.a.createElement("li",{key:t.id},o.a.createElement("div",{className:"book"},o.a.createElement("div",{className:"book-top"},o.a.createElement("div",{className:"book-cover",style:{width:128,height:188,backgroundImage:"url(".concat(t.imageLinks.thumbnail,")")}}),o.a.createElement("div",{className:"book-shelf-changer"},o.a.createElement("select",{defaultValue:t.shelf,onChange:function(a){e.props.updateShelf(t,a.target.value)}},o.a.createElement("option",{value:"move",disabled:!0},"Move to..."),o.a.createElement("option",{value:"currentlyReading"},"Currently Reading"),o.a.createElement("option",{value:"wantToRead"},"Want to Read"),o.a.createElement("option",{value:"read"},"Read"),o.a.createElement("option",{value:"none"},"None")))),o.a.createElement("div",{className:"book-title"},"  ",t.title,"   "),o.a.createElement("div",{className:"book-authors"}," ",t.authors,"  ")))}))))}}]),t}(n.Component)),h=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props.books;return console.log(t),o.a.createElement("div",{className:"bookshelf"},o.a.createElement("h2",{className:"bookshelf-title"},"Want to read"),o.a.createElement("div",{className:"bookshelf-books"},o.a.createElement("ol",{className:"books-grid"},t.map(function(t){return"wantToRead"===t.shelf&&o.a.createElement("li",{key:t.id},o.a.createElement("div",{className:"book"},o.a.createElement("div",{className:"book-top"},o.a.createElement("div",{className:"book-cover",style:{width:128,height:188,backgroundImage:"url(".concat(t.imageLinks.thumbnail,")")}}),o.a.createElement("div",{className:"book-shelf-changer"},o.a.createElement("select",{defaultValue:t.shelf,onChange:function(a){e.props.updateShelf(t,a.target.value)}},o.a.createElement("option",{value:"move",disabled:!0},"Move to..."),o.a.createElement("option",{value:"currentlyReading"},"Currently Reading"),o.a.createElement("option",{value:"wantToRead"},"Want to Read"),o.a.createElement("option",{value:"read"},"Read"),o.a.createElement("option",{value:"none"},"None")))),o.a.createElement("div",{className:"book-title"},"  ",t.title,"   "),o.a.createElement("div",{className:"book-authors"}," ",t.authors,"  ")))}))))}}]),t}(n.Component),v=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props.books;return console.log(t),o.a.createElement("div",{className:"bookshelf"},o.a.createElement("h2",{className:"bookshelf-title"},"Read"),o.a.createElement("div",{className:"bookshelf-books"},o.a.createElement("ol",{className:"books-grid"},t.map(function(t){return"read"===t.shelf&&o.a.createElement("li",{key:t.id},o.a.createElement("div",{className:"book"},o.a.createElement("div",{className:"book-top"},o.a.createElement("div",{className:"book-cover",style:{width:128,height:188,backgroundImage:"url(".concat(t.imageLinks.thumbnail,")")}}),o.a.createElement("div",{className:"book-shelf-changer"},o.a.createElement("select",{defaultValue:t.shelf,onChange:function(a){e.props.updateShelf(t,a.target.value)}},o.a.createElement("option",{value:"move",disabled:!0},"Move to..."),o.a.createElement("option",{value:"currentlyReading"},"Currently Reading"),o.a.createElement("option",{value:"wantToRead"},"Want to Read"),o.a.createElement("option",{value:"read"},"Read"),o.a.createElement("option",{value:"none"},"None")))),o.a.createElement("div",{className:"book-title"},"  ",t.title,"   "),o.a.createElement("div",{className:"book-authors"}," ",t.authors,"  ")))}))))}}]),t}(n.Component),b=a(4),p=a(15),f="https://reactnd-books-api.udacity.com",g=localStorage.token;g||(g=localStorage.token=Math.random().toString(36).substr(-8));var k={Accept:"application/json",Authorization:g},E=function(){return fetch("".concat(f,"/books"),{headers:k}).then(function(e){return e.json()}).then(function(e){return e.books})},y=function(e,t){return fetch("".concat(f,"/books/").concat(e.id),{method:"PUT",headers:Object(p.a)({},k,{"Content-Type":"application/json"}),body:JSON.stringify({shelf:t})}).then(function(e){return e.json()})},N=function(e){return fetch("".concat(f,"/search"),{method:"POST",headers:Object(p.a)({},k,{"Content-Type":"application/json"}),body:JSON.stringify({query:e})}).then(function(e){return e.json()}).then(function(e){return e.books})},w=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={query:[],shelf:[]},a.searchBooks=function(e){if(e.trim().length)N(e).then(function(e){a.setState(function(t){return{query:e}})});else{var t=[];a.setState(function(){return{query:t}})}},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.state.query,a=this.props.books,n="none",r={shelf:["none"],id:["none"]};a.map(function(e){t.length>1?t.map(function(t){e.id==t.id&&(r.shelf.push(e.shelf),r.id.push(e.id))}):e.id==t.id&&(r.shelf.push(e.shelf),r.id.push(e.id))});var l=function(e){return n=r.shelf[r.id.indexOf(e)]},i=function(){return n="none"};return console.log("ehh",t),o.a.createElement("div",{className:"search-books"},o.a.createElement("div",{className:"search-books-bar"},o.a.createElement(b.b,{to:"/"},o.a.createElement("button",{className:"close-search"},"Close")),o.a.createElement("div",{className:"search-books-input-wrapper"},o.a.createElement("input",{type:"text",className:"search-bar",placeholder:"Search by title or author",onChange:function(t){return e.searchBooks(t.target.value?t.target.value:"@_____@")}}))),o.a.createElement("div",{className:"search-books-results"},o.a.createElement("ol",{className:"books-grid"},o.a.createElement("div",{className:"results",style:{padding:"5px",display:"block",width:"100%",textAlign:"center",verticalAlign:"middle",lineHeight:"90px",fontWeight:"bolder"}},o.a.createElement("div",{className:"search-options"},o.a.createElement("div",{className:"dropdown"},o.a.createElement("button",{className:"dropbtn"},"Filter"),o.a.createElement("div",{className:"dropdown-content"},["Android","Art","Artificial Intelligence","Astronomy","Austen","Baseball","Basketball","Bhagat","Biography","Brief","Business","Camus","Cervantes","Christie","Classics","Comics","Cook","Cricket","Cycling","Desai","Design","Development","Digital Marketing","Drama","Drawing","Dumas","Education","Everything","Fantasy","Film","Finance","First","Fitness","Football","Future","Games","Gandhi","Homer","Horror","Hugo","Ibsen","Journey","Kafka","King","Lahiri","Larsson","Learn","Literary Fiction","Make","Manage","Marquez","Money","Mystery","Negotiate","Painting","Philosophy","Photography","Poetry","Production","Programming","React","Redux","River","Robotics","Rowling","Satire","Science Fiction","Shakespeare","Singh","Swimming","Tale","Thrun","Time","Tolstoy","Travel","Ultimate","Virtual Reality","Web Development","iOS"].map(function(t){return o.a.createElement("li",{onClick:function(t){return e.searchBooks(t.target.innerText?t.target.innerText:"@_____@")}}," ",t)})))),void 0===t.length?"Search Results: 0 books":"Search Results: ".concat(t.length," books")),1===t.length&&o.a.createElement("li",{key:t.id},o.a.createElement("div",{className:"book"},o.a.createElement("div",{className:"book-top"},o.a.createElement("div",{className:"book-cover",style:{width:128,height:188,backgroundImage:"url(".concat(t.hasOwnProperty("imageLinks")?t.imageLinks.hasOwnProperty("smallThumbnail")?t.imageLinks.smallThumbnail:t.imageLinks.hasOwnProperty("thumbnail")?t.imageLinks.thumbnail:"":"",")")}}),o.a.createElement("div",{className:"book-shelf-changer"},o.a.createElement("select",{id:"book-shelf-selector",defaultValue:r.id.includes(t.id)?l(t.id):i(),onChange:function(a){return e.props.updateShelf(t,a.target.value)}},o.a.createElement("option",{value:"move",disabled:!0},"  Move to... "),o.a.createElement("option",{value:"currentlyReading"},"currentlyReading"===n?"\ud83d\udcdaCurrently Reading":"Currently Reading"),o.a.createElement("option",{value:"wantToRead"},"wantToRead"===n?"\ud83d\udcdaWant to Read":"Want to Read"),o.a.createElement("option",{value:"read"},"read"===n?"\ud83d\udcdaRead":"Read"),o.a.createElement("option",{value:"none"},"none"===n?"\ud83e\udd7a None":"None"," ")))),o.a.createElement("div",{className:"book-title"},"  ",t.title||"'NO TITLE'","   "),o.a.createElement("div",{className:"book-authors"}," ",t.authors||"'NO AUTHORS'","  "))),t.length>1&&t.map(function(t){return o.a.createElement("li",{key:t.id},o.a.createElement("div",{className:"book"},o.a.createElement("div",{className:"book-top"},o.a.createElement("div",{className:"book-cover",style:{width:128,height:188,backgroundImage:"url(".concat(t.hasOwnProperty("imageLinks")?t.imageLinks.hasOwnProperty("smallThumbnail")?t.imageLinks.smallThumbnail:t.imageLinks.hasOwnProperty("thumbnail")?t.imageLinks.thumbnail:"":"",")")}}),o.a.createElement("div",{className:"book-shelf-changer"},o.a.createElement("select",{defaultValue:r.id.includes(t.id)?l(t.id):i(),onChange:function(a){return e.props.updateShelf(t,a.target.value)}},o.a.createElement("option",{value:"move",disabled:!0},"Move to..."),o.a.createElement("option",{value:"currentlyReading"},"currentlyReading"===n?"\ud83d\udcdaCurrently Reading":"Currently Reading"),o.a.createElement("option",{value:"wantToRead"},"wantToRead"===n?"\ud83d\udcdaWant to Read":"Want to Read"),o.a.createElement("option",{value:"read"},"read"===n?"\ud83d\udcdaRead":"Read"),o.a.createElement("option",{value:"none"},"none"===n?"\ud83e\udd7a None":"None"," ")))),o.a.createElement("div",{className:"book-title"},"  ",t.title||"'NO TITLE'","   "),o.a.createElement("div",{className:"book-authors"}," ",t.authors||"'NO AUTHORS'","  ")))}))))}}]),t}(n.Component),R=a(0),O=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={books:[],shelves:{}},a.updateShelf=function(e,t){y(e,t).then(function(e){a.setState(function(){return{shelves:e}})})},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;E().then(function(t){e.setState(function(){return{books:t}})})}},{key:"componentDidUpdate",value:function(e,t){var a=this;console.log("current",this.state.shelves,"prev",t.shelves),this.state.shelves!==t.shelves&&E().then(function(e){a.setState(function(){return{books:e}})})}},{key:"render",value:function(){var e=this;return console.log("books",this.state.books,"shelves",this.state.shelves),o.a.createElement("div",{className:"app"},o.a.createElement(R.a,{exact:!0,path:"/search",render:function(){return o.a.createElement(w,{books:e.state.books,updateShelf:function(t,a){e.updateShelf(t,a)}})}}),o.a.createElement(R.a,{exact:!0,path:"/",render:function(t){t.history;return o.a.createElement("div",{className:"list-books"},o.a.createElement("div",{className:"list-books-title"},o.a.createElement("h1",null,"MyReads")),o.a.createElement("div",{className:"list-books-content"},o.a.createElement("div",null,o.a.createElement(d,{books:e.state.books,updateShelf:function(t,a){e.updateShelf(t,a)}}),o.a.createElement(h,{books:e.state.books,updateShelf:function(t,a){e.updateShelf(t,a)}}),o.a.createElement(v,{books:e.state.books,updateShelf:function(t,a){e.updateShelf(t,a)}}))),o.a.createElement("div",{className:"open-search"},o.a.createElement(b.b,{to:"/search",className:"search"},o.a.createElement("button",null,"Add a book"))))}}))}}]),t}(o.a.Component),j=(a(32),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function S(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}l.a.render(o.a.createElement(b.a,null,o.a.createElement(O,null)),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/reactnd-project-myreads-starter",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/reactnd-project-myreads-starter","/service-worker.js");j?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):S(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):S(e)})}}()}},[[20,2,1]]]);
//# sourceMappingURL=main.968a6a53.chunk.js.map