(this["webpackJsonpsneakers-store"]=this["webpackJsonpsneakers-store"]||[]).push([[0],{18:function(e,t,c){e.exports={overlay:"Cart_overlay__Po77Z",overlayVisible:"Cart_overlayVisible__3iVVW",cart:"Cart_cart__9i83c",items:"Cart_items__1IfOR"}},20:function(e,t,c){e.exports={card:"Card_card__2zzsu",plus:"Card_plus__15UcD",favorite:"Card_favorite__1OCvI"}},41:function(e,t,c){},68:function(e,t,c){"use strict";c.r(t);var r=c(0),a=c.n(r),n=c(14),s=c(34),i=c.n(s),o=(c(41),c(42),c(11)),l=c(12),d=c(7),j=c.n(d),u=c(13),b=c(4),x=c(2),m=c(5),f=c.n(m),h=Object(r.createContext)({}),O=function(){var e=Object(r.useContext)(h),t=e.cartItems,c=e.setCartItems,a=t.reduce((function(e,t){return t.price+e}),0);return{cartItems:t,setCartItems:c,totalPrice:a}},p=c(1);function v(e){var t=e.onClickCart,c=O().totalPrice;return Object(p.jsxs)("header",{className:"d-flex flex-wrap justify-between align-center p40 header",children:[Object(p.jsx)(n.b,{to:"/sneakers-store/",exact:!0,children:Object(p.jsxs)("div",{className:"d-flex mb-20 align-center",children:[Object(p.jsx)("img",{width:40,height:40,src:"img/logo.png",alt:"logo"}),Object(p.jsxs)("div",{children:[Object(p.jsx)("h3",{className:"text-uppercase",children:"Sneakers"}),Object(p.jsx)("p",{className:"opacity-5",children:"Best sneakers store"})]})]})}),Object(p.jsxs)("ul",{className:"d-flex align-center",children:[Object(p.jsxs)("li",{className:"mr-30 d-flex align-center cu-p",onClick:t,children:[Object(p.jsx)("img",{width:18,height:18,src:"img/cart.svg",alt:"cart"}),Object(p.jsxs)("span",{children:["$",c]})]}),Object(p.jsx)("li",{className:"mr-20 cu-p",children:Object(p.jsx)(n.b,{to:"/sneakers-store/favorites",children:Object(p.jsx)("img",{width:18,height:18,src:"img/favorites.svg",alt:"favorites"})})}),Object(p.jsx)("li",{className:"d-flex align-center",children:Object(p.jsx)(n.b,{to:"/sneakers-store/orders",children:Object(p.jsx)("img",{width:18,height:18,src:"img/user.svg",alt:"user"})})})]})]})}function g(e){var t=e.title,c=e.description,a=e.image,n=Object(r.useContext)(h).setCartOpened;return Object(p.jsxs)("div",{className:"cartEmpty d-flex align-center justify-center flex-column flex",children:[Object(p.jsx)("img",{className:"mb-20",width:"83px",height:"120px",src:a,alt:"Empty"}),Object(p.jsx)("h2",{children:t}),Object(p.jsx)("p",{className:"opacity-6",children:c}),Object(p.jsxs)("button",{type:"button",onClick:function(){return n(!1)},className:"greenButton",children:[Object(p.jsx)("img",{src:"img/arrow.svg",alt:"Arrow"}),"Go back"]})]})}var k=c(18),N=c.n(k),C=function(e){return new Promise((function(t){return setTimeout(t,e)}))};function w(e){var t=e.onClose,c=e.items,a=void 0===c?[]:c,n=e.onRemove,s=e.opened,i=O(),o=i.cartItems,l=i.setCartItems,d=i.totalPrice,x=Object(r.useState)(!1),m=Object(b.a)(x,2),h=m[0],v=m[1],k=Object(r.useState)(null),w=Object(b.a)(k,2),y=w[0],I=w[1],S=Object(r.useState)(!1),_=Object(b.a)(S,2),A=_[0],T=_[1],F=function(){var e=Object(u.a)(j.a.mark((function e(){var t,c,r,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,T(!0),e.next=4,f.a.post("https://60e5e9bd086f730017a6fe66.mockapi.io/orders",{items:o});case 4:t=e.sent,c=t.data,I(c.id),v(!0),l([]),r=0;case 10:if(!(r<o.length)){e.next=19;break}return a=o[r],e.next=14,f.a.delete("https://60e5e9bd086f730017a6fe66.mockapi.io/cart/".concat(a.id));case 14:return e.next=16,C(1e3);case 16:r++,e.next=10;break;case 19:e.next=24;break;case 21:e.prev=21,e.t0=e.catch(0),console.log("error on order send");case 24:T(!1);case 25:case"end":return e.stop()}}),e,null,[[0,21]])})));return function(){return e.apply(this,arguments)}}();return Object(p.jsx)("div",{className:"".concat(N.a.overlay," ").concat(s?N.a.overlayVisible:""),children:Object(p.jsxs)("div",{className:N.a.cart,children:[Object(p.jsxs)("h2",{className:"d-flex justify-between mb-30",children:["Cart",Object(p.jsx)("img",{className:"cu-p",src:"img/btn-remove.svg",alt:"Close",onClick:t})]}),a.length>0?Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("div",{className:N.a.items,children:a.map((function(e){return Object(p.jsxs)("div",{className:"cartItem d-flex align-center mb-20",children:[Object(p.jsx)("div",{style:{backgroundImage:"url(".concat(e.imageUrl,")")},className:"cartItemImg"}),Object(p.jsxs)("div",{className:"mr-20 flex",children:[Object(p.jsx)("p",{className:"mb-5",children:e.title}),Object(p.jsxs)("b",{children:["$",e.price]})]}),Object(p.jsx)("img",{className:"removeBtn",src:"img/btn-remove.svg",alt:"Remove",onClick:function(){return n(e.id)}})]},e.id)}))}),Object(p.jsxs)("div",{className:"cartTotalBlock",children:[Object(p.jsxs)("ul",{className:"cartTotal",children:[Object(p.jsxs)("li",{className:"d-flex",children:[Object(p.jsx)("span",{children:"Total"}),Object(p.jsx)("div",{}),Object(p.jsxs)("b",{children:["$",d]})]}),Object(p.jsxs)("li",{className:"d-flex",children:[Object(p.jsx)("span",{children:"Taxes 5%:"}),Object(p.jsx)("div",{}),Object(p.jsxs)("b",{children:["$",(d/100*5).toFixed(2)]})]})]}),Object(p.jsxs)("button",{className:"greenButton",type:"button",onClick:F,disabled:A,children:["Checkout ",Object(p.jsx)("img",{src:"img/arrowRight.svg",alt:"Arrow"})]})]})]}):Object(p.jsx)(g,{title:h?"Order placed":"Cart is empty",description:h?"Your order #".concat(y," will be delivered soon"):"Add at least one product to make an order",image:h?"img/complete-order.jpg":"img/empty-cart.jpg"})]})})}var y=c(36),I=c(20),S=c.n(I);function _(e){var t=e.id,c=e.title,a=e.price,n=e.imageUrl,s=e.onPlus,i=e.onFavorite,o=e.favorited,l=void 0!==o&&o,d=e.loading,j=void 0!==d&&d,u=Object(r.useContext)(h).isItemAdded,x=Object(r.useState)(l),m=Object(b.a)(x,2),f=m[0],O=m[1],v={id:t,parentId:t,title:c,price:a,imageUrl:n};return Object(p.jsx)("div",{className:S.a.card,children:j?Object(p.jsxs)(y.a,{speed:2,width:210,height:222,viewBox:"0 0 210 222",backgroundColor:"#f3f3f3",foregroundColor:"#ecebeb",children:[Object(p.jsx)("rect",{x:"10",y:"1",rx:"10",ry:"10",width:"160",height:"90"}),Object(p.jsx)("rect",{x:"10",y:"115",rx:"3",ry:"3",width:"160",height:"15"}),Object(p.jsx)("rect",{x:"10",y:"135",rx:"3",ry:"3",width:"90",height:"15"}),Object(p.jsx)("rect",{x:"10",y:"182",rx:"8",ry:"8",width:"80",height:"24"}),Object(p.jsx)("rect",{x:"138",y:"180",rx:"10",ry:"8",width:"32",height:"32"})]}):Object(p.jsxs)(p.Fragment,{children:[i&&Object(p.jsx)("div",{className:S.a.favorite,onClick:function(){i(v),O(!f)},children:Object(p.jsx)("img",{src:f?"img/liked.svg":"img/unliked.svg",alt:f?"liked":"unliked"})}),Object(p.jsx)("img",{width:133,height:112,src:"".concat(n),alt:"sneakers 1"}),Object(p.jsx)("h5",{children:c}),Object(p.jsxs)("div",{className:"d-flex justify-between align-center",children:[Object(p.jsxs)("div",{className:"d-flex flex-column",children:[Object(p.jsx)("span",{children:"Price:"}),Object(p.jsxs)("b",{children:["$",a]})]}),s&&Object(p.jsx)("img",{className:S.a.plus,onClick:function(){s(v)},src:u(t)?"img/btn-checked.svg":"img/plus.svg",alt:"Plus"})]})]})})}function A(e){var t=e.items,c=e.searchValue,r=e.setSearchValue,a=e.onChangeSearchInput,n=e.onAddToCart,s=e.onAddToFavorite,i=e.isLoading;return Object(p.jsxs)("div",{className:"content p-40",children:[Object(p.jsxs)("div",{className:"d-flex flex-wrap justify-between align-center mb-40",children:[Object(p.jsx)("h1",{className:"mb-20",children:c?'Search by "'.concat(c,'"'):"All".concat("\xa0","Sneakers")}),Object(p.jsxs)("div",{className:"search-block d-flex",children:[Object(p.jsx)("img",{src:"img/search.svg",alt:"Search"}),c&&Object(p.jsx)("img",{className:"clear cu-p",src:"img/btn-remove.svg",alt:"Close",onClick:function(){return r("")}}),Object(p.jsx)("input",{type:"text",placeholder:"Search...",onChange:a,value:c})]})]}),Object(p.jsx)("div",{className:"d-flex flex-wrap",children:function(){var e=t.filter((function(e){return e.title.toLowerCase().includes(c.toLowerCase())}));return(i?Object(l.a)(Array(8)):e).map((function(e,t){return Object(p.jsx)(_,Object(o.a)({onFavorite:function(e){return s(e)},onPlus:function(e){return n(e)},loading:i},e),t)}))}()})]})}function T(){var e=Object(r.useContext)(h),t=e.favorites,c=e.onAddToFavorite;return Object(p.jsxs)("div",{className:"content p-40",children:[Object(p.jsx)("div",{className:"d-flex justify-between align-center mb-40",children:Object(p.jsx)("h1",{children:"Bookmarks"})}),Object(p.jsx)("div",{className:"d-flex flex-wrap",children:t.map((function(e,t){return Object(p.jsx)(_,Object(o.a)({favorited:!0,onFavorite:c},e),t)}))})]})}function F(){var e=Object(r.useState)([]),t=Object(b.a)(e,2),c=t[0],a=t[1],n=Object(r.useContext)(h),s=(n.onAddToCart,n.onAddToFavorite,Object(r.useState)(!0)),i=Object(b.a)(s,2),d=i[0],x=i[1];return Object(r.useEffect)((function(){Object(u.a)(j.a.mark((function e(){var t,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.get("https://60e5e9bd086f730017a6fe66.mockapi.io/orders");case 3:t=e.sent,c=t.data,a(c.reduce((function(e,t){return[].concat(Object(l.a)(e),Object(l.a)(t.items))}),[])),x(!1),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log("Error on orders request",e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))()}),[]),Object(p.jsxs)("div",{className:"content p-40",children:[Object(p.jsx)("div",{className:"d-flex justify-between align-center mb-40",children:Object(p.jsx)("h1",{children:"My orders"})}),Object(p.jsx)("div",{className:"d-flex flex-wrap",children:(d?Object(l.a)(Array(8)):c).map((function(e,t){return Object(p.jsx)(_,Object(o.a)({loading:d},e),t)}))})]})}var P=function(){var e=Object(r.useState)([]),t=Object(b.a)(e,2),c=t[0],a=t[1],n=Object(r.useState)([]),s=Object(b.a)(n,2),i=s[0],d=s[1],m=Object(r.useState)([]),O=Object(b.a)(m,2),g=O[0],k=O[1],N=Object(r.useState)(""),C=Object(b.a)(N,2),y=C[0],I=C[1],S=Object(r.useState)(!1),_=Object(b.a)(S,2),P=_[0],E=_[1],V=Object(r.useState)(!0),B=Object(b.a)(V,2),R=B[0],$=B[1];Object(r.useEffect)((function(){function e(){return(e=Object(u.a)(j.a.mark((function e(){var t,c,r,n,s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,$(!0),e.next=4,Promise.all([f.a.get("https://60e5e9bd086f730017a6fe66.mockapi.io/cart"),f.a.get("https://60e5e9bd086f730017a6fe66.mockapi.io/favorites"),f.a.get("https://60e5e9bd086f730017a6fe66.mockapi.io/items")]);case 4:t=e.sent,c=Object(b.a)(t,3),r=c[0],n=c[1],s=c[2],$(!1),d(r.data),k(n.data),a(s.data),e.next=19;break;case 15:e.prev=15,e.t0=e.catch(0),console.log("Error on data fetch"),console.log(e.t0);case 19:case"end":return e.stop()}}),e,null,[[0,15]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var L=function(){var e=Object(u.a)(j.a.mark((function e(t){var c,r,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!(c=i.find((function(e){return Number(e.parentId)===Number(t.id)})))){e.next=8;break}return d((function(e){return e.filter((function(e){return Number(e.parentId)!==Number(t.id)}))})),e.next=6,f.a.delete("https://60e5e9bd086f730017a6fe66.mockapi.io/cart/".concat(c.id));case 6:e.next=14;break;case 8:return d((function(e){return[].concat(Object(l.a)(e),[t])})),e.next=11,f.a.post("https://60e5e9bd086f730017a6fe66.mockapi.io/cart",t);case 11:r=e.sent,a=r.data,d((function(e){return e.map((function(e){return e.parentId===a.parentId?Object(o.a)(Object(o.a)({},e),{},{id:a.id}):e}))}));case 14:e.next=20;break;case 16:e.prev=16,e.t0=e.catch(0),console.log("Error on add to cart"),console.log(e.t0);case 20:case"end":return e.stop()}}),e,null,[[0,16]])})));return function(t){return e.apply(this,arguments)}}(),U=function(){var e=Object(u.a)(j.a.mark((function e(t){var c,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!g.find((function(e){return Number(e.id)===Number(t.id)}))){e.next=7;break}return e.next=4,f.a.delete("https://60e5e9bd086f730017a6fe66.mockapi.io/favorites/".concat(t.id));case 4:k((function(e){return e.filter((function(e){return Number(e.id)!==Number(t.id)}))})),e.next=12;break;case 7:return e.next=9,f.a.post("https://60e5e9bd086f730017a6fe66.mockapi.io/favorites",t);case 9:c=e.sent,r=c.data,k((function(e){return[].concat(Object(l.a)(e),[r])}));case 12:e.next=18;break;case 14:e.prev=14,e.t0=e.catch(0),console.warn("Error on adding to favorite"),console.log(e.t0);case 18:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(t){return e.apply(this,arguments)}}();return Object(p.jsx)(h.Provider,{value:{cartItems:i,favorites:g,items:c,isItemAdded:function(e){return i.some((function(t){return Number(t.parentId)===Number(e)}))},onAddToFavorite:U,onAddToCart:L,setCartOpened:E,setCartItems:d},children:Object(p.jsxs)("div",{className:"wrapper clear",children:[Object(p.jsx)(w,{onClose:function(){return E(!1)},items:i,onRemove:function(e){try{f.a.delete("https://60e5e9bd086f730017a6fe66.mockapi.io/cart/".concat(e)),d((function(t){return t.filter((function(t){return Number(t.id)!==Number(e)}))}))}catch(t){console.log("Error on remove item from cart"),console.log(t)}},opened:P}),Object(p.jsx)(v,{onClickCart:function(){return E(!0)}}),Object(p.jsx)(x.a,{path:"/sneakers-store",exact:!0,children:Object(p.jsx)(A,{items:c,cartItems:i,searchValue:y,setSearchValue:I,onChangeSearchInput:function(e){I(e.target.value)},onAddToCart:L,onAddToFavorite:U,isLoading:R})}),Object(p.jsx)(x.a,{path:"/sneakers-store/favorites",exact:!0,children:Object(p.jsx)(T,{})}),Object(p.jsx)(x.a,{path:"/sneakers-store/orders",exact:!0,children:Object(p.jsx)(F,{})})]})})};i.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(n.a,{children:Object(p.jsx)(P,{})})}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.d1a71355.chunk.js.map