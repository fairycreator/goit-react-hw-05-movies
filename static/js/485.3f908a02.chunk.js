"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[485],{786:function(n,t,e){e.d(t,{Bt:function(){return f},Tg:function(){return o},Y5:function(){return i},wL:function(){return s}});var r=e(165),a=e(861),c=e(243);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var u="8765726bab8eefbb14e3593a7a656d47",o=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(){var t;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("trending/movie/day?api_key=".concat(u));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),i=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(t){var e;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(t,"?api_key=").concat(u,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),s=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(t){var e;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(t,"/credits?api_key=").concat(u,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(t){var e;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(t,"/reviews?api_key=").concat(u,"&language=en-US&page=1"));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},485:function(n,t,e){e.r(t),e.d(t,{default:function(){return w}});var r,a,c,u,o,i=e(439),s=e(791),f=e(689),p=e(786),l=e(659),d=e(168),Z=e(822),h=e(87),v=Z.Z.main(r||(r=(0,d.Z)(["\n  text-align: center;\n"]))),g=Z.Z.h1(a||(a=(0,d.Z)(["\n  font-size: 24px;\n  margin-bottom: 20px;\n"]))),m=Z.Z.ul(c||(c=(0,d.Z)(["\n  list-style: none;\n  padding: 0;\n"]))),x=Z.Z.li(u||(u=(0,d.Z)(["\n  margin-bottom: 10px;\n"]))),b=(0,Z.Z)(h.rU)(o||(o=(0,d.Z)(["\n  color: #007bff;\n  text-decoration: none;\n\n  &:hover {\n    text-decoration: underline;\n  }\n"]))),k=e(184),w=function(){var n=(0,s.useState)([]),t=(0,i.Z)(n,2),e=t[0],r=t[1],a=(0,s.useState)(!1),c=(0,i.Z)(a,2),u=c[0],o=c[1],d=(0,f.TH)();return(0,s.useEffect)((function(){o(!0),(0,p.Tg)().then((function(n){r(n)})).catch((function(n){console.log(n)})).finally((function(){o(!1)}))}),[]),(0,k.jsxs)(v,{children:[(0,k.jsx)(g,{children:"Trending today"}),(0,k.jsx)(m,{children:e.map((function(n){return(0,k.jsx)(x,{children:(0,k.jsx)(b,{to:"/movies/".concat(n.id),state:{from:d},children:n.title})},n.id)}))}),u&&(0,k.jsx)(l.Z,{})]})}}}]);
//# sourceMappingURL=485.3f908a02.chunk.js.map