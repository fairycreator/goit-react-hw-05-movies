"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[199],{786:function(n,e,t){t.d(e,{Hg:function(){return c},Jh:function(){return d},TP:function(){return u},z1:function(){return o},zv:function(){return p}});var r=t(165),a=t(861),i=t(243),s="af0d5f243de6f7a5bfa482911cb42a9e";i.Z.defaults.baseURL="https://api.themoviedb.org/3/";var c=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(){var e;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("trending/movie/day?api_key=".concat(s));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),o=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(e){var t;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("search/movie?api_key=".concat(s,"&language=en-US&query=").concat(e,"&page=1&include_adult=false"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),u=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(e){var t;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("movie/".concat(e,"?api_key=").concat(s,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(e){var t;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("movie/".concat(e,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(e){var t;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("movie/".concat(e,"/reviews?api_key=").concat(s,"&language=en-US&page=1"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},450:function(n,e,t){t.r(e),t.d(e,{default:function(){return P}});var r,a,i,s,c,o,u,p=t(683),d=t(439),l=t(689),f=t(87),h=t(786),x=t(791),g=t(168),v=t(487),Z=v.ZP.h2(r||(r=(0,g.Z)(["\n  margin: 0;\n"]))),m=v.ZP.div(a||(a=(0,g.Z)(["\n  display: flex;\n  padding: 20px;\n  border-bottom: solid 1px grey;\n"]))),w=v.ZP.div(i||(i=(0,g.Z)(["\n  padding: 20px 40px;\n"]))),j=v.ZP.ul(s||(s=(0,g.Z)(["\n  list-style: none;\n  display: flex;\n  padding: 0;\n  gap: 16px;\n"]))),b=v.ZP.button(c||(c=(0,g.Z)(["\n  margin-top: 16px;\n  padding: 8px 16px;\n  border-radius: 4px;\n  border: none;\n  margin-bottom: 10px;\n  font-weight: 500;\n  &:hover {\n    background-color: #63c5da;\n  }\n"]))),y=(0,v.ZP)(f.rU)(o||(o=(0,g.Z)(["\n  display: flex;\n  font-size: 14px;\n  align-items: center;\n  column-gap: 10px;\n"]))),k=v.ZP.div(u||(u=(0,g.Z)(["\n  padding: 20px;\n  border-bottom: solid 1px grey;\n"]))),_=t(617),U=t(184),P=function(){var n,e,t=(0,x.useState)({}),r=(0,d.Z)(t,2),a=r[0],i=r[1],s=(0,l.TH)(),c=(0,l.UO)().movieId;(0,x.useEffect)((function(){(0,h.TP)(c).then((function(n){return i(n)}))}),[c]);var o=a.original_title,u=a.overview,g=a.genres,v=a.poster_path,P=(10*a.vote_average).toFixed(2);return(0,U.jsxs)("main",{children:[(0,U.jsx)(b,{type:"button",children:(0,U.jsxs)(y,{to:null!==(n=null===(e=s.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/",children:[(0,U.jsx)(_.siY,{size:16}),"Go back"]})}),(0,U.jsxs)(m,{children:[(0,U.jsx)("img",{src:v?"https://image.tmdb.org/t/p/w300".concat(v):"http://www.suryalaya.org/images/no_image.jpg",width:320,height:380,loading:"lazy",alt:"poster"}),(0,U.jsxs)(w,{children:[(0,U.jsx)(Z,{children:o}),(0,U.jsxs)("h3",{children:["User score: ",P,"%"]}),(0,U.jsx)("h3",{children:"Overview"}),(0,U.jsxs)("p",{children:[u," "]}),(0,U.jsx)("h3",{children:"Genres"}),(0,U.jsx)(j,{children:g&&g.length&&g.map((function(n){var e=n.id,t=n.name;return(0,U.jsx)("li",{children:t},e)}))})]})]}),(0,U.jsxs)(k,{children:[(0,U.jsx)("h4",{children:"Additional information"}),(0,U.jsxs)("ul",{children:[(0,U.jsx)("li",{children:(0,U.jsx)(f.rU,{to:"cast",state:(0,p.Z)({},s.state),children:"Cast"})}),(0,U.jsxs)("li",{children:[" ",(0,U.jsx)(f.rU,{to:"reviews",state:(0,p.Z)({},s.state),children:"Reviews"})]})]})]}),(0,U.jsx)(l.j3,{})]})}}}]);
//# sourceMappingURL=199.64305b17.chunk.js.map