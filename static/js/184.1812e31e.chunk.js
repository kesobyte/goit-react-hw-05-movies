"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[184],{673:function(e,t,r){r.r(t),r.d(t,{default:function(){return w}});var n=r(861),a=r(439),u=r(757),s=r.n(u),c=r(791),i=r(689),o=r(737),f=r(455),p="ReviewList_reviewList__YW-0o",v="ReviewList_reviewListItem__fPTQs",h="ReviewList_author__NKg94",l="ReviewList_content__PCqo7",d=r(184),w=function(){var e=(0,i.UO)().movieId,t=(0,c.useState)([]),r=(0,a.Z)(t,2),u=r[0],w=r[1],m=(0,c.useState)(!0),x=(0,a.Z)(m,2),_=x[0],g=x[1];return(0,c.useEffect)((function(){var t=function(){var t=(0,n.Z)(s().mark((function t(){var r;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,o.Hx)(e);case 3:r=t.sent,w(r||[]),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.error("Error fetching reviews:",t.t0);case 10:return t.prev=10,g(!1),t.finish(10);case 13:case"end":return t.stop()}}),t,null,[[0,7,10,13]])})));return function(){return t.apply(this,arguments)}}();t()}),[e]),_?(0,d.jsx)(f.a,{}):0===u.length?(0,d.jsx)("p",{children:"No reviews available for this movie."}):(0,d.jsx)("ul",{className:p,children:u.map((function(e){return(0,d.jsxs)("li",{className:v,children:[(0,d.jsx)("h3",{className:h,children:e.author}),(0,d.jsx)("p",{className:l,children:e.content})]},e.id)}))})}},737:function(e,t,r){r.d(t,{Hx:function(){return p},Vu:function(){return i},Y5:function(){return o},uV:function(){return f},wr:function(){return c}});var n=r(861),a=r(757),u=r.n(a),s=r(16);s.Z.defaults.baseURL="https://api.themoviedb.org/3/",s.Z.defaults.params={api_key:"526b650b7a87d81fa6582d5f1ca94e82"};var c=function(){var e=(0,n.Z)(u().mark((function e(){var t,r,n=arguments;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:1,e.prev=1,e.next=4,s.Z.get("/trending/movie/week",{params:{page:t}});case 4:return r=e.sent,e.abrupt("return",r.data.results);case 8:throw e.prev=8,e.t0=e.catch(1),console.error("Failed to fetch trending movies:",e.t0),e.t0;case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,n.Z)(u().mark((function e(t){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("search/movie?query=".concat(t));case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(u().mark((function e(t){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("movie/".concat(t));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(u().mark((function e(t){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("movie/".concat(t,"/credits?"));case 2:return r=e.sent,e.abrupt("return",r.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(u().mark((function e(t){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("movie/".concat(t,"/reviews?"));case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=184.1812e31e.chunk.js.map