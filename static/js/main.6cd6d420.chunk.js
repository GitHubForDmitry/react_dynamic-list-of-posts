(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,a){e.exports=a(19)},18:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(9),c=a.n(s),o=a(3),i=a(4),u=a(6),l=a(5),m=a(7),p=a(1),d=a.n(p),f=a(10),h=a(2),b=function(){var e=Object(h.a)(d.a.mark(function e(t){var a,n;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return a=e.sent,e.next=5,a.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();a(18);var v=function(e){var t=e.users;return r.a.createElement("div",{className:"users alert-success"},r.a.createElement("p",{className:"users__text"},"name:",t.name),r.a.createElement("p",{className:"users__text"},"email:",t.email),r.a.createElement("p",{className:"users__text"},"city:",t.address.city))};var E=function(e){var t=e.currentComment;return r.a.createElement("div",{className:"comment"},r.a.createElement("span",{className:"comment__name"},t.name),r.a.createElement("span",{className:"comment__email"},t.email),r.a.createElement("p",{className:"comment__body"},t.body))},y=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).state={show:!1},a.getLoad=function(){a.setState(function(e){return{show:!e.show}})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.currentComments.map(function(e){return r.a.createElement(E,{key:e.id,currentComment:e})});return r.a.createElement("div",null,this.state.show&&e,r.a.createElement("button",{type:"submit",className:"btn btn-success mt-2 mb-2",onClick:this.getLoad},this.state.show?"Hide":"Show"))}}]),t}(r.a.Component);var w=function(e){var t=e.posts;return r.a.createElement("div",{className:"posts"},r.a.createElement("p",{className:"posts__title alert alert-warning"},"News",t.id,r.a.createElement("br",null),t.title),r.a.createElement("p",{className:"posts__body alert alert-info"},"About news",t.id,r.a.createElement("br",null),t.body),r.a.createElement(v,{users:t.user}),r.a.createElement("p",null,"Comments"),r.a.createElement(y,{currentComments:t.comments}))};var j=function(e){var t=e.currentPosts;return r.a.createElement("div",null,t.map(function(e){return r.a.createElement(w,{key:e.id,posts:e})}))},N=function(){var e=Object(h.a)(d.a.mark(function e(){var t,a,n;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b("https://jsonplaceholder.typicode.com/users");case 2:return t=e.sent,e.next=5,b("https://jsonplaceholder.typicode.com/posts");case 5:return a=e.sent,e.next=8,b("https://jsonplaceholder.typicode.com/comments");case 8:return n=e.sent,e.abrupt("return",a.map(function(e){return Object(f.a)({},e,{user:t.find(function(t){return t.id===e.userId}),comments:n.filter(function(t){return t.postId===e.id})})}));case 10:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),x=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).state={users:[],isLoaded:!1,isLoading:!1},a.load=Object(h.a)(d.a.mark(function e(){var t;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a.setState({isLoading:!0}),e.next=3,N();case 3:t=e.sent,a.setState({users:t,isLoaded:!0,isLoading:!1,posts:t});case 5:case"end":return e.stop()}},e)})),a.handleSearch=function(e){var t=e.target.value;a.setState(function(e){return{users:e.posts.filter(function(e){return[e.title||e.body].join("").toLowerCase().includes(t.toLowerCase())})}})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state.users;return this.state.isLoaded?r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"alert alert-primary text-center"},"Dynamic list of posts"),r.a.createElement("form",{className:"form-horizontal"},r.a.createElement("input",{placeholder:"filter by title and the text...",onChange:this.handleSearch,className:"form-control mb-4"})),r.a.createElement(j,{currentPosts:e})):r.a.createElement("div",{className:"text-center"},r.a.createElement("button",{type:"submit",className:"btn btn-success mt-5",onClick:this.load,disabled:this.state.isLoading},this.state.isLoading?"Loading...":"Load posts"))}}]),t}(r.a.Component);c.a.render(r.a.createElement(x,null),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.6cd6d420.chunk.js.map