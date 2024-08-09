"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[594],{510:function(e,t,r){r.d(t,{e:function(){return v}});var n=r(87),a="MovieList_movieList__uFrOZ",s="MovieList_movieListItem__6DqRG",c="MovieList_movieLink__kzavH",u="MovieList_movieImage__txbdB",i="MovieList_movieTitle__RhENm",o=r(184),v=function(e){var t=e.movies;return(0,o.jsx)("ul",{className:a,children:t.map((function(e,t){return(0,o.jsx)("li",{className:s,children:(0,o.jsxs)(n.rU,{to:"/movies/".concat(e.id),className:c,children:[(0,o.jsx)("img",{src:e.poster_path?"https://image.tmdb.org/t/p/w300".concat(e.poster_path):"https://dummyimage.com/150x225/969696/e0e0e0.jpg&text=No+image",alt:e.title,className:u}),(0,o.jsx)("p",{className:i,children:e.title})]})},"".concat(e.id,"-").concat(t))}))})}},594:function(e,t,r){r.r(t),r.d(t,{default:function(){return j}});var n=r(861),a=r(439),s=r(757),c=r.n(s),u=r(455),i=r(791),o=r(87),v=r(737),p=r(566),l=r(628),f="SearchBar_inputWrapper__Y3m19",m="SearchBar_input__bIy50",h="SearchBar_icon__EfDZn",d=r(184),_=function(e){var t=e.onChange,r=e.value;return(0,d.jsxs)("div",{className:f,children:[(0,d.jsx)(l.DebounceInput,{className:m,type:"text",value:r,onChange:function(e){t(e.target.value)},placeholder:"Search movies...",minLength:2,debounceTimeout:500}),(0,d.jsx)(p.G4C,{className:h})]})},x=r(510),g="MoviePage_container__esvYr",w="MoviePage_searchBarContainer__M6FX0",Z="MoviePage_loader__3MW8H",b="MoviePage_noResults__1Y0v+",j=function(){var e,t=(0,i.useState)([]),r=(0,a.Z)(t,2),s=r[0],p=r[1],l=(0,o.lr)(),f=(0,a.Z)(l,2),m=f[0],h=f[1],j=null!==(e=m.get("query"))&&void 0!==e?e:"",k=(0,i.useState)(!1),N=(0,a.Z)(k,2),y=N[0],M=N[1];return(0,i.useEffect)((function(){(0,n.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,M(!0),e.next=4,(0,v.Vu)(j);case 4:t=e.sent,p(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:return e.prev=11,M(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})))()}),[j]),(0,d.jsxs)("div",{className:g,children:[(0,d.jsx)("div",{className:w,children:(0,d.jsx)(_,{value:j,onChange:function(e){h(""!==e?{query:e}:{})}})}),y?(0,d.jsx)("div",{className:Z,children:(0,d.jsx)(u.a,{})}):j&&0===s.length?(0,d.jsx)("h2",{className:b,children:"\ud83d\udd0e Nothing Found"}):(0,d.jsx)(x.e,{movies:s})]})}},737:function(e,t,r){r.d(t,{Hx:function(){return p},Vu:function(){return i},Y5:function(){return o},uV:function(){return v},wr:function(){return u}});var n=r(861),a=r(757),s=r.n(a),c=r(16);c.Z.defaults.baseURL="https://api.themoviedb.org/3/",c.Z.defaults.params={api_key:"526b650b7a87d81fa6582d5f1ca94e82"};var u=function(){var e=(0,n.Z)(s().mark((function e(){var t,r,n=arguments;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:1,e.prev=1,e.next=4,c.Z.get("/trending/movie/week",{params:{page:t}});case 4:return r=e.sent,e.abrupt("return",r.data.results);case 8:throw e.prev=8,e.t0=e.catch(1),console.error("Failed to fetch trending movies:",e.t0),e.t0;case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,n.Z)(s().mark((function e(t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("search/movie?query=".concat(t));case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(s().mark((function e(t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(t));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,n.Z)(s().mark((function e(t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(t,"/credits?"));case 2:return r=e.sent,e.abrupt("return",r.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(s().mark((function e(t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(t,"/reviews?"));case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=594.787ed58e.chunk.js.map