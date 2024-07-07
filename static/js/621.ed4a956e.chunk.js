"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[621],{510:function(e,t,n){n.d(t,{e:function(){return v}});var r=n(87),a="MovieList_movieList__uFrOZ",u="MovieList_movieListItem__6DqRG",s="MovieList_movieLink__kzavH",c="MovieList_movieImage__txbdB",i="MovieList_movieTitle__RhENm",o=n(184),v=function(e){var t=e.movies;return(0,o.jsx)("ul",{className:a,children:t.map((function(e){return(0,o.jsx)("li",{className:u,children:(0,o.jsxs)(r.rU,{to:"/movies/".concat(e.id),className:s,children:[(0,o.jsx)("img",{src:"https://image.tmdb.org/t/p/w300".concat(e.poster_path),alt:e.title,className:c}),(0,o.jsx)("p",{className:i,children:e.title})]})},e.id)}))})}},621:function(e,t,n){n.r(t),n.d(t,{default:function(){return x}});var r=n(861),a=n(439),u=n(757),s=n.n(u),c=n(455),i=n(791),o=n(87),v=n(737),p=n(566),f=n(628),l={},m=n(184),d=function(e){var t=e.onChange,n=e.value;return(0,m.jsxs)("div",{className:l.InputWrapper,children:[(0,m.jsx)(f.DebounceInput,{className:l.input,type:"text",value:n,onChange:function(e){t(e.target.value)},placeholder:"Search movies...",minLength:2,debounceTimeout:500}),(0,m.jsx)(p.G4C,{className:l.icon})]})},h=n(510),x=function(){var e,t=(0,i.useState)([]),n=(0,a.Z)(t,2),u=n[0],p=n[1],f=(0,o.lr)(),l=(0,a.Z)(f,2),x=l[0],_=l[1],g=null!==(e=x.get("query"))&&void 0!==e?e:"",w=(0,i.useState)(!1),Z=(0,a.Z)(w,2),b=Z[0],k=Z[1];return(0,i.useEffect)((function(){(0,r.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,k(!0),e.next=4,(0,v.Vu)(g);case 4:t=e.sent,p(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:return e.prev=11,k(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})))()}),[g]),(0,m.jsxs)("div",{children:[(0,m.jsx)(d,{value:g,onChange:function(e){_(""!==e?{query:e}:{})}}),b?(0,m.jsx)(c.a,{}):g&&0===u.length?(0,m.jsx)("h2",{children:"\ud83d\udd0e Nothing Found"}):(0,m.jsx)(h.e,{movies:u})]})}},737:function(e,t,n){n.d(t,{Hx:function(){return p},Vu:function(){return i},Y5:function(){return o},uV:function(){return v},wr:function(){return c}});var r=n(861),a=n(757),u=n.n(a),s=n(16);s.Z.defaults.baseURL="https://api.themoviedb.org/3/",s.Z.defaults.params={api_key:"526b650b7a87d81fa6582d5f1ca94e82"};var c=function(){var e=(0,r.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("trending/movie/day");case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("search/movie?query=".concat(t));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("movie/".concat(t));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("movie/".concat(t,"/credits?"));case 2:return n=e.sent,e.abrupt("return",n.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("movie/".concat(t,"/reviews?"));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=621.ed4a956e.chunk.js.map