(this.webpackJsonptwitter_clone=this.webpackJsonptwitter_clone||[]).push([[0],{71:function(e,t,s){},72:function(e,t,s){},73:function(e,t,s){},74:function(e,t,s){},81:function(e,t,s){},82:function(e,t,s){},86:function(e,t,s){},87:function(e,t,s){},89:function(e,t,s){"use strict";s.r(t);var a=s(2),c=s.n(a),n=s(29),i=s.n(n),r=(s(71),s(72),s(73),s(48)),o=s.n(r),j=(s(74),s(4));var l=function(e){var t=e.active,s=e.text,a=e.Icon;return Object(j.jsxs)("div",{className:"sidebarOption ".concat(t?"sidebarOption--active":""),children:[Object(j.jsx)(a,{}),Object(j.jsx)("h2",{className:"SidebarOptionText",children:s})]})},d=s(53),x=s.n(d),b=s(41),u=s.n(b),m=s(54),p=s.n(m),O=s(55),h=s.n(O),v=s(56),f=s.n(v),g=s(57),N=s.n(g),w=s(58),_=s.n(w),I=s(59),S=s.n(I),y=s(103);var T=function(){return Object(j.jsxs)("div",{className:"sidebar",children:[Object(j.jsx)(o.a,{className:"sidebar_TwitterIcon"}),Object(j.jsx)(l,{active:!0,text:"Home",Icon:x.a}),Object(j.jsx)(l,{text:"Explore",Icon:u.a}),Object(j.jsx)(l,{text:"Notifications",Icon:p.a}),Object(j.jsx)(l,{text:"Messages",Icon:h.a}),Object(j.jsx)(l,{text:"Bookmarks",Icon:f.a}),Object(j.jsx)(l,{text:"Lists",Icon:N.a}),Object(j.jsx)(l,{text:"Profile",Icon:_.a}),Object(j.jsx)(l,{text:"More",Icon:S.a}),Object(j.jsx)(y.a,{variant:"outlined",className:"sidebar_tweet",children:"Tweet"})]})},k=s(36),D=(s(81),s(82),s(104)),B=s(42),z=B.a.initializeApp({apiKey:"AIzaSyDqDOjJhnGjfLwURsVWaNHLo8RsHkrJpTQ",authDomain:"taruntwitterclone.firebaseapp.com",projectId:"taruntwitterclone",storageBucket:"taruntwitterclone.appspot.com",messagingSenderId:"722802449228",appId:"1:722802449228:web:bab53994724f52d21acde9"}).firestore();var C=function(){var e=Object(a.useState)(""),t=Object(k.a)(e,2),s=t[0],c=t[1],n=Object(a.useState)(""),i=Object(k.a)(n,2),r=i[0],o=i[1];return Object(j.jsx)("div",{className:"tweetBox",children:Object(j.jsxs)("form",{className:"tweetBox_form",children:[Object(j.jsxs)("div",{className:"tweetBox_input",children:[Object(j.jsx)(D.a,{src:"https://lh3.googleusercontent.com/ogw/ADGmqu_OmKZkvhI0lsrcZJhwo3f5DsXqgHnf9on7xS3IWPE=s64-c-mo"}),Object(j.jsx)("input",{onChange:function(e){return c(e.target.value)},value:s,placeholder:"What's happening?",type:"text"})]}),Object(j.jsx)("input",{onChange:function(e){return o(e.target.value)},value:r,className:"tweetbox_inputImage",placeholder:"Enter Image URL",type:"text"}),Object(j.jsx)(y.a,{onClick:function(e){e.preventDefault(),z.collection("posts").add({displayName:"Tarun Ravi",userName:"@My_World_Rules",verified:!1,text:s,timestamp:B.a.firestore.FieldValue.serverTimestamp(),image:r,avatar:"https://lh3.googleusercontent.com/ogw/ADGmqu_OmKZkvhI0lsrcZJhwo3f5DsXqgHnf9on7xS3IWPE=s64-c-mo"}),c(""),o("")},className:"tweetBox_button",children:"Tweet"})]})})},H=(s(86),s(60)),W=s.n(H),q=s(61),E=s.n(q),J=s(62),L=s.n(J),R=s(63),F=s.n(R),M=s(64),P=s.n(M);var A=function(e){var t=e.displayName,s=e.userName,a=e.verified,c=e.text,n=e.image,i=e.avatar;return Object(j.jsxs)("div",{className:"post",children:[Object(j.jsx)("div",{className:"post_avatar",children:Object(j.jsx)(D.a,{src:i})}),Object(j.jsxs)("div",{className:"post_body",children:[Object(j.jsx)("div",{className:"post_header",children:Object(j.jsx)("div",{className:"post_headerText",children:Object(j.jsxs)("h3",{children:[t," "," ",Object(j.jsxs)("span",{className:"post_heading_userName",children:[a?Object(j.jsx)(W.a,{className:"post_badge"}):""," ",s]})]})})}),Object(j.jsx)("div",{className:"post_headerDescription",children:Object(j.jsx)("p",{children:c})}),Object(j.jsx)("img",{src:n,alt:""}),Object(j.jsxs)("div",{className:"post__footer",children:[Object(j.jsx)(E.a,{fontSize:"small"}),Object(j.jsx)(L.a,{fontSize:"small"}),Object(j.jsx)(F.a,{fontSize:"small"}),Object(j.jsx)(P.a,{fontSize:"small"})]})]})]})};var Z=function(){var e=Object(a.useState)([]),t=Object(k.a)(e,2),s=t[0],c=t[1];return Object(a.useEffect)((function(){z.collection("posts").orderBy("timestamp","desc").onSnapshot((function(e){return c(e.docs.map((function(e){return e.data()})))}))}),[]),Object(j.jsxs)("div",{className:"feed",children:[Object(j.jsx)("div",{className:"feed_header",children:Object(j.jsx)("h2",{children:"Home"})}),Object(j.jsx)(C,{}),s.map((function(e){return Object(j.jsx)(A,{displayName:e.displayName,userName:e.userName,verified:e.verified,text:e.text,image:e.image,avatar:e.avatar})}))]})},G=(s(87),s(43));var K=function(){return Object(j.jsxs)("div",{className:"widgets",children:[Object(j.jsx)("div",{className:"outsideInput",children:Object(j.jsxs)("div",{className:"widgets_input",children:[Object(j.jsx)(u.a,{className:"widgets_searchIcon"}),Object(j.jsx)("input",{placeholder:"Search Twitter",type:"text"})]})}),Object(j.jsxs)("div",{className:"widgets_widgetContainer",children:[Object(j.jsx)("h2",{children:"What's Happening?"}),Object(j.jsx)(G.c,{tweetId:"871518451172618242"}),Object(j.jsx)(G.b,{sourceType:"profile",screenName:"My_World_Rules",options:{height:400}}),Object(j.jsx)(G.a,{url:"https://facebook.com/cleverprogrammer",options:{text:"#reactjs is awesome",via:"cleverqazi"}})]})]})};var U=function(){return Object(j.jsxs)("div",{className:"app",children:[Object(j.jsx)(T,{}),Object(j.jsx)(Z,{}),Object(j.jsx)(K,{})]})},V=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,105)).then((function(t){var s=t.getCLS,a=t.getFID,c=t.getFCP,n=t.getLCP,i=t.getTTFB;s(e),a(e),c(e),n(e),i(e)}))};i.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(U,{})}),document.getElementById("root")),V()}},[[89,1,2]]]);
//# sourceMappingURL=main.e0cf73a4.chunk.js.map