(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{1065:function(t,e,n){"use strict";n.r(e);n(12),n(10),n(11),n(6),n(5),n(22),n(7);var r=n(0),o=n(4),c=n(31);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var O={name:"AboutUs",components:{WideAboutUs:function(){return n.e(57).then(n.bind(null,1054))}},head:function(){return{title:"О нас",link:[{rel:"canonical",href:"https://".concat(this.$config.rsvDomain,"/about-us/")}]}},computed:l(l({},Object(c.c)(["about"])),{},{version:function(){return"WideAboutUs"}}),fetch:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([t.loadTeam(),t.getAbout()]);case 2:case"end":return e.stop()}}),e)})))()},mounted:function(){this.$mainMixinScrollUp()},methods:l({},Object(c.b)(["loadTeam","getAbout"]))},h=n(17),component=Object(h.a)(O,(function(){var t=this.$createElement;return(this._self._c||t)(this.version,{tag:"component",attrs:{data:this.about}})}),[],!1,null,"047ba1d6",null);e.default=component.exports}}]);