(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{1081:function(e,t,r){"use strict";r.r(t);r(12),r(10),r(6),r(5),r(11),r(7);var n=r(0),o=(r(21),r(4)),c=r(31),d=r(443),l=r(707),f=r(711),m=r(502),h=r(712),P=r(713);function v(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function w(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var y={name:"SingleProfession",components:{Breadcrumbs:d.a,Specialization:l.a,ProfessionSlider:f.a,Footer:h.a,Vacancies:P.a,ProfessionWhereToStudy:m.a},data:function(){return{notFound:!1,isLoading:!1}},computed:w(w({},Object(c.c)("singleProfession",["getProfession","getProfessionSpecializationIds","getPagePublication"])),{},{breadcrumbs:function(){var e=[{text:"Главная",path:{name:"index"}},{text:"Каталог",path:{name:"professions-list-category"}}];return!this.isLoading&&this.getProfession&&e.push({text:this.getProfession.name,path:{name:"single-profession",params:this.$router.params}}),e},routeId:function(){return+(this.$route.params.id||0)},pageTitle:function(){return"Профессия: ".concat(this.getProfession?this.getProfession.name:"")}}),beforeRouteUpdate:function(e,t,r){var o=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.loadPageHandler(e);case 2:r();case 3:case"end":return t.stop()}}),t)})))()},fetch:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.loadPageHandler();case 2:case"end":return t.stop()}}),t)})))()},head:function(){return{title:this.pageTitle,link:[{rel:"canonical",href:"https://".concat(this.$config.rsvDomain,"/professions/details/").concat(this.routeId,"/")}]}},methods:w(w({},Object(c.b)("singleProfession",["setPageType","loadProfession"])),{},{loadPageHandler:function(e){var t=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=e||t.$route,t.isLoading=!0,r.next=4,t.setPageType("profession");case 4:return r.next=6,t.loadProfession(n.params.id);case 6:t.getProfession||t.$nuxt.context.error({status:404,message:"Профессия не найдена"}),t.isLoading=!1;case 8:case"end":return r.stop()}}),r)})))()}})},O=(r(788),r(17)),component=Object(O.a)(y,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{directives:[{name:"loading",rawName:"v-loading",value:e.isLoading,expression:"isLoading"}],staticClass:"page-wrapper"},[r("div",{directives:[{name:"show",rawName:"v-show",value:!e.isLoading,expression:"!isLoading"}]},[r("Breadcrumbs",{attrs:{items:e.breadcrumbs}}),e._v(" "),r("Specialization",{staticClass:"block"}),e._v(" "),e.getProfessionSpecializationIds&&e.getProfessionSpecializationIds.length?r("ProfessionSlider",{staticClass:"block",attrs:{professionIds:e.getProfessionSpecializationIds}}):e._e(),e._v(" "),e.getPagePublication?r("ProfessionWhereToStudy",{staticClass:"block",attrs:{entityId:e.getPagePublication.id,entityType:"profession"}}):e._e(),e._v(" "),r("Vacancies",{staticClass:"block"}),e._v(" "),r("Footer",{staticClass:"block",attrs:{keywordsIds:e.getProfession?e.getProfession.keywords:null}})],1)])}),[],!1,null,"2b4e99cc",null);t.default=component.exports},544:function(e,t,r){var content=r(789);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(19).default)("09a53cc7",content,!0,{sourceMap:!1})},788:function(e,t,r){"use strict";var n=r(544);r.n(n).a},789:function(e,t,r){(t=r(18)(!1)).push([e.i,".page-wrapper[data-v-2b4e99cc]{min-height:10.375rem;width:79.99125rem;margin-left:auto;margin-right:auto}@media (max-width:449px){.page-wrapper[data-v-2b4e99cc]{width:100%}}.page-wrapper .block[data-v-2b4e99cc]{margin-bottom:.83rem}.page-wrapper .block[data-v-2b4e99cc]:last-of-type{margin-bottom:4.15rem}@media (max-width:449px){.page-wrapper .block[data-v-2b4e99cc]{margin-bottom:4.05063rem}.page-wrapper .block[data-v-2b4e99cc]:last-of-type{margin-bottom:8.10127rem}}.page-not-found[data-v-2b4e99cc]{background-position:0 0!important}",""]),e.exports=t}}]);