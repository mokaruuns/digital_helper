(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{1087:function(t,e,r){"use strict";r.r(e);r(12),r(10),r(6),r(5),r(11),r(7);var n=r(0),c=(r(21),r(8)),o=r(4),l=r(443),m=r(685),d=r(31);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v={name:"ContestsDetails",components:{Breadcrumbs:l.a,DetailsView:m.a},head:function(){return{title:this.pageTitle,link:[{rel:"canonical",href:"https://".concat(this.$config.rsvDomain,"/competitions/events/1/").concat(this.articleID,"/")}],meta:[{hid:"description",name:"description",content:this.pageDescription}]}},data:function(){return{loading:!1,breadcrumbs:[{text:"Главная",path:{name:"index"}},{text:"Мероприяния",path:{name:"competitions-events-page"}}]}},computed:f(f(f({},Object(d.c)(["isMobile"])),Object(d.c)("projects",["currentItem"])),{},{title:function(){return this.currentItem?this.currentItem.title:""},pageTitle:function(){return"Мероприятие: ".concat(this.title)},pageDescription:function(){return"Примите участие в мероприятии: ".concat(this.title,". Наши мероприятия отличаются исключительно высоким уровнем организации. Уже 3 500 000 человек присоединились к нам!")},fullBreadcrumbs:function(){var t=Object(c.a)(this.breadcrumbs);return this.currentItem&&t.push({text:this.currentItem.name,path:{name:"competitions-events-page-id",params:{id:this.currentItem.id}}}),t},articleID:function(){return+(this.$route.params.id||0)},article:function(){return this.currentItem||{}}}),fetch:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,t.clearCurrent(),e.prev=2,e.next=5,t.loadSeason(t.articleID);case 5:t.$mainMixinScrollUp();case 6:return e.prev=6,t.loading=!1,e.finish(6);case 9:"events"!=t.article.project_type&&t.$nuxt.context.redirect(301,"/competitions/"+t.article.project_type+"/"+t.$route.params.page+"/"+t.$route.params.id+"/");case 10:case"end":return e.stop()}}),e,null,[[2,,6,9]])})))()},methods:f(f(f({},Object(d.b)(["login"])),Object(d.b)("projects",["loadSeason","clearCurrent","updateType"])),{},{startHandler:function(){this.login()}})},O=(r(827),r(17)),component=Object(O.a)(v,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"competition-details"},[r("div",{staticClass:"competition-detail-breadcrumbs"},[r("Breadcrumbs",{attrs:{items:t.fullBreadcrumbs}})],1),t._v(" "),t.currentItem?r("DetailsView",{staticClass:"competition-details-content",attrs:{"link-text":"На страницу мероприятия","list-path-name":"competitions-events-page",item:t.article},on:{"on-start":t.startHandler}}):r("div",{staticClass:"competition-details-empty"},[t._v("\n        "+t._s(t.loading?"Загрузка...":"Данные не найдены")+"\n    ")])],1)}),[],!1,null,"751ae0d6",null);e.default=component.exports},570:function(t,e,r){var content=r(828);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(19).default)("3744d9be",content,!0,{sourceMap:!1})},827:function(t,e,r){"use strict";var n=r(570);r.n(n).a},828:function(t,e,r){(e=r(18)(!1)).push([t.i,".competition-details[data-v-751ae0d6]{width:80.095rem;margin:0 auto 4.15rem}@media (max-width:449px){.competition-details[data-v-751ae0d6]{width:100%}}.competition-details-empty[data-v-751ae0d6]{font-size:.93375rem;line-height:1.34875rem}@media (max-width:449px){.competition-details-empty[data-v-751ae0d6]{font-size:4.55696rem;line-height:6.58228rem}}",""]),t.exports=e}}]);