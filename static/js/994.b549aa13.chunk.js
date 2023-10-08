"use strict";(self.webpackChunkmovie_viewer=self.webpackChunkmovie_viewer||[]).push([[994],{4290:function(n,t,e){e.d(t,{Z:function(){return i}});var r=e(5243),a=e(184),i=function(){return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(r.Z1,{height:"50",width:"50",color:"#86C232",wrapperStyle:{display:"flex",justifyContent:"center"},wrapperClass:"",visible:!0,ariaLabel:"three-circles-rotating",outerCircleColor:"",innerCircleColor:"#86C232",middleCircleColor:""})})}},1140:function(n,t){t.Z={movieBaseUrl:"https://api.themoviedb.org/3",lang:"en",weatherBaseUrl:"https://api.openweathermap.org/data/2.5/",movieApiKey:"644038bd8c4d79d1d14f251b1d12234c",weatherApiKey:"ca2a0f4edaa90d84bdf1a46fe31f6e51"}},6804:function(n,t,e){e.r(t),e.d(t,{default:function(){return D}});var r,a,i,o,s,c,u,p,l,f,m=e(4165),h=e(5861),d=e(9439),x=e(2791),v=e(7689),Z=e(5985),w=e(2554),g=e(4290),y=e(1414),b=e(1087),k=e(168),j=e(7691),S=j.ZP.ul(r||(r=(0,k.Z)(["\n  width: 100%;\n  margin-right: auto;\n  margin-left: auto;\n  display: grid;\n  gap: 30px;\n  max-width: calc(100vw - 20px);\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  @media (min-width: ","px) {\n    max-width: calc(100vw - 90px);\n    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  }\n"])),(function(n){return n.theme.breakpoints.values.md})),C=j.ZP.div(a||(a=(0,k.Z)(["\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  font-family: ",";\n  font-size: ",";\n  color: ",";\n  text-shadow: "," 1px 0px 0px,\n    "," 0px 1px 0px,\n    "," 0px -1px 0px,\n    "," -1px 0px 0px;\n  transition-duration: 250ms;\n  transition-property: color;\n  &:hover,\n  &:focus,\n  &:active {\n    color: ",";\n  }\n"])),(function(n){return n.theme.fonts.body}),(function(n){return n.theme.fontSizes.m}),(function(n){return n.theme.colors.light}),(function(n){return n.theme.colors.dark}),(function(n){return n.theme.colors.dark}),(function(n){return n.theme.colors.dark}),(function(n){return n.theme.colors.dark}),(function(n){return n.theme.colors.primary})),P=j.ZP.img(i||(i=(0,k.Z)(["\n  max-width: 300px;\n  object-fit: fill;\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  &:hover,\n  &:focus,\n  &:active {\n    transform: scale(1.03);\n  }\n  border-radius: 20px;\n  margin-bottom: 10px;\n  @media (min-width: ","px) {\n    max-width: 300px;\n    height: 450px;\n  }\n"])),(function(n){return n.theme.breakpoints.values.md})),T=j.ZP.p(o||(o=(0,k.Z)(["\n  margin-bottom: 5px;\n"]))),z=j.ZP.li(s||(s=(0,k.Z)(["\n  margin-bottom: 30px;\n  &:last-child {\n    margin-bottom: 0px;\n  }\n"]))),U=e(184),_=function(n){var t=n.movies,e=n.location;return(0,U.jsx)(w.Z,{children:(0,U.jsx)(S,{children:t.map((function(n){var t=n.id,r=n.title,a=n.poster_path,i=n.release_date;return(0,U.jsx)(z,{children:(0,U.jsx)(b.rU,{to:"/movie-viewer/movies/".concat(t),state:{from:e},children:(0,U.jsxs)(C,{children:[(0,U.jsx)(P,{src:"https://image.tmdb.org/t/p/w500".concat(a),alt:r}),(0,U.jsx)(T,{children:r}),(0,U.jsxs)(T,{children:["(",new Date(i).getUTCFullYear(),")"]})]})})},t)}))})})},F=e(1413),A=e(5717),E=(e(3037),e(8688),j.ZP.li(c||(c=(0,k.Z)([""])))),K=j.ZP.div(u||(u=(0,k.Z)(["\n  color: ",";\n  transition-duration: 250ms;\n  transition-property: all;\n  &:hover,\n  &:focus,\n  &:active {\n    color: ",";\n    transform: scale(1.03);\n  }\n"])),(function(n){return n.theme.colors.light}),(function(n){return n.theme.colors.primary})),O=j.ZP.img(p||(p=(0,k.Z)(["\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 5px;\n  border-radius: 10px;\n  max-width: 150px;\n  height: auto;\n"]))),q=j.ZP.p(l||(l=(0,k.Z)(["\n  text-align: center;\n  margin-bottom: 5px;\n  font-family: ",";\n  font-size: ",";\n  text-shadow: "," 1px 0px 0px,\n    "," 0px 1px 0px,\n    "," 0px -1px 0px,\n    "," -1px 0px 0px;\n"])),(function(n){return n.theme.fonts.body}),(function(n){return n.theme.fontSizes.s}),(function(n){return n.theme.colors.dark}),(function(n){return n.theme.colors.dark}),(function(n){return n.theme.colors.dark}),(function(n){return n.theme.colors.dark})),B=function(n){var t=n.shows,e=n.location;return(0,U.jsx)(w.Z,{children:(0,U.jsx)(A.Z,(0,F.Z)((0,F.Z)({},{dots:!0,arrows:!1,infinite:!0,speed:700,slidesToShow:8,slidesToScroll:1,accessibility:!1,adaptiveHeight:!0,focusOnSelect:!0,autoplay:!0,autoplaySpeed:2500,centerMode:!0,centerPadding:"5px",cssEase:"ease-in-out",responsive:[{breakpoint:1201,settings:{slidesToShow:5}},{breakpoint:769,settings:{slidesToShow:3}},{breakpoint:481,settings:{slidesToShow:2}}]}),{},{children:t.map((function(n){var t=n.id,r=n.name,a=n.poster_path,i=n.first_air_date;return(0,U.jsx)(E,{children:(0,U.jsx)(b.rU,{to:"/movie-viewer/tv-shows/".concat(t),state:{from:e},children:(0,U.jsxs)(K,{children:[(0,U.jsx)(O,{src:"https://image.tmdb.org/t/p/w500".concat(a),alt:r}),(0,U.jsx)(q,{children:r}),(0,U.jsx)(q,{children:new Date(i).getUTCFullYear()})]})})},t)}))}))})},L=j.ZP.h2(f||(f=(0,k.Z)(["\n  margin: 10px auto;\n  padding: 0 10px;\n  text-align: center;\n  font-family: ",";\n  font-size: ",";\n  color: ",";\n  text-shadow: "," 1px 0px 0px,\n    "," 0px 1px 0px,\n    "," 0px -1px 0px,\n    "," -1px 0px 0px;\n\n  @media (min-width: ","px) {\n    font-size: ",";\n    margin: 30px auto;\n  }\n"])),(function(n){return n.theme.fonts.body}),(function(n){return n.theme.fontSizes.m}),(function(n){return n.theme.colors.dark}),(function(n){return n.theme.colors.primary}),(function(n){return n.theme.colors.primary}),(function(n){return n.theme.colors.primary}),(function(n){return n.theme.colors.primary}),(function(n){return n.theme.breakpoints.values.md}),(function(n){return n.theme.fontSizes.l})),M=function(){var n=(0,x.useState)([]),t=(0,d.Z)(n,2),e=t[0],r=t[1],a=(0,x.useState)([]),i=(0,d.Z)(a,2),o=i[0],s=i[1],c=(0,x.useState)(!1),u=(0,d.Z)(c,2),p=u[0],l=u[1],f=(0,v.TH)();return(0,x.useEffect)((function(){var n=function(){var n=(0,h.Z)((0,m.Z)().mark((function n(){var t;return(0,m.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,y.Oq)();case 3:t=n.sent,r(t),l(!1),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),Z.Am.error("Oops! Something went wrong!");case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(){return n.apply(this,arguments)}}();n(),l(!0)}),[]),(0,x.useEffect)((function(){var n=function(){var n=(0,h.Z)((0,m.Z)().mark((function n(){var t;return(0,m.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,y.XF)();case 3:t=n.sent,s(t),l(!1),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),Z.Am.error("Oops! Something went wrong!");case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(){return n.apply(this,arguments)}}();n(),l(!0)}),[]),(0,U.jsx)(w.Z,{children:p?(0,U.jsx)("div",{children:(0,U.jsx)(g.Z,{})}):(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(L,{children:"Most popular TV shows"}),o&&(0,U.jsx)(B,{shows:o,location:f}),(0,U.jsx)(L,{children:"Trending movies for the WEEK"}),e&&(0,U.jsx)(_,{movies:e,location:f})]})})},D=M},1414:function(n,t,e){e.d(t,{FL:function(){return p},IQ:function(){return f},J8:function(){return j},M1:function(){return g},Oq:function(){return c},R0:function(){return b},XF:function(){return h},tx:function(){return Z},xK:function(){return x}});var r=e(4165),a=e(5861),i=e(3263),o=e(1140),s=i.Z.create({baseURL:o.Z.movieBaseUrl,language:"en-US",params:{api_key:o.Z.movieApiKey,language:o.Z.lang,page:1}});function c(){return u.apply(this,arguments)}function u(){return(u=(0,a.Z)((0,r.Z)().mark((function n(){var t;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.get("/trending/movie/week");case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function p(n){return l.apply(this,arguments)}function l(){return(l=(0,a.Z)((0,r.Z)().mark((function n(t){var e;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.get("/movie/".concat(t));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function f(n){return m.apply(this,arguments)}function m(){return(m=(0,a.Z)((0,r.Z)().mark((function n(t){var e;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.get("/search/multi",{params:{query:t}});case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(){return d.apply(this,arguments)}function d(){return(d=(0,a.Z)((0,r.Z)().mark((function n(){var t;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.get("/tv/top_rated");case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(n){return v.apply(this,arguments)}function v(){return(v=(0,a.Z)((0,r.Z)().mark((function n(t){var e;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.get("/tv/".concat(t));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function Z(n){return w.apply(this,arguments)}function w(){return(w=(0,a.Z)((0,r.Z)().mark((function n(t){var e;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.get("/movie/".concat(t,"/reviews"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function g(n){return y.apply(this,arguments)}function y(){return(y=(0,a.Z)((0,r.Z)().mark((function n(t){var e;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.get("/movie/".concat(t,"/credits"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function b(n){return k.apply(this,arguments)}function k(){return(k=(0,a.Z)((0,r.Z)().mark((function n(t){var e;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.get("/tv/".concat(t,"/reviews"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function j(n){return S.apply(this,arguments)}function S(){return(S=(0,a.Z)((0,r.Z)().mark((function n(t){var e;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.get("/tv/".concat(t,"/credits"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=994.b549aa13.chunk.js.map