(this["webpackJsonpportfolio-site"]=this["webpackJsonpportfolio-site"]||[]).push([[0],{37:function(e,t,a){e.exports=a.p+"static/media/Main_Photo.ed52f126.jpg"},38:function(e,t,a){e.exports=a.p+"static/media/game-icon.3befe173.jpg"},39:function(e,t,a){e.exports=a.p+"static/media/iconArt-icon.9429b936.png"},40:function(e,t,a){e.exports=a.p+"static/media/telegram.a888fec0.svg"},41:function(e,t,a){e.exports=a.p+"static/media/linkedin.20177402.svg"},42:function(e,t,a){e.exports=a.p+"static/media/facebook.c509a4c4.svg"},45:function(e,t,a){e.exports=a(61)},50:function(e,t,a){},51:function(e,t,a){},61:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(22),l=a.n(i),c=(a(50),a(6)),o=a(10),s=a(9),m=a(8),u=a(24),d=a(5),h=a(12),p=a(25),f=a(44),b=(a(51),a(14)),E=a(19);var g=function(){return r.a.createElement("footer",{className:"mt-5"},r.a.createElement(h.a,{fluid:!0},r.a.createElement(b.a,{className:"border-top justify-content-between p-3"},r.a.createElement(E.a,{className:"p-0",md:3,sm:12},"Ruslan Mjahcich"),r.a.createElement(E.a,{className:"p-0 d-flex justify-content-end",md:6},"Copyright \xa9 2020 - Mjahcich Ruslan. All Rights Reserved."))))},k=a(26);var v=function(e){return r.a.createElement(k.a,{className:"bg-transparent jumbotron-fluid p-0"},r.a.createElement(h.a,{fluid:!0},r.a.createElement(b.a,{className:"justify-content-center py-5"},r.a.createElement(E.a,{md:8,sm:12},e.title&&r.a.createElement("h1",{className:"display-1 font-weight-bolder"},e.title),e.subTitle&&r.a.createElement("h3",{className:"display-4 font-weight-light"},e.subTitle),e.text&&r.a.createElement("h4",{className:"font-weight-light"},e.text)))))},j=a(20),y=a(34);var w=function(e){var t=Object(y.b)({opacity:1,from:{opacity:0}});return r.a.createElement(y.a.div,{className:"r-card-info",style:t},r.a.createElement("p",{className:"r-card-title"},e.title),r.a.createElement("p",{className:"r-card-sub-title"},e.subTitle),r.a.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer"},"View"))};var N=function(e){return r.a.createElement("div",{className:"d-inline-block r-card",onClick:function(t){return e.click(e.item)}},r.a.createElement("img",{className:"r-card-image",src:e.item.imgSrc,alt:e.item.imgSrc}),e.item.selected&&r.a.createElement(w,{title:e.item.title,subTitle:e.item.subTitle,link:e.item.link}))},S=a(37),x=a.n(S),C=a(38),O=a.n(C),T=a(39),M=a.n(T),R=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handleCardClick=function(e,t){console.log(e);var a=Object(j.a)(n.state.items);a[e].selected=!a[e].selected,a.forEach((function(t){t.id!==e&&(t.selected=!1)})),n.setState({items:a})},n.makeItems=function(e){return e.map((function(e){return r.a.createElement(N,{item:e,click:function(t){return n.handleCardClick(e.id,t)},key:e.id})}))},n.state={items:[{id:0,title:"Color Game",subTitle:"Little pretty JS game",imgSrc:O.a,link:"https://elitkondor.github.io/js-game/",selected:!1},{id:1,title:"Github",subTitle:"My whole programmed world",imgSrc:x.a,link:"https://github.com/ElitKondor",selected:!1},{id:2,title:"Kazanivska IconArt",subTitle:"Pure HTML/CSS with cute and functional design",imgSrc:M.a,link:"https://elitkondor.github.io/Iconart-site/",selected:!1}]},n}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement(h.a,{fluid:!0},r.a.createElement(b.a,{className:"justify-content-around"},this.makeItems(this.state.items)))}}]),a}(n.Component);var A=function(e){return r.a.createElement("div",null,r.a.createElement(v,{title:e.title,subTitle:e.subTitle,text:e.text}),r.a.createElement(R,null))};var I=function(e){return r.a.createElement(h.a,{fluid:!0},r.a.createElement(b.a,{className:"justify-content-center"},r.a.createElement(E.a,{md:8},e.children)))};var L=function(e){return r.a.createElement("div",null,r.a.createElement(v,{title:e.title}),r.a.createElement(I,null,r.a.createElement("p",null,"Hello, my name is Ruslan. I'm a Front-End engineer with experience in HTML, CSS, Bootstrap, SASS, JavaScript, jQuery and React."),r.a.createElement("p",null,"My dream is to one day start my own business and become an entrepreneur."),r.a.createElement("p",null,"I'm constantly learning new things. Currently those things include gaining more experience with JavaScript and React.")))},P=a(40),B=a.n(P),H=a(41),J=a.n(H),G=a(42),K=a.n(G),W=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).makeLinks=function(e){return e.map((function(e){return r.a.createElement("a",{href:e.site}," ",r.a.createElement("img",{className:"link-img",src:e.imgScr,alt:""})," ")}))},n.state={items:[{id:0,imgScr:J.a,site:"https://www.linkedin.com/in/ruslan-m-0362b3179/"},{id:1,imgScr:K.a,site:"https://www.facebook.com/profile.php?id=100005490491763"},{id:2,imgScr:B.a,site:"https://t.me/angrybaker"}]},n}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement(k.a,{className:"bg-transparent"},r.a.createElement(h.a,null,r.a.createElement(b.a,{className:"justify-content-around"},this.makeLinks(this.state.items))))}}]),a}(n.Component),_=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(v,{title:this.props.title}),r.a.createElement(W,null))}}]),a}(n.Component),z=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={title:"Ruslan Mjahcich",headerLinks:[{title:"Home",path:"/Portfolio"},{title:"About",path:"/about"},{title:"Contact",path:"/contact"}],home:{title:"Be Purposeful",subTitle:"Projects that excite the imagination.",text:"Checkout my projects below"},about:{title:"About Me"},contact:{title:"Let's Talk"}},n}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(u.a,null,r.a.createElement(h.a,{className:"p-0",fluid:!0},r.a.createElement(p.a,{className:"border-bottom",bg:"transparent",expand:"lg"},r.a.createElement(p.a.Brand,null,"Ruslan Mjahcich"),r.a.createElement(p.a.Toggle,{className:"border-0","aria-controls":"navbar-toggle"}),r.a.createElement(p.a.Collapse,{id:"navbar-toggle"},r.a.createElement(f.a,{className:"ml-auto"},r.a.createElement(u.b,{className:"nav-link",to:"/Portfolio"},"Home"),r.a.createElement(u.b,{className:"nav-link",to:"/about"},"About"),r.a.createElement(u.b,{className:"nav-link",to:"/contact"},"Contact")))),r.a.createElement(d.a,{path:"/Portfolio",exact:!0,render:function(){return r.a.createElement(A,{title:e.state.home.title,subTitle:e.state.home.subTitle,text:e.state.home.text})}}),r.a.createElement(d.a,{path:"/about",render:function(){return r.a.createElement(L,{title:e.state.about.title})}}),r.a.createElement(d.a,{path:"/contact",render:function(){return r.a.createElement(_,{title:e.state.contact.title})}}),r.a.createElement(g,null)))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(60);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[45,1,2]]]);
//# sourceMappingURL=main.6aced717.chunk.js.map