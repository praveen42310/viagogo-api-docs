"use strict";(self.webpackChunkapi_docs=self.webpackChunkapi_docs||[]).push([[2504],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),s=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(t),m=a,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||i;return t?r.createElement(f,o(o({ref:n},c),{},{components:t})):r.createElement(f,o({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8215:function(e,n,t){var r=t(7294);n.Z=function(e){var n=e.children,t=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:t,className:a},n)}},6396:function(e,n,t){t.d(n,{Z:function(){return d}});var r=t(7462),a=t(7294),i=t(2389),o=t(9443);var l=function(){var e=(0,a.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},u=t(3616),s=t(6010),c="tabItem_vU9c";function p(e){var n,t,i,o=e.lazy,p=e.block,d=e.defaultValue,m=e.values,f=e.groupId,g=e.className,v=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=m?m:v.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),h=(0,u.lx)(y,(function(e,n){return e.value===n.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===d?d:null!=(n=null!=d?d:null==(t=v.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(i=v[0])?void 0:i.props.value;if(null!==b&&!y.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+y.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=l(),T=w.tabGroupChoices,k=w.setTabGroupChoices,O=(0,a.useState)(b),E=O[0],C=O[1],N=[],x=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var P=T[f];null!=P&&P!==E&&y.some((function(e){return e.value===P}))&&C(P)}var S=function(e){var n=e.currentTarget,t=N.indexOf(n),r=y[t].value;r!==E&&(x(n),C(r),null!=f&&k(f,r))},D=function(e){var n,t=null;switch(e.key){case"ArrowRight":var r=N.indexOf(e.currentTarget)+1;t=N[r]||N[0];break;case"ArrowLeft":var a=N.indexOf(e.currentTarget)-1;t=N[a]||N[N.length-1]}null==(n=t)||n.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":p},g)},y.map((function(e){var n=e.value,t=e.label,i=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:E===n?0:-1,"aria-selected":E===n,key:n,ref:function(e){return N.push(e)},onKeyDown:D,onFocus:S,onClick:S},i,{className:(0,s.Z)("tabs__item",c,null==i?void 0:i.className,{"tabs__item--active":E===n})}),null!=t?t:n)}))),o?(0,a.cloneElement)(v.filter((function(e){return e.props.value===E}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},v.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==E})}))))}function d(e){var n=(0,i.Z)();return a.createElement(p,(0,r.Z)({key:String(n)},e))}},6338:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return d},default:function(){return f}});var r=t(7462),a=t(3366),i=(t(7294),t(3905)),o=t(6396),l=t(8215),u=["components"],s={description:"Create listings on the viagogo platform."},c="Creating a Listing",p={unversionedId:"guides/creating-a-listing",id:"guides/creating-a-listing",title:"Creating a Listing",description:"Create listings on the viagogo platform.",source:"@site/docs/guides/creating-a-listing.mdx",sourceDirName:"guides",slug:"/guides/creating-a-listing",permalink:"/docs/guides/creating-a-listing",editUrl:"https://github.com/viagogo/viagogo-api-docs/tree/main/docs/guides/creating-a-listing.mdx",tags:[],version:"current",frontMatter:{description:"Create listings on the viagogo platform."},sidebar:"docs",previous:{title:"Guides",permalink:"/docs/guides/"}},d=[],m={toc:d};function f(e){var n=e.components,t=(0,a.Z)(e,u);return(0,i.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"creating-a-listing"},"Creating a Listing"),(0,i.kt)("p",null,"The recommended way to create listings is to use the ",(0,i.kt)("a",{parentName:"p",href:"/api-reference/inventory/#operation/SellerListings_CreateListingForRequestedEvent"},"Create Listings for Requested Events"),"\nendpoint. This endpoint accepts text values for all the event information (e.g. name, local date,\nvenue name, venue city and venue country) and the viagogo API will attempt to map this to an event\non the viagogo platform."),(0,i.kt)("p",null,"We recommend using this endpoint for creating listings so that your listing\ncan be created even if the event you are listing for does not exist on the viagogo platform yet.\nThe event will then get created asynchronously and go live on the platform with your listing\nattached."),(0,i.kt)("p",null,"To prevent duplication of listings in our system due to race conditions, it is recommended that you\nprovide an ",(0,i.kt)("inlineCode",{parentName:"p"},"external_id")," ( the Id of the listing in your system when creating a listing). If an\nattempt is made to create a listing with an ",(0,i.kt)("inlineCode",{parentName:"p"},"external_id")," that already exists for your user, then we\nwill delete the old listing and create the new one."),(0,i.kt)("p",null,"The following code creates a listing via this mechanism."),(0,i.kt)(o.Z,{mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"csharp",label:"C#",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'var token = "PLEASE_SET_TOKEN";\nvar environment = ApiEnvironment.Sandbox;\nvar config = new GogoKitConfiguration() { ViagogoApiEnvironment = environment };\nvar client = new ViagogoClient(new ProductHeaderValue("APPLICATION_NAME", "1.0"),\n    config,\n    new InMemoryOAuth2TokenStore());\nawait client.TokenStore.SetTokenAsync(new OAuth2Token() { AccessToken = token, ExpiresIn = int.MaxValue, IssueDate = DateTimeOffset.Now });\n\nvar newListing = new NewRequestedEventSellerListing\n{\n\n            ExternalId = "Your_Arbitrary_Id",\n            Seating = new Seating\n    {\n            Section = "101",\n            Row = "a",\n            SeatFrom = "3",\n            SeatTo = "5"\n        },\n    TicketPrice = new Money\n    {\n            Amount = 150,\n            Currency = "USD"\n        },\n    FaceValue = new Money\n    {\n            Amount = 200,\n            Currency = "USD"\n        },\n    TicketType = "ETicket",\n    SplitType = "None",\n    NumberOfTickets = 4,\n    DisplayNumberOfTickets = 2,\n    Event = new Event\n    {\n            Name = "Dreams Come True",\n            StartDate = new DateTimeOffset(2025, 11, 28, 15, 30, 0, new TimeSpan(9, 0, 0)),\n            Venue = new Venue\n            {\n            Name = "Osaka Jo Hall",\n            City = "Osaka",\n            StateProvince = "Kansai",\n            Country = new Country {Code = "JP"}\n            }\n    },\n    Venue = new Venue\n    {\n            Name = "Osaka Jo Hall",\n            City = "Osaka",\n            Country = new Country {Code = "JP"}\n    }\n};\n\nvar listing = await client.SellerListings.CreateAsync(newListing);\n'))),(0,i.kt)(l.Z,{value:"ruby",label:"Ruby",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ruby"},"# TODO\n"))),(0,i.kt)(l.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"# TODO\n"))),(0,i.kt)(l.Z,{value:"php",label:"PHP",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"// TODO\n")))))}f.isMDXComponent=!0}}]);