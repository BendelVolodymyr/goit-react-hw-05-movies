"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[797],{854:function(t,e,r){var n=r(154),a=r(184);e.Z=function(){return(0,a.jsx)(n.Jv,{visible:!0,height:"80",width:"80",ariaLabel:"dna-loading",wrapperStyle:{},wrapperClass:"dna-wrapper"})}},243:function(t,e,r){var n=r(87),a=r(184);e.Z=function(t){var e=t.movies,r=t.location;return(0,a.jsx)("div",{children:(0,a.jsx)("ul",{children:e.map((function(t){var e=t.original_title,c=t.id;return void 0!==e&&(0,a.jsx)("li",{children:(0,a.jsx)(n.rU,{to:"/movies/".concat(c),state:{from:r},children:e})},c)}))})})}},797:function(t,e,r){r.r(e);var n=r(861),a=r(439),c=r(757),u=r.n(c),i=r(854),s=r(243),o=r(791),f=r(87),p=r(689),v=r(323),l=r(184);e.default=function(){var t=(0,f.lr)(),e=(0,a.Z)(t,2)[1],r=(0,o.useState)(""),c=(0,a.Z)(r,2),h=c[0],d=c[1],m=(0,o.useState)(!1),x=(0,a.Z)(m,2),w=x[0],Z=x[1],g=(0,o.useState)([]),b=(0,a.Z)(g,2),y=b[0],k=b[1],_=(0,p.TH)();(0,o.useEffect)((function(){""!==_.search&&j(_.search.slice(8))}),[_.search]);var j=function(){var t=(0,n.Z)(u().mark((function t(e){var r,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return Z(!0),t.prev=1,t.next=4,(0,v.q)(e);case 4:r=t.sent,n=r.results,k(n),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),console.log("Error:",t.t0.message);case 12:return t.prev=12,Z(!1),t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[1,9,12,15]])})));return function(e){return t.apply(this,arguments)}}();return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("form",{onSubmit:function(t){if(t.preventDefault(),!h.trim())return alert("Can not be empty");j(h),e({search:h}),d("")},children:[(0,l.jsx)("input",{type:"text",placeholder:"Search",name:"search",value:h,onChange:function(t){d(t.currentTarget.value)}}),(0,l.jsx)("button",{type:"submit"})]}),w&&(0,l.jsx)(i.Z,{}),(0,l.jsx)(s.Z,{movies:y,location:_})]})}},323:function(t,e,r){r.d(e,{M1:function(){return f},f9:function(){return s},q:function(){return v},tx:function(){return p},yK:function(){return o}});var n=r(861),a=r(757),c=r.n(a),u=r(294);u.Z.defaults.baseURL="https://api.themoviedb.org/3";var i="394f8b3fe0f5b61255381d3d4a3e1141",s=function(){var t=(0,n.Z)(c().mark((function t(){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/trending/all/day?api_key=".concat(i));case 2:return e=t.sent,r=e.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),o=function(){var t=(0,n.Z)(c().mark((function t(e){var r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/movie/".concat(e,"?api_key=").concat(i,"&language=en-US"));case 2:return r=t.sent,n=r.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,n.Z)(c().mark((function t(e){var r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/movie/".concat(e,"/credits?api_key=").concat(i));case 2:return r=t.sent,n=r.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,n.Z)(c().mark((function t(e){var r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/movie/".concat(e,"/reviews?api_key=").concat(i));case 2:return r=t.sent,n=r.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),v=function(){var t=(0,n.Z)(c().mark((function t(e){var r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/search/movie?query=".concat(e,"&api_key=").concat(i));case 2:return r=t.sent,n=r.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=797.3202cf83.chunk.js.map