(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{12:function(e,a,t){e.exports={wrapper:"SearchResult_wrapper__19YsQ",imageWrapper:"SearchResult_imageWrapper__2XwYH",img:"SearchResult_img__1U3KA",favoriteBtn:"SearchResult_favoriteBtn__3yFuc",addToFavourite:"SearchResult_addToFavourite__2hBUN",removeFromFavorite:"SearchResult_removeFromFavorite__beYdT",meta:"SearchResult_meta__WUbfw",author:"SearchResult_author__wpzmJ",authorImg:"SearchResult_authorImg__2Mbnz",download:"SearchResult_download__TJzGu",loadMore:"SearchResult_loadMore__FfcfY"}},16:function(e,a,t){e.exports={photoOfTheDayWrapper:"FrontPage_photoOfTheDayWrapper__1KX8f",searchWrapper:"FrontPage_searchWrapper__A0HaJ",author:"FrontPage_author__2XbML",authorLink:"FrontPage_authorLink__XzaR2"}},23:function(e,a,t){e.exports={wrapper:"Search_wrapper__Zf9Rf",search:"Search_search__cwvrF",searchBtn:"Search_searchBtn__35YZT"}},24:function(e,a,t){e.exports={wrapper:"Navbar_wrapper__3S51h",link:"Navbar_link__2InqO",active:"Navbar_active__2qZxX"}},28:function(e,a,t){e.exports={title:"Favorites_title__7gXan",emptyMessage:"Favorites_emptyMessage__3CHuE"}},42:function(e,a,t){e.exports={title:"Category_title__FNxx4"}},51:function(e,a,t){},79:function(e,a,t){"use strict";t.r(a);var r=t(0),o=t.n(r),n=t(21),s=t.n(n),c=(t(51),t(5)),i=t(13),l=t(3),u=t(15),m=t(30),d=t(4),v=t(41),h=t.n(v).a.create({async:!0,crossDomain:!0,baseURL:"https://api.unsplash.com/",headers:{Authorization:"Client-ID qXCBYZN4wpl1CgwUetVO065t1KDgVr8ZDY-LVFemqQo"}}),g=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:12;return h.get("search/photos?page=".concat(a,"&per_page=").concat(t,"&query=").concat(e)).then((function(e){return e.data}))},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return h.get("photos/random?count=".concat(e)).then((function(e){return e.data}))},p=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return h.get("/collections/".concat(e,"/photos?per_page=").concat(a)).then((function(e){return e.data}))},j="gallery/images/SET_SEARCH_RESULT",b="gallery/images/SET_FAVORITE_IMAGES",_="gallery/images/SET_RANDOM_IMAGES",O="gallery/images/SET_PHOTO_OF_THE_DAY",I={searchResult:{results:[]},favoriteImages:{},randomImages:{},photoOfTheDay:null},y=function(e){return{type:j,payload:e}},x=function(e){var a=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t=arguments.length>2?arguments[2]:void 0,r=arguments.length>3?arguments[3]:void 0;return function(o){g(e,t,r).then((function(e){o(y(Object(d.a)(Object(d.a)({},e),{},{isLoadMore:a})))}))}},N=function(e){return function(a){var t=JSON.parse(localStorage.getItem("favoriteImages"))||[];t.push(e),localStorage.setItem("favoriteImages",JSON.stringify(t)),a(R())}},F=function(e){return function(a){var t=(JSON.parse(localStorage.getItem("favoriteImages"))||[]).filter((function(a){return a.id!==e}));localStorage.setItem("favoriteImages",JSON.stringify(t)),a(R())}},R=function(){return function(e){var a=JSON.parse(localStorage.getItem("favoriteImages"))||[];e({type:b,payload:a})}},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case j:var t;return t=a.payload.isLoadMore?Object(d.a)(Object(d.a)({},a.payload),{},{results:[].concat(Object(m.a)(e.searchResult.results),Object(m.a)(a.payload.results))}):a.payload,Object(d.a)(Object(d.a)({},e),{},{searchResult:t});case b:return Object(d.a)(Object(d.a)({},e),{},{favoriteImages:{results:a.payload}});case _:return Object(d.a)(Object(d.a)({},e),{},{randomImages:{results:a.payload}});case O:return Object(d.a)(Object(d.a)({},e),{},{photoOfTheDay:a.payload});default:return e}},w=t(12),T=t.n(w),D=t(1),M=function(e){var a,t,o,n,s,c=Object(r.useState)(1),i=Object(u.a)(c,2),l=i[0],m=i[1];return Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)("div",{className:T.a.wrapper,children:null===(a=e.searchResult)||void 0===a||null===(t=a.results)||void 0===t?void 0:t.map((function(a){return Object(D.jsxs)("div",{className:T.a.imageWrapper,children:[Object(D.jsx)("img",{src:a.urls.small,className:T.a.img,alt:a.alt_description}),Object(D.jsx)("button",{onClick:function(){return e.favoriteImagesIds.includes(a.id)?e.removeFavoriteImage(a.id):e.addFavoriteImage(a)},className:"".concat(T.a.favoriteBtn,"\n                            ").concat(e.favoriteImagesIds.includes(a.id)?T.a.removeFromFavorite:T.a.addToFavourite,"\n                        "),title:e.favoriteImagesIds.includes(a.id)?"Remove from favorite":"Add to favourite",children:"Add to favorite"}),Object(D.jsxs)("div",{className:T.a.meta,children:[Object(D.jsxs)("div",{className:T.a.author,children:[Object(D.jsx)("img",{src:a.user.profile_image.small,alt:"".concat(a.user.first_name," ").concat(a.user.last_name),className:T.a.authorImg}),Object(D.jsxs)("div",{className:T.a.authorName,children:[a.user.first_name," ",a.user.last_name]})]}),Object(D.jsx)("a",{className:T.a.download,href:a.urls.full,download:!0,target:"_blank",rel:"noopener noreferrer",onClick:function(e){return function(e,a){e.preventDefault(),fetch(e.target.href,{method:"GET",headers:{}}).then((function(e){e.arrayBuffer().then((function(e){var t=window.URL.createObjectURL(new Blob([e])),r=document.createElement("a");r.href=t,r.setAttribute("download",a),document.body.appendChild(r),r.click(),document.body.removeChild(r)}))})).catch((function(e){console.log(e)}))}(e,"".concat(a.id,".jpg"))},children:"Download"})]})]},a.id)}))}),(null===(o=e.searchResult)||void 0===o||null===(n=o.results)||void 0===n?void 0:n.length)<(null===(s=e.searchResult)||void 0===s?void 0:s.total)&&Object(D.jsx)("button",{className:T.a.loadMore,onClick:function(){m(l+1),e.getSearchResult(e.searchKeyword,!0,l+1)},children:"Load more"})]})},E=t(42),C=t.n(E),A=function(e){return Object(D.jsxs)("div",{className:"container",children:[Object(D.jsx)("h1",{className:C.a.title,children:e.title}),Object(D.jsx)(M,{searchKeyword:e.searchKeyword,searchResult:e.searchResult,addFavoriteImage:e.addFavoriteImage,removeFavoriteImage:e.removeFavoriteImage,favoriteImagesIds:e.favoriteImagesIds,getSearchResult:e.getSearchResult})]})},L=[{url:"architecture-interior",name:"Architecture & Interior"},{url:"nature",name:"Nature"},{url:"sport",name:"Sport"},{url:"news",name:"News"},{url:"international",name:"International"},{url:"masterpieces",name:"Masterpieces"},{url:"spacex",name:"SpaceX"},{url:"earth",name:"Earth"}],W=Object(c.b)((function(e){var a,t;return{searchResult:e.images.searchResult,favoriteImagesIds:null===(a=e.images.favoriteImages)||void 0===a||null===(t=a.results)||void 0===t?void 0:t.map((function(e){return e.id}))}}),{getSearchResult:x,addFavoriteImage:N,removeFavoriteImage:F})((function(e){var a=Object(r.useState)(""),t=Object(u.a)(a,2),o=t[0],n=t[1];return Object(r.useEffect)((function(){for(var a=0;a<L.length;a++)if(L[a].url===e.match.params.categoryName)return n(L[a].name),e.getSearchResult(L[a].name)}),[e.match.params.categoryName]),Object(D.jsx)(A,{title:o,searchKeyword:o,searchResult:e.searchResult,addFavoriteImage:e.addFavoriteImage,removeFavoriteImage:e.removeFavoriteImage,favoriteImagesIds:e.favoriteImagesIds,getSearchResult:e.getSearchResult})})),H=t(28),k=t.n(H),K=function(e){var a;return Object(D.jsxs)("div",{className:"container",children:[Object(D.jsx)("h1",{className:k.a.title,children:"Favorites"}),(null===(a=e.favoriteImages.results)||void 0===a?void 0:a.length)?Object(D.jsx)(M,{searchResult:e.favoriteImages,favoriteImagesIds:e.favoriteImagesIds,removeFavoriteImage:e.removeFavoriteImage}):Object(D.jsx)("div",{className:k.a.emptyMessage,children:"Please add your first favorite photo"})]})},B=Object(c.b)((function(e){return{favoriteImages:e.images.favoriteImages}}),{getFavoriteImages:R,removeFavoriteImage:F})((function(e){var a,t;return Object(r.useEffect)((function(){e.getFavoriteImages()}),[]),Object(D.jsx)(K,{favoriteImages:e.favoriteImages,favoriteImagesIds:null===(a=e.favoriteImages)||void 0===a||null===(t=a.results)||void 0===t?void 0:t.map((function(e){return e.id})),removeFavoriteImage:e.removeFavoriteImage})})),P=t(46),z="gallery/app/IS_INITIALIZED",J="gallery/app/SEARCH_KEYWORD",U={isInitialized:!1,searchKeyword:""},X=function(){return function(e){var a=[e(R())];Promise.all(a).then((function(){e({type:z})}))}},Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case z:return Object(d.a)(Object(d.a)({},e),{},{isInitialized:!0});case J:return Object(d.a)(Object(d.a)({},e),{},{searchKeyword:a.payload});default:return e}},Z=t(23),q=t.n(Z),G=function(e){var a=Object(c.c)(),t=Object(l.e)(),r=Object(c.d)((function(e){return e.app.searchKeyword})),o=function(e){var t;a((t=e.target.value,{type:J,payload:t}))};return Object(D.jsxs)("div",{className:q.a.wrapper,children:[Object(D.jsx)("input",{className:q.a.search,onChange:function(e){return o(e)},placeholder:"Search free high-resolution photos"}),Object(D.jsx)("button",{className:q.a.searchBtn,onClick:function(){a(x(r)),t.push("/search")}})]})},V=t(16),Q=t.n(V),$=["photoOfTheDay","randomImages"],ee=function(e){var a,t,r,o,n=e.photoOfTheDay,s=e.randomImages,c=Object(P.a)(e,$);return Object(D.jsxs)("div",{children:[Object(D.jsxs)("div",{className:Q.a.photoOfTheDayWrapper,children:[Object(D.jsx)("div",{className:Q.a.searchWrapper,children:Object(D.jsx)(G,{})}),n&&Object(D.jsx)("img",{className:Q.a.photoOfTheDay,src:n.urls.full,alt:n.alt_description||"photo of the day"}),Object(D.jsxs)("div",{className:Q.a.author,children:["Photo of the Day by"," ",Object(D.jsxs)("a",{className:Q.a.authorLink,href:null===n||void 0===n||null===(a=n.user)||void 0===a||null===(t=a.links)||void 0===t?void 0:t.html,target:"_blank",rel:"noopener noreferrer",children:[null===n||void 0===n||null===(r=n.user)||void 0===r?void 0:r.first_name," ",null===n||void 0===n||null===(o=n.user)||void 0===o?void 0:o.last_name," "]})]})]}),Object(D.jsx)("div",{className:"container",children:Object(D.jsx)(M,{searchResult:s,addFavoriteImage:c.addFavoriteImage,favoriteImagesIds:c.favoriteImagesIds,removeFavoriteImage:c.removeFavoriteImage})})]})},ae=Object(c.b)((function(e){var a,t;return{randomImages:e.images.randomImages,photoOfTheDay:e.images.photoOfTheDay,favoriteImagesIds:null===(a=e.images.favoriteImages)||void 0===a||null===(t=a.results)||void 0===t?void 0:t.map((function(e){return e.id}))}}),{getRandomImages:function(e){return function(a){f(e).then((function(e){a({type:_,payload:e})}))}},addFavoriteImage:N,getPhotoOfTheDay:function(){return function(e){p(1459961,1).then((function(a){var t;e((t=a[0],{type:O,payload:t}))}))}},removeFavoriteImage:F})((function(e){return Object(r.useEffect)((function(){e.getRandomImages(24),e.getPhotoOfTheDay()}),[]),Object(D.jsx)(ee,{randomImages:e.randomImages,addFavoriteImage:e.addFavoriteImage,photoOfTheDay:e.photoOfTheDay,favoriteImagesIds:e.favoriteImagesIds,removeFavoriteImage:e.removeFavoriteImage})})),te=t(24),re=t.n(te),oe=function(){return Object(D.jsx)("nav",{className:re.a.wrapper,children:L.map((function(e){return Object(D.jsx)(i.b,{className:re.a.link,activeClassName:re.a.active,to:"/category/".concat(e.url),children:e.name},e.url)}))})},ne=t(8),se=t.n(ne),ce=t.p+"static/media/logo.5c417410.svg",ie=function(e){var a=Object(r.useState)(!0),t=Object(u.a)(a,2),o=t[0],n=t[1];return Object(r.useEffect)((function(){var e=function(){window.innerWidth<768?n(!1):n(!0)};return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}})),Object(D.jsxs)("div",{className:se.a.wrapper,children:[Object(D.jsxs)("div",{className:"".concat(se.a.mobileMenu," ").concat(o&&se.a.mobileMenuActive),onClick:function(){return n(!o)},children:[Object(D.jsx)("span",{className:se.a.mobileMenuItem}),Object(D.jsx)("span",{className:se.a.mobileMenuItem}),Object(D.jsx)("span",{className:se.a.mobileMenuItem})]}),o&&Object(D.jsxs)(D.Fragment,{children:[Object(D.jsxs)("div",{className:se.a.top,children:[Object(D.jsxs)("div",{className:se.a.logoWrapper,children:[Object(D.jsx)(i.b,{to:"/",children:Object(D.jsx)("img",{className:se.a.logo,src:ce,alt:"unsplash logo"})}),Object(D.jsxs)("div",{className:se.a.siteNameWrapper,children:[Object(D.jsx)("div",{className:se.a.siteName,children:"Unsplash clone"}),Object(D.jsx)("div",{className:se.a.slogan,children:"Photos for everyone"})]})]}),Object(D.jsx)(G,{}),Object(D.jsx)(i.b,{className:se.a.favorites,to:"/favorites",children:"Favorites"})]}),Object(D.jsx)(oe,{})]})]})},le=Object(c.b)((function(e){var a,t;return{searchResult:e.images.searchResult,favoriteImagesIds:null===(a=e.images.favoriteImages)||void 0===a||null===(t=a.results)||void 0===t?void 0:t.map((function(e){return e.id})),searchKeyword:e.app.searchKeyword}}),{getSearchResult:x,addFavoriteImage:N,removeFavoriteImage:F})((function(e){return Object(D.jsx)(M,{searchResult:e.searchResult,favoriteImagesIds:e.favoriteImagesIds,addFavoriteImage:e.addFavoriteImage,removeFavoriteImage:e.removeFavoriteImage,searchKeyword:e.searchKeyword,getSearchResult:e.getSearchResult})})),ue=function(){var e=Object(c.c)();return Object(r.useEffect)((function(){e(X())}),[]),Object(D.jsx)(i.a,{children:Object(D.jsxs)("div",{className:"app-wrapper",children:[Object(D.jsx)(ie,{}),Object(D.jsxs)("div",{children:[Object(D.jsx)(l.a,{exact:!0,path:"/",component:ae}),Object(D.jsx)(l.a,{exact:!0,path:"/search",component:le}),Object(D.jsx)(l.a,{path:"/category/:categoryName",component:W}),Object(D.jsx)(l.a,{path:"/favorites",component:B})]})]})})},me=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,80)).then((function(a){var t=a.getCLS,r=a.getFID,o=a.getFCP,n=a.getLCP,s=a.getTTFB;t(e),r(e),o(e),n(e),s(e)}))},de=t(25),ve=t(44),he=t.n(ve),ge=t(45),fe=Object(de.b)({app:Y,images:S}),pe=[ge.a,he.a],je=Object(de.c)(fe,de.a.apply(void 0,pe));s.a.render(Object(D.jsx)(o.a.StrictMode,{children:Object(D.jsx)(c.a,{store:je,children:Object(D.jsx)(ue,{})})}),document.getElementById("root")),me()},8:function(e,a,t){e.exports={wrapper:"Header_wrapper__BNuWI",mobileMenu:"Header_mobileMenu__22PMX",top:"Header_top__3hrz_",logoWrapper:"Header_logoWrapper__fTcKm",logo:"Header_logo__7ywCu",siteNameWrapper:"Header_siteNameWrapper__2axCE",siteName:"Header_siteName__1Bma_",slogan:"Header_slogan__330tA",favorites:"Header_favorites__2Uey_",mobileMenuItem:"Header_mobileMenuItem__3LDLr",mobileMenuActive:"Header_mobileMenuActive__3tjGV"}}},[[79,1,2]]]);
//# sourceMappingURL=main.c00e41a8.chunk.js.map