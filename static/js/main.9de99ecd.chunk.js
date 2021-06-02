(this["webpackJsonphotel-search"]=this["webpackJsonphotel-search"]||[]).push([[0],{10:function(e,s,t){"use strict";t.r(s);t(1);var a=t(3),n=t.n(a),l=t(0),r=function(e){return e.hasPerk?Object(l.jsx)("span",{className:"hotel__perks",children:e.perk}):null},i=function(e){return e.roomsRemaining<10?Object(l.jsxs)("span",{className:"hotel__rooms-remaining",children:["Only ",e.roomsRemaining," rooms left!"]}):null},c=function(e){return e.isBestseller?Object(l.jsx)("span",{className:"hotel__best-seller-flag",children:"Bestseller"}):null},o=function(e){return Object(l.jsxs)("li",{className:"hotel",children:[Object(l.jsx)("img",{src:e.hotel.imageSrc,alt:"hotel main entrance",className:"hotel__image"}),Object(l.jsxs)("div",{className:"hotel__text",children:[Object(l.jsxs)("div",{className:"hotel__header",children:[Object(l.jsx)("h3",{className:"hotel__name",children:e.hotel.name}),Object(l.jsx)("span",{className:"hotel__rating",children:e.hotel.rating})]}),Object(l.jsxs)("div",{className:"hotel__main",children:[Object(l.jsxs)("div",{children:[Object(l.jsxs)("span",{children:[e.hotel.reviewCount," reviews"]}),Object(l.jsx)(r,{perk:"Free cancellation",hasPerk:e.hotel.hasFreeCancellation}),Object(l.jsx)(r,{perk:"Breakfast included",hasPerk:e.hotel.includesBreakfast}),Object(l.jsx)(r,{perk:"Onsite parking",hasPerk:e.hotel.hasParking}),Object(l.jsx)(r,{perk:"Pet friendly building",hasPerk:e.hotel.allowsPets}),Object(l.jsx)(r,{perk:"Order food to your room",hasPerk:e.hotel.hasRoomService}),Object(l.jsx)(r,{perk:"Fitness center access",hasPerk:e.hotel.hasFitnessCenter}),Object(l.jsx)(i,{roomsRemaining:e.hotel.roomsRemaining})]}),Object(l.jsxs)("div",{className:"hotel__main--right",children:[Object(l.jsxs)("span",{children:[Object(l.jsxs)("span",{className:"hotel__price",children:["$",e.hotel.pricePerNight]})," ","per night"]}),Object(l.jsx)("span",{children:"Includes taxes and charges"}),Object(l.jsx)("button",{className:"hotel__see-rooms",children:"See our last available rooms >"})]})]})]}),Object(l.jsx)(c,{isBestseller:e.hotel.isBestSeller})]})},h=function(e){return Object(l.jsx)(o,{hotel:e},e.id)},m=function(e){if(!e.hotels)return null;var s=e.hotels.map(h);return Object(l.jsx)("ul",{className:"hotels-list",children:s})},j=function(e){return Object(l.jsxs)("li",{className:"filter",children:[Object(l.jsxs)("span",{children:[Object(l.jsx)("input",{type:"checkbox",value:!0,className:"filter__checkbox"}),e.filter.name]}),Object(l.jsx)("span",{className:"filter__match-count",children:e.filter.matchCount})]})},u=function(e){return Object(l.jsx)(j,{filter:e},e.id)},d=function(e){if(!e.filters)return null;var s=e.filters.map(u);return Object(l.jsxs)("div",{className:"filters",children:[Object(l.jsx)("h5",{className:"filters__header",children:"Filter By:"}),Object(l.jsx)("hr",{}),Object(l.jsx)("ul",{className:"filters-list",children:s})]})},p=[{id:21,name:"Free Cancellation",matchCount:307},{id:22,name:"Breakfast Included",matchCount:175},{id:23,name:"Bestsellers",matchCount:20},{id:41,name:"Parking",matchCount:272},{id:42,name:"Pets Allowed",matchCount:164},{id:43,name:"Room Service",matchCount:170},{id:44,name:"Fitness Center",matchCount:249}],b=[{id:123,name:"Ruby International Hotel",rating:8.3,reviewCount:2393,pricePerNight:308.34,imageSrc:"https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2020/11/pexels-photo-164595.jpeg",roomsRemaining:9,hasFreeCancellation:!0,includesBreakfast:!0,isBestSeller:!1,hasParking:!1,allowsPets:!1,hasRoomService:!1,hasFitnessCenter:!1},{id:124,name:"Hotel Jackson",rating:5.6,reviewCount:40642,pricePerNight:240,imageSrc:"https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2020/11/pexels-castorly-stock-3682238-scaled.jpg",roomsRemaining:22,hasFreeCancellation:!1,includesBreakfast:!0,isBestSeller:!0,hasParking:!0,allowsPets:!1,hasRoomService:!0,hasFitnessCenter:!0},{id:125,name:"Atom Suites Hotel",rating:8.7,reviewCount:5301,pricePerNight:314,imageSrc:"https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2020/11/pexels-engin-akyurt-2725675-scaled.jpg",roomsRemaining:2,hasFreeCancellation:!1,includesBreakfast:!1,isBestSeller:!0,hasParking:!0,allowsPets:!1,hasRoomService:!1,hasFitnessCenter:!0}],x=function(){return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(d,{filters:p}),Object(l.jsx)(m,{hotels:b})]})},O=(t(9),document.getElementById("root"));n.a.render(Object(l.jsx)(x,{}),O)},9:function(e,s,t){}},[[10,1,2]]]);
//# sourceMappingURL=main.9de99ecd.chunk.js.map