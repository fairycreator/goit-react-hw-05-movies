"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[186],{786:function(e,n,t){t.d(n,{Hg:function(){return i},Jh:function(){return p},TP:function(){return s},z1:function(){return o},zv:function(){return f}});var r=t(165),a=t(861),u=t(243),c="af0d5f243de6f7a5bfa482911cb42a9e";u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var i=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("trending/movie/day?api_key=".concat(c));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("search/movie?api_key=".concat(c,"&language=en-US&query=").concat(n,"&page=1&include_adult=false"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),s=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("movie/".concat(n,"?api_key=").concat(c,"&language=en-US"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("movie/".concat(n,"/credits?api_key=").concat(c,"&language=en-US"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("movie/".concat(n,"/reviews?api_key=").concat(c,"&language=en-US&page=1"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},186:function(e,n,t){t.r(n);var r=t(439),a=t(689),u=t(791),c=t(786),i=t(184);n.default=function(){var e=(0,u.useState)([]),n=(0,r.Z)(e,2),t=n[0],o=n[1],s=(0,a.UO)().movieId;return(0,u.useEffect)((function(){(0,c.Jh)(s).then((function(e){return o(e.results)}))}),[s]),(0,i.jsx)("ul",{children:t.length>0?t.map((function(e){var n=e.author,t=e.content,r=e.id;return(0,i.jsxs)("li",{children:[(0,i.jsx)("h3",{children:n}),(0,i.jsx)("p",{children:t})]},r)})):"Sorry, we don't have any review for this movie"})}}}]);
//# sourceMappingURL=186.82e52c2e.chunk.js.map