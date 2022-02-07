"use strict";(self.webpackChunkapi_docs=self.webpackChunkapi_docs||[]).push([[7483],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return g}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=p(n),g=o,f=d["".concat(l,".").concat(g)]||d[g]||s[g]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8781:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],c={},l="Localization",p={unversionedId:"overview/localization",id:"overview/localization",title:"Localization",description:"The viagogo API supports various request headers to return locale-specific",source:"@site/docs/overview/localization.md",sourceDirName:"overview",slug:"/overview/localization",permalink:"/docs/overview/localization",editUrl:"https://github.com/viagogo/viagogo-api-docs/tree/main/docs/overview/localization.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Sorting",permalink:"/docs/overview/sorting"},next:{title:"Sparse Fieldsets",permalink:"/docs/overview/sparse-fieldsets"}},u=[{value:"Accept-Language Header",id:"accept-language-header",children:[],level:2},{value:"VGG-Country Header",id:"vgg-country-header",children:[],level:2}],s={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"localization"},"Localization"),(0,a.kt)("p",null,"The viagogo API supports various request headers to return locale-specific\ncontent in responses."),(0,a.kt)("h2",{id:"accept-language-header"},"Accept-Language Header"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Accept-Language")," header can be used to determine the language of the API\nresponse content (e.g. event names and error messages). Content will be returned\nin English if no ",(0,a.kt)("inlineCode",{parentName:"p"},"Accept-Language")," header is provided, or viagogo does not\ncurrently support the requested language codes."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Accept-Language: da, en-gb;q=0.8, en;q=0.7")),(0,a.kt)("p",null,'In the example header above, the request is specifying "I prefer Danish, but\nwill accept British English and other types of English." See more information\nabout the ',(0,a.kt)("a",{parentName:"p",href:"http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.4"},"Accept-Language header"),"."),(0,a.kt)("h2",{id:"vgg-country-header"},"VGG-Country Header"),(0,a.kt)("p",null,"Applications can include the ",(0,a.kt)("inlineCode",{parentName:"p"},"VGG-Country")," header to change the\ngeography-context of requests. Each domain of the viagogo website is referred to\nas a ",(0,a.kt)("em",{parentName:"p"},"geography")," that has its own category-structure and language, currency and\ncontent defaults. The value of the ",(0,a.kt)("inlineCode",{parentName:"p"},"VGG-Country")," header should be a two-letter\ncountry code as defined by ",(0,a.kt)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/ISO_3166-1"},"ISO 3166"),". If an application does not\nprovide a ",(0,a.kt)("inlineCode",{parentName:"p"},"VGG-Country")," header then the API will default to the ",(0,a.kt)("em",{parentName:"p"},"US")," geography\n(",(0,a.kt)("a",{parentName:"p",href:"http://www.viagogo.com"},"www.viagogo.com"),")."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"VGG-Country: FR")),(0,a.kt)("p",null,"In the example above, the application is specifying that it would like make\nrequests in the French geography (as if the client were using the ",(0,a.kt)("a",{parentName:"p",href:"http://www.viagogo.fr"},"www.viagogo.fr"),"\nwebsite)."))}d.isMDXComponent=!0}}]);