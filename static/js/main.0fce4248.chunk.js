(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{42:function(e,n,t){},43:function(e,n,t){},44:function(e,n,t){},70:function(e,n,t){},72:function(e,n,t){},73:function(e,n,t){},74:function(e,n,t){},75:function(e,n,t){"use strict";t.r(n);var c=t(1),o=t(0),i=t(12),a=t.n(i),r=(t(42),t(13)),s=t(14),l=t(16),u=t(15),d=t(17),j=t(5);t(43),t(44);var h=function(){return Object(c.jsxs)("ul",{className:"nav nav-tabs",children:[Object(c.jsx)("li",{className:"nav-item",children:Object(c.jsx)(d.b,{to:"/",className:"/"===window.location.pathname?"nav-link active":"nav-link",children:"Google Books"})}),Object(c.jsx)("li",{className:"nav-item",children:Object(c.jsx)(d.b,{to:"/search",className:"/search"===window.location.pathname?"nav-link active":"nav-link",children:"Search"})}),Object(c.jsx)("li",{className:"nav-item",children:Object(c.jsx)(d.b,{to:"/saved",className:"/saved"===window.location.pathname?"nav-link active":"nav-link",children:"Saved"})})]})},b=t(19),f=t(18),v=t.n(f),m=function(e){return v.a.get("https://www.googleapis.com/books/v1/volumes?q="+e)},O=function(){return v.a.get("https://radiant-caverns-09253.herokuapp.com/api/books")},p=function(e){return v.a.post("https://radiant-caverns-09253.herokuapp.com/api/books",e)},x=function(e){return v.a.delete("https://radiant-caverns-09253.herokuapp.com/api/books/"+e)};function k(e){var n=e.fluid,t=e.children;return Object(c.jsx)("div",{className:"container".concat(n?"-fluid":""),children:t})}function g(e){var n=e.fluid,t=e.children;return Object(c.jsx)("div",{className:"row".concat(n?"-fluid":""),children:t})}function w(e){var n=e.size,t=e.children;return Object(c.jsx)("div",{className:n.split(" ").map((function(e){return"col-"+e})).join(" "),children:t})}t(70);var N=function(e){var n=e.src;return Object(c.jsx)("div",{className:"thumbnail",role:"img","aria-label":"Book Image",style:{backgroundImage:"url(".concat(n,")")}})},y=t(36),B=t(78),S=t(79);var C=function(e){var n=e.type,t=void 0===n?"default":n,i=e.className,a=e.children,r=e.onClick,s=Object(o.useState)(!1),l=Object(y.a)(s,2),u=l[0],d=l[1],j=function(){return d(!1)};return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("button",{onClick:function(){d(!0),r()},className:["btn btn-lg","btn-".concat(t),i].join(" "),children:a}),Object(c.jsxs)(B.a,{show:u,onHide:j,children:[Object(c.jsx)(B.a.Header,{closeButton:!0,children:Object(c.jsx)(B.a.Title,{children:"Your book has been saved!"})}),Object(c.jsx)(B.a.Body,{children:"You can view your saved books in the Saved tab!"}),Object(c.jsxs)(B.a.Footer,{children:[Object(c.jsx)(S.a,{variant:"secondary",onClick:j,children:"Close"}),Object(c.jsx)(S.a,{variant:"primary",onClick:j,children:"OK"})]})]})]})};var I=function(e){var n=e.type,t=void 0===n?"default":n,o=e.className,i=e.children,a=e.onClick;return Object(c.jsx)("button",{onClick:a,className:["btn btn-lg","btn-".concat(t),o].join(" "),children:i})};t(72);function z(e){var n=e.children;return Object(c.jsx)("ul",{className:"list-group",children:n})}function Y(e){return Object(c.jsx)("li",{className:"list-group-item",children:Object(c.jsx)(k,{children:Object(c.jsxs)(g,{children:[Object(c.jsx)(w,{size:"xs-4 sm-2",children:Object(c.jsx)(N,{src:e.image})}),Object(c.jsxs)(w,{size:"xs-8 sm-10",children:[Object(c.jsx)("h3",{children:e.title}),Object(c.jsxs)("p",{children:["Written By ",[e.authors].flat().join(", ")]}),Object(c.jsx)("p",{children:e.description}),Object(c.jsx)("a",{rel:"noreferrer noopener",className:"btn btn-lg btn-primary input-lg view",target:"_blank",href:e.link,children:"View"}),e.id?Object(c.jsx)(I,{type:"danger",className:"input-lg",onClick:function(n){x(e.id).then((function(n){e.loadBooks(),console.log(e.id)})).catch((function(e){return console.log(e)}))},children:"Delete"}):Object(c.jsx)(C,{type:"success",className:"input-lg",onClick:function(n){p({title:e.title,authors:e.authors,description:e.description,image:e.image,link:e.link}).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)}))},children:"Save"})]})]})})},e.id)}var F=t(35);t(73);function L(e){return Object(c.jsx)("div",{className:"input-group input-group-lg",children:Object(c.jsx)("input",Object(F.a)({className:"form-control",type:"text"},e))})}function W(e){var n=e.type,t=void 0===n?"default":n,o=e.className,i=e.children,a=e.onClick;return Object(c.jsx)("button",{onClick:a,className:["search btn btn-lg","btn-".concat(t),o].join(" "),children:i})}var _=function(e){Object(l.a)(t,e);var n=Object(u.a)(t);function t(){var e;Object(r.a)(this,t);for(var c=arguments.length,o=new Array(c),i=0;i<c;i++)o[i]=arguments[i];return(e=n.call.apply(n,[this].concat(o))).state={books:[],bookSearch:""},e.handleInputChange=function(n){var t=n.target,c=t.name,o=t.value;e.setState(Object(b.a)({},c,o))},e.handleFormSubmit=function(n){n.preventDefault(),m(e.state.bookSearch).then((function(n){e.setState({books:n.data.items},(function(){console.log(this.state.books)}))})).catch((function(e){return console.log(e)}))},e}return Object(s.a)(t,[{key:"render",value:function(){return Object(c.jsx)("div",{children:Object(c.jsxs)(k,{children:[Object(c.jsx)(g,{children:Object(c.jsx)(w,{size:"md-12",children:Object(c.jsx)("form",{children:Object(c.jsxs)(k,{children:[Object(c.jsx)(g,{children:Object(c.jsx)(w,{size:"xs-12 sm-12",children:Object(c.jsx)(L,{name:"bookSearch",value:this.state.bookSearch,onChange:this.handleInputChange,placeholder:"Search for a Book"})})}),Object(c.jsx)(g,{children:Object(c.jsx)(w,{size:"xs-12 sm-12",children:Object(c.jsx)(W,{onClick:this.handleFormSubmit,type:"success",className:"input-lg",children:"Search"})})})]})})})}),Object(c.jsx)(g,{children:Object(c.jsx)(w,{size:"xs-12",children:Object(c.jsx)(z,{children:this.state.books.map((function(e){return Object(c.jsx)(Y,{title:e.volumeInfo.title,authors:e.volumeInfo.authors,link:e.volumeInfo.infoLink,description:e.volumeInfo.description,image:void 0===e.volumeInfo.imageLinks?"http://siddallheatingandcooling.net/_imgstore/5/1360415/thumbnail/FSeY96wEdX_eY4XkBN2jfYnuY9A.png":"".concat(e.volumeInfo.imageLinks.thumbnail)},e.id)}))})})})]})})}}]),t}(o.Component),A=function(e){Object(l.a)(t,e);var n=Object(u.a)(t);function t(){var e;Object(r.a)(this,t);for(var c=arguments.length,o=new Array(c),i=0;i<c;i++)o[i]=arguments[i];return(e=n.call.apply(n,[this].concat(o))).state={savedBooks:[]},e.loadBooks=function(n){O().then((function(n){e.setState({savedBooks:n.data},(function(){console.log(this.state.savedBooks)}))})).catch((function(e){return console.log(e)}))},e}return Object(s.a)(t,[{key:"componentDidMount",value:function(){this.loadBooks()}},{key:"render",value:function(){var e=this;return Object(c.jsx)("div",{children:Object(c.jsx)(k,{children:Object(c.jsx)(g,{children:Object(c.jsx)(w,{size:"xs-12",children:Object(c.jsx)(z,{children:this.state.savedBooks.map((function(n){return Object(c.jsx)(Y,{title:n.title,authors:n.authors,link:n.link,description:n.description,image:n.image,id:n._id,loadBooks:e.loadBooks},n._id)}))})})})})})}}]),t}(o.Component);t(74);var E=function(){return Object(c.jsxs)("div",{className:"jumbotron text-center",children:[Object(c.jsx)("h1",{children:"(React) Google Books Search"}),Object(c.jsx)("h3",{children:"Search for and Save Books of Interest"})]})},D=function(e){Object(l.a)(t,e);var n=Object(u.a)(t);function t(){return Object(r.a)(this,t),n.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return Object(c.jsx)(d.a,{children:Object(c.jsxs)("div",{children:[Object(c.jsx)(h,{}),Object(c.jsx)(E,{}),Object(c.jsxs)(j.c,{children:[Object(c.jsx)(j.a,{exact:!0,path:"/",component:_}),Object(c.jsx)(j.a,{exact:!0,path:"/search",component:_}),Object(c.jsx)(j.a,{exact:!0,path:"/saved",component:A})]})]})})}}]),t}(o.Component),G=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function H(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}a.a.render(Object(c.jsx)(D,{}),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("","/service-worker.js");G?function(e){fetch(e).then((function(n){404===n.status||-1===n.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):H(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):H(e)}))}}()}},[[75,1,2]]]);
//# sourceMappingURL=main.0fce4248.chunk.js.map