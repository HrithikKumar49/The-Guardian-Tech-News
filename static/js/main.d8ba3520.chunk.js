(this.webpackJsonpwebapp=this.webpackJsonpwebapp||[]).push([[0],{17:function(e,t,n){e.exports=n.p+"static/media/logo.93b8d6e9.png"},20:function(e,t,n){e.exports=n(45)},25:function(e,t,n){},27:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(12),c=n.n(o),s=(n(25),n(2)),i=n.n(s),l=n(13),u=n(14),p=n(15),h=n(19),m=n(18),d=(n(27),n(16)),b=n.n(d),f=n(17),w=n.n(f),g=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(){var e;return Object(u.a)(this,n),(e=t.call(this)).state={headlines:[]},e}return Object(p.a)(n,[{key:"componentDidMount",value:function(){var e=Object(l.a)(i.a.mark((function e(){var t,n,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,"https://content.guardianapis.com/technology","2bcc5ab8-2963-4b20-8bd4-ce30f67268e8",t={params:{"api-key":"2bcc5ab8-2963-4b20-8bd4-ce30f67268e8"}},e.next=6,b.a.get("https://content.guardianapis.com/technology",t);case 6:n=e.sent,console.log(n.data),a=[],n.data.response.results.forEach((function(e){a.push(e)})),this.setState({headlines:a}),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0);case 16:case"end":return e.stop()}}),e,this,[[0,13]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("img",{src:w.a,alt:"The Gaurdian logo"}),r.a.createElement("h1",null,"Tech News"),r.a.createElement("h3",null,"Top Headlines"),r.a.createElement("ul",{style:{listStyleType:"none"}},this.state.headlines.map((function(e){return r.a.createElement("li",{style:{margin:"10px"}},r.a.createElement("a",{href:e.webUrl,style:{color:"white"}},e.webTitle))})))))}}]),n}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(g,{basename:"/The-Guardian-Tech-News"}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[20,1,2]]]);
//# sourceMappingURL=main.d8ba3520.chunk.js.map