(this.webpackJsonpweatherlocation=this.webpackJsonpweatherlocation||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a(20)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),l=a(8),r=a.n(l),c=(a(14),a(2)),i=a(3),o=a(6),d=a(4),h=a(1),u=a(5);a(15),a(16);var m=function(e){return s.a.createElement("div",{className:"Splash"},s.a.createElement("div",{className:"Title"},"Weather Location"),s.a.createElement("div",{className:"Instructions"},"Enter and andress or zipcode to find out about your location!"),s.a.createElement("div",{className:"Input"},s.a.createElement("input",{type:"text",onChange:e.handleAddressChange,onKeyDown:e.handleAddressSubmit})))};a(17),a(18);var p=function(e){return s.a.createElement("div",{className:"Map"},s.a.createElement("iframe",{title:"GoogleMaps",frameBorder:"0",style:{border:"0px"},src:"https://www.google.com/maps/embed/v1/view?key=AIzaSyDNRmufQHfCRrlCbsx_n_VNoSSploKRB2c&center="+e.lat+","+e.lng+"&zoom=18&maptype=satellite",allowFullScreen:!0}))};a(19);String.prototype.capitalize=function(){return this.replace(/(?:^|\s)\S/g,(function(e){return e.toUpperCase()}))};var g=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(d.a)(t).call(this,e))).state={temp:"",desc:"",high:"",low:""},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.openweathermap.org/data/2.5/weather?lat="+this.props.lat+"&lon="+this.props.lng+"&units=imperial&appid=ca21dc061cfbfac4c0dd566e7366af0b&mode=json").then((function(e){return e.json()})).then((function(t){e.setState({temp:t.main.temp,desc:t.weather[0].description,high:t.main.temp_max,low:t.main.temp_min})}))}},{key:"render",value:function(){return s.a.createElement("div",{className:"Weather"},s.a.createElement("ul",null,s.a.createElement("li",null,"Temperature: ",this.state.temp," (High: ",this.state.high," | Low: ",this.state.low,")"),s.a.createElement("li",null,"Description: ",this.state.desc.capitalize())),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("br",null))}}]),t}(s.a.Component);var f=function(e){return s.a.createElement("div",{className:"WeatherMap"},s.a.createElement("button",{onClick:e.handleBack},"Go Back"),s.a.createElement(p,{lat:e.lat,lng:e.lng}),s.a.createElement(g,{lat:e.lat,lng:e.lng}))},b=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(d.a)(t).call(this,e))).state={address:" ",splash:!0,lat:"",lng:""},a.getLatLng=a.getLatLng.bind(Object(h.a)(a)),a.handleAddressChange=a.handleAddressChange.bind(Object(h.a)(a)),a.handleAddressSubmit=a.handleAddressSubmit.bind(Object(h.a)(a)),a.handleBack=a.handleBack.bind(Object(h.a)(a)),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"getLatLng",value:function(){var e=this;fetch("https://api.opencagedata.com/geocode/v1/json?q="+this.state.address.replace(" ","+")+"&key=e421c57a76e94cd09927951f605c5bf1").then((function(e){return e.json()})).then((function(t){e.setState({lat:t.results[0].geometry.lat,lng:t.results[0].geometry.lng,splash:!1})}))}},{key:"handleAddressChange",value:function(e){""===e.target.value?this.setState({address:" "}):this.setState({address:e.target.value})}},{key:"handleAddressSubmit",value:function(e){"Enter"===e.key&&this.getLatLng()}},{key:"handleBack",value:function(e){this.setState({splash:!0})}},{key:"render",value:function(){var e;return e=this.state.splash?s.a.createElement(m,{handleAddressChange:this.handleAddressChange,handleAddressSubmit:this.handleAddressSubmit}):s.a.createElement(f,{lat:this.state.lat,lng:this.state.lng,handleBack:this.handleBack}),s.a.createElement("div",{className:"App"},e)}}]),t}(s.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[9,1,2]]]);
//# sourceMappingURL=main.143a331e.chunk.js.map