"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[298],{7298:function(e,n,t){t.r(n),t.d(n,{default:function(){return v}});var r=t(885),a="Button_button__wiIYs",c=t(184),i=function(){return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("button",{type:"button",className:a,children:"Go back"})})},s=t(6871),o=t(501),u=t(2791),l=t(4390),d="FilmCard_filmCart__TYlKK",h="FilmCard_content__jOOJi",p="FilmCard_genresList__fAVkV",f="FilmCard_linkBack__RmnGV",v=function(){var e,n,t,a,v,m,x=(0,s.UO)().movieId,_=(0,u.useState)(null),g=(0,r.Z)(_,2),j=g[0],w=g[1],k=(0,u.useState)({}),b=(0,r.Z)(k,2),y=b[0],S=b[1],U=(0,s.TH)(),C=null!==(e=null===(n=U.state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/";return(0,u.useEffect)((function(){(0,l.TP)(x.toString()).then((function(e){w(e.data),S({path:e.data.poster_path,size:"w342"})}))}),[x]),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(o.rU,{to:C,className:f,children:(0,c.jsx)(i,{})}),j&&(0,c.jsxs)("div",{className:d,children:[(0,c.jsx)("img",{src:"https://image.tmdb.org/t/p/".concat(y.size,"/").concat(y.path),alt:j.original_title}),(0,c.jsxs)("div",{className:h,children:[(0,c.jsxs)("h2",{children:[j.original_title,(0,c.jsxs)("span",{children:[" (",j.release_date.slice(0,4),")"]})]}),(0,c.jsxs)("p",{children:[(0,c.jsx)("span",{children:"User Score: "}),Math.trunc(10*j.vote_average),"%"]}),(0,c.jsx)("h3",{children:"Overview"}),(0,c.jsx)("p",{children:j.overview}),(0,c.jsx)("h4",{children:"Genres"}),(0,c.jsx)("ul",{className:p,children:j.genres.map((function(e){return(0,c.jsx)("li",{children:e.name},e.id)}))})]})]}),(0,c.jsx)("h3",{children:"Additional information"}),(0,c.jsxs)("ul",{children:[(0,c.jsx)("li",{children:(0,c.jsx)(o.rU,{to:"/movies/".concat(x,"/cast"),state:{from:null!==(t=null===U||void 0===U||null===(a=U.state)||void 0===a?void 0:a.from)&&void 0!==t?t:"/"},children:"Cast"})}),(0,c.jsx)("li",{children:(0,c.jsx)(o.rU,{to:"/movies/".concat(x,"/reviews"),state:{from:null!==(v=null===U||void 0===U||null===(m=U.state)||void 0===m?void 0:m.from)&&void 0!==v?v:"/"},children:"Reviews"})})]}),(0,c.jsx)(u.Suspense,{children:(0,c.jsx)(s.j3,{})})]})}},4390:function(e,n,t){t.d(n,{TP:function(){return d},dT:function(){return u},tx:function(){return p},z1:function(){return l},zv:function(){return h}});var r=t(5861),a=t(7757),c=t.n(a),i=t(4569),s=t.n(i),o="59483ef1407ef779ba79a4ef6c1e5236",u=function(){var e=(0,r.Z)(c().mark((function e(){var n,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new URLSearchParams({api_key:"".concat(o)}),t="https://api.themoviedb.org/3/trending/movie/day?".concat(n),e.next=4,s().get(t);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(c().mark((function e(n){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new URLSearchParams({query:"".concat(n),api_key:"".concat(o)}),r="https://api.themoviedb.org/3/search/movie?".concat(t),e.next=4,s().get(r);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(c().mark((function e(n){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new URLSearchParams({api_key:"".concat(o),language:"en - US"}),r="https://api.themoviedb.org/3/movie/".concat(n,"?").concat(t),e.next=4,s().get(r);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),h=function(){var e=(0,r.Z)(c().mark((function e(n){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new URLSearchParams({api_key:"".concat(o),language:"en - US"}),r="https://api.themoviedb.org/3/movie/".concat(n,"/credits?").concat(t),e.next=4,s().get(r);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(n){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new URLSearchParams({api_key:"".concat(o),language:"en - US"}),r="https://api.themoviedb.org/3/movie/".concat(n,"/reviews?").concat(t),e.next=4,s().get(r);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=298.4d4cdc49.chunk.js.map