(window.webpackJsonpfront=window.webpackJsonpfront||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(8),r=a.n(o),s=(a(14),a(2)),c=a(3),i=a(5),u=a(4),m=a(6),d=a(1),h=(a(15),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={Estrato:"",top:[],bottom:[],loading:!1,encontrados:!1},a.handleSubmit=a.handleSubmit.bind(Object(d.a)(a)),a.handleEstratoChange=a.handleEstratoChange.bind(Object(d.a)(a)),a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"handleEstratoChange",value:function(e){var t=this;e.preventDefault();var a=e.target.value;this.setState({Estrato:a},(function(){console.log("Se ha seleccionado el estrato: "+t.state.Estrato)}))}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),this.setState({loading:!0}),fetch("https://www.datos.gov.co/resource/tkn6-e4ic.json").then((function(e){return e.json()})).then((function(e){var a=Object.keys(e).length,n=e;console.log(n),console.log("son: "+a+" personas iniciales");var l=[],o="Estrato "+t.state.Estrato;for(var r in n)n[r].pos=r,n[r].fami_estratovivienda===o&&l.push(n[r]);console.log(l),console.log("son: "+l.length+" personas ahora");var s=l.sort((function(e,t){return e.punt_global>t.punt_global?1:t.punt_global>e.punt_global?-1:0}));console.log(s);var c=s,i=s.slice(0,10);t.setState({bottom:i}),console.log(t.state.bottom);var u=c.slice(c.length-10,c.length);u=u.sort((function(e,t){return e.punt_global<t.punt_global?1:t.punt_global<e.punt_global?-1:0})),t.setState({top:u}),console.log(t.state.top),t.setState({loading:!1}),t.setState({encontrados:!0})})).catch((function(e){return console.log("No sirve el fetch",e)}))}},{key:"losMejores",value:function(){return this.state.top.map((function(e){return l.a.createElement("tr",null,l.a.createElement("td",null,e.fami_personashogar),l.a.createElement("td",null,e.estu_depto_reside),l.a.createElement("td",null,e.punt_global))}))}},{key:"losPeores",value:function(){return this.state.bottom.map((function(e){return l.a.createElement("tr",null,l.a.createElement("td",null,e.fami_personashogar),l.a.createElement("td",null,e.estu_depto_reside),l.a.createElement("td",null,e.punt_global))}))}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"React funcionando front+back"),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-10"},l.a.createElement("input",{id:"input",type:"text",className:"form-control",onChange:this.handleEstratoChange})),l.a.createElement("div",{className:"col-md-2"},l.a.createElement("button",{type:"button",className:"btn btn-secondary",onClick:this.handleSubmit},"Buscar"))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-5"}),l.a.createElement("div",{className:"col-md-2"},this.state.loading||null==this.state.bottom?l.a.createElement("div",{className:"loader"}):l.a.createElement("div",null))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6"},this.state.encontrados?l.a.createElement("div",null,l.a.createElement("h1",null,"Los Mejores 10"),l.a.createElement("table",{class:"table"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"# de personas en el hogar"),l.a.createElement("th",null,"Departamento"),l.a.createElement("th",null,"Puntaje Global"))),l.a.createElement("tbody",null,this.losMejores()))):l.a.createElement("div",null)),l.a.createElement("div",{className:"col-md-6"},this.state.encontrados?l.a.createElement("div",null,l.a.createElement("h1",null,"Los Peores 10"),l.a.createElement("table",{class:"table"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"# de personas en el hogar"),l.a.createElement("th",null,"Departamento"),l.a.createElement("th",null,"Puntaje Global"))),l.a.createElement("tbody",null,this.losPeores()))):l.a.createElement("div",null))))}}]),t}(n.Component)),E=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={Estrato:"",top:[],bottom:[],loading:!1},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(h,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement("div",{className:"container"},l.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},9:function(e,t,a){e.exports=a(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.58ef8c51.chunk.js.map