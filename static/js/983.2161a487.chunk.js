"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[983],{854:function(t,n,r){var e=r(154),a=r(184);n.Z=function(){return(0,a.jsx)(e.Jv,{visible:!0,height:"80",width:"80",ariaLabel:"dna-loading",wrapperStyle:{},wrapperClass:"dna-wrapper"})}},243:function(t,n,r){var e=r(87),a=r(184);n.Z=function(t){var n=t.movies,r=t.location;return(0,a.jsx)("div",{className:"box-home",children:(0,a.jsx)("ul",{className:"box-home__list",children:n.map((function(t){var n=t.original_title,c=t.id;return void 0!==n&&(0,a.jsx)("li",{children:(0,a.jsx)(e.rU,{to:"/movies/".concat(c),state:{from:r},children:n})},c)}))})})}},983:function(t,n,r){r.r(n);var e=r(861),a=r(439),c=r(757),u=r.n(c),i=r(854),s=r(243),o=r(791),f=r(689),p=r(323),v=r(184);n.default=function(){var t=(0,o.useState)([]),n=(0,a.Z)(t,2),r=n[0],c=n[1],l=(0,o.useState)(!1),d=(0,a.Z)(l,2),h=d[0],m=d[1],x=(0,f.TH)();return(0,o.useEffect)((function(){m(!0);var t=function(){var t=(0,e.Z)(u().mark((function t(){var n,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,p.f9)();case 3:n=t.sent,r=n.results,c(r),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log("Error:",t.t0.message);case 11:return t.prev=11,m(!1),t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[0,8,11,14]])})));return function(){return t.apply(this,arguments)}}();t()}),[]),(0,v.jsxs)(v.Fragment,{children:[h&&(0,v.jsx)(i.Z,{}),(0,v.jsx)(s.Z,{movies:r,location:x})]})}},323:function(t,n,r){r.d(n,{M1:function(){return f},f9:function(){return s},q:function(){return v},tx:function(){return p},yK:function(){return o}});var e=r(861),a=r(757),c=r.n(a),u=r(294);u.Z.defaults.baseURL="https://api.themoviedb.org/3";var i="394f8b3fe0f5b61255381d3d4a3e1141",s=function(){var t=(0,e.Z)(c().mark((function t(){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/trending/all/day?api_key=".concat(i));case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),o=function(){var t=(0,e.Z)(c().mark((function t(n){var r,e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/movie/".concat(n,"?api_key=").concat(i,"&language=en-US"));case 2:return r=t.sent,e=r.data,t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),f=function(){var t=(0,e.Z)(c().mark((function t(n){var r,e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/movie/".concat(n,"/credits?api_key=").concat(i));case 2:return r=t.sent,e=r.data,t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),p=function(){var t=(0,e.Z)(c().mark((function t(n){var r,e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/movie/".concat(n,"/reviews?api_key=").concat(i));case 2:return r=t.sent,e=r.data,t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),v=function(){var t=(0,e.Z)(c().mark((function t(n){var r,e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/search/movie?query=".concat(n,"&api_key=").concat(i));case 2:return r=t.sent,e=r.data,t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=983.2161a487.chunk.js.map