"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[594],{510:function(e,t,r){r.d(t,{e:function(){return v}});var n=r(87),a="MovieList_movieList__uFrOZ",s="MovieList_movieListItem__6DqRG",c="MovieList_movieLink__kzavH",i="MovieList_movieImage__txbdB",u="MovieList_movieTitle__RhENm",o=r(184),v=function(e){var t=e.movies;return(0,o.jsx)("ul",{className:a,children:t.map((function(e,t){return(0,o.jsx)("li",{className:s,children:(0,o.jsxs)(n.rU,{to:"/movies/".concat(e.id),className:c,children:[(0,o.jsx)("img",{src:e.poster_path?"https://image.tmdb.org/t/p/w300".concat(e.poster_path):"https://dummyimage.com/150x225/969696/e0e0e0.jpg&text=No+image",alt:e.title,className:i}),(0,o.jsx)("p",{className:u,children:e.title})]})},"".concat(e.id,"-").concat(t))}))})}},594:function(e,t,r){r.r(t),r.d(t,{default:function(){return j}});var n=r(861),a=r(439),s=r(757),c=r.n(s),i=r(455),u=r(791),o=r(87),v=r(737),p=r(566),l=r(628),_="SearchBar_inputWrapper__Y3m19",f="SearchBar_input__bIy50",m="SearchBar_icon__EfDZn",h=r(184),d=function(e){var t=e.onChange,r=e.value;return(0,h.jsxs)("div",{className:_,children:[(0,h.jsx)(l.DebounceInput,{className:f,type:"text",value:r,onChange:function(e){t(e.target.value)},placeholder:"Search movies...",minLength:2,debounceTimeout:500}),(0,h.jsx)(p.G4C,{className:m})]})},x=r(510),g="MoviePage_container__esvYr",w="MoviePage_searchBarContainer__M6FX0",Z="MoviePage_loader__3MW8H",N="MoviePage_noResults__1Y0v+",j=function(){var e,t=(0,u.useState)([]),r=(0,a.Z)(t,2),s=r[0],p=r[1],l=(0,o.lr)(),_=(0,a.Z)(l,2),f=_[0],m=_[1],j=null!==(e=f.get("query"))&&void 0!==e?e:"",b=(0,u.useState)(!1),k=(0,a.Z)(b,2),S=k[0],y=k[1];return(0,u.useEffect)((function(){(0,n.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,y(!0),e.next=4,(0,v.Vu)(j);case 4:t=e.sent,p(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:return e.prev=11,y(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})))()}),[j]),(0,h.jsxs)("div",{className:g,children:[(0,h.jsx)("div",{className:w,children:(0,h.jsx)(d,{value:j,onChange:function(e){m(""!==e?{query:e}:{})}})}),S?(0,h.jsx)("div",{className:Z,children:(0,h.jsx)(i.a,{})}):j&&0===s.length?(0,h.jsx)("h2",{className:N,children:"\ud83d\udd0e Nothing Found"}):(0,h.jsx)(x.e,{movies:s})]})}},737:function(e,t,r){r.d(t,{Hx:function(){return l},Vu:function(){return o},Y5:function(){return v},uV:function(){return p},wr:function(){return u}});var n=r(861),a=r(757),s=r.n(a),c=r(16),i={NODE_ENV:"production",PUBLIC_URL:"/goit-react-hw-05-movies",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_API_KEY;c.Z.defaults.baseURL="https://api.themoviedb.org/3/",c.Z.defaults.params={api_key:i};var u=function(){var e=(0,n.Z)(s().mark((function e(){var t,r,n=arguments;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:1,e.prev=1,e.next=4,c.Z.get("/trending/movie/week",{params:{page:t}});case 4:return r=e.sent,e.abrupt("return",r.data.results);case 8:throw e.prev=8,e.t0=e.catch(1),console.error("Failed to fetch trending movies:",e.t0),e.t0;case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(s().mark((function e(t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("search/movie?query=".concat(t));case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,n.Z)(s().mark((function e(t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(t));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(s().mark((function e(t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(t,"/credits?"));case 2:return r=e.sent,e.abrupt("return",r.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(s().mark((function e(t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(t,"/reviews?"));case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=594.9c52c695.chunk.js.map