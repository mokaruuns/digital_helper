(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{1057:function(t,e,n){"use strict";n.r(e);n(12),n(10),n(11),n(6),n(5),n(22),n(7);var r=n(0),o=(n(21),n(8)),l=n(4),c=n(443),d=n(486),m={name:"TestingBanner"},h=(n(888),n(17)),f=Object(h.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"banner"},[n("div",{staticClass:"banner-title"},[t._v("\n        Определи свой трек развития\n    ")]),t._v(" "),n("div",{staticClass:"banner-description"},[t._v("\n        Создай пошаговый план развития знаний и навыков для успешной жизни\n    ")]),t._v(" "),n("div",{staticClass:"blue-button banner-button",on:{click:function(e){return t.$emit("on-activate")}}},[t._v("\n        Построить трек\n    ")])])}),[],!1,null,"4eccac90",null).exports,v=n(456),_=(n(99),n(31));function y(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function w(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?y(Object(source),!0).forEach((function(e){Object(l.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):y(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var x={name:"CategoryList",components:{Button:n(457).a},props:{title:{type:String,default:"Категории"},titleTag:{type:String,default:"h2"},displayShowAll:{type:Boolean,default:!0},showAllText:{type:String,default:"Все категории"},defaultItemsCount:{type:Number,default:4},items:{type:Array,default:function(){return[]}},pathName:{type:String,default:""},counterField:{type:String,default:""}},data:function(){return{showMore:!1}},computed:w(w({},Object(_.c)(["isMobile"])),{},{displayItems:function(){return this.items&&this.items.length?this.isMobile&&!this.showMore?this.items.slice(0,this.defaultItemsCount):this.items:[]},displayShowMore:function(){return this.isMobile&&!this.showMore&&this.items&&this.items.length>this.defaultItemsCount}}),methods:{getPathParams:function(t){return{name:this.pathName,params:{page:1,category:t.id}}},getCount:function(t){return t?this.counterField?t[this.counterField].length:t.length:""}}},O=(n(892),Object(h.a)(x,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"category-list"},[n("div",{staticClass:"category-list-title-row"},[n(t.titleTag,{tag:"h2",staticClass:"category-list-title"},[t._v("\n            "+t._s(t.title)+"\n        ")]),t._v(" "),t.displayShowAll&&!t.isMobile?n("nuxt-link",{staticClass:"category-list-text-button",attrs:{to:t.getPathParams({id:null}),"no-prefetch":""}},[t._v("\n            "+t._s(t.showAllText)+"\n        ")]):t._e(),t._v(" "),t.displayShowAll&&t.isMobile?n("nuxt-link",{staticClass:"button",attrs:{type:"button",to:t.getPathParams({id:null}),"no-prefetch":""}},[t._v("\n            "+t._s(t.showAllText)+"\n        ")]):t._e()],1),t._v(" "),n("ul",{staticClass:"category-list-content"},t._l(t.displayItems,(function(e,r){return n("li",{key:e.id||r,staticClass:"category-list-row"},[n("nuxt-link",{staticClass:"hover-link category-list-link",attrs:{to:t.getPathParams(e),"no-prefetch":""}},[t._v("\n                "+t._s(e.name)+"\n            ")]),t._v(" "),n("div",{staticClass:"category-list-count"},[t._v("\n                "+t._s(t.getCount(e))+"\n            ")])],1)})),0),t._v(" "),t.displayShowMore?n("div",{staticClass:"category-list-show-more",on:{click:function(e){t.showMore=!0}}},[t._v("\n        Показать еще\n    ")]):t._e()])}),[],!1,null,"1e10a707",null).exports);function k(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function C(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?k(Object(source),!0).forEach((function(e){Object(l.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):k(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var j={name:"testing",components:{Breadcrumbs:c.a,ItemCard:d.a,Banner:f,Pagination:v.a,CategoryList:O},middleware:["listPages"],head:function(){return{title:this.pageTitle,link:[{rel:"canonical",href:"https://".concat(this.$config.rsvDomain,"/testing/")}]}},data:function(){return{loading:!1,loadingFilters:!1,loadingItems:!1,topGroupCount:9,bottomGroupCount:3,breadcrumbs:[{text:"Главная",path:{name:"index"}},{text:"Каталог тестов",path:{name:"testing-category-page"}}],currentPage:1}},computed:C(C(C({},Object(_.c)(["isMobile"])),Object(_.c)("testing",["getFilters","getFilterById","getTests","getCountOfPages"])),{},{pageTitle:function(){return"".concat(this.title," ").concat(this.page>1?" - Страница ".concat(this.page):"")},fullBreadcrumbs:function(){var t=Object(o.a)(this.breadcrumbs);return this.category&&this.categoryName&&t.push({text:this.categoryName,path:{name:"testing-category-page",params:{category:this.category}}}),t},title:function(){return this.category&&this.categoryName?this.categoryName:"Каталог тестов"},page:function(){return parseInt(this.$route.params.page||1)},category:function(){return this.$route.params.category},categoryName:function(){var t=this.getFilterById(this.category);return t?t.name:""},topGroupItems:function(){return this.getTests&&this.getTests.length?this.getTests.slice(0,this.topGroupCount):[]},bottomGroupItems:function(){return this.getTests&&this.getTests.length>this.topGroupCount?this.getTests.slice(this.topGroupCount):[]}}),watch:{$route:function(t,e){t.params!==e.params&&this.updatePage()}},fetch:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,e.prev=1,e.next=4,Promise.all([t.loadItems({page:t.page,categoryId:t.category}),t.loadFilters()]);case 4:return e.prev=4,t.loading=!1,e.finish(4);case 7:case"end":return e.stop()}}),e,null,[[1,,4,7]])})))()},methods:C(C(C({},Object(_.b)(["login"])),Object(_.b)("testing",["loadFilters","loadItems"])),{},{updatePage:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,e.prev=1,e.next=4,t.loadItems({page:t.page,categoryId:t.category});case 4:return e.prev=4,t.loading=!1,e.finish(4);case 7:case"end":return e.stop()}}),e,null,[[1,,4,7]])})))()},getQuestionCount:function(t){return t&&t.questionsCount?"".concat(t.questionsCount," вопросов"):""},getLinkOptions:function(t){return{name:"test-id",params:{id:t.id}}},activateBannerHandler:function(){this.login()}})},P=(n(894),Object(h.a)(j,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"testing"},[n("div",{staticClass:"testing-breadcrumbs"},[n("Breadcrumbs",{attrs:{items:t.fullBreadcrumbs}})],1),t._v(" "),n("h1",[t._v("\n        "+t._s(t.title)+"\n    ")]),t._v(" "),n("div",{staticClass:"testing-content"},[n("div",{staticClass:"testing-left"},[n("div",{staticClass:"testing-card-row"},t._l(t.topGroupItems,(function(e){return n("ItemCard",{key:e.id,staticClass:"testing-card",attrs:{width:"283",height:"363",mobileHeight:"363","top-meta":t.getQuestionCount(e),title:e.name,"cleaning-html":"",pictureUrl:e.preview,"link-options":t.getLinkOptions(e)}})})),1),t._v(" "),n("div",{staticClass:"testing-banner"},[n("Banner",{staticClass:"testing-banner",on:{"on-activate":t.activateBannerHandler}})],1),t._v(" "),n("div",{staticClass:"testing-card-row"},t._l(t.bottomGroupItems,(function(e){return n("ItemCard",{key:e.id,staticClass:"testing-card",attrs:{width:"283",height:"363",mobileHeight:"363","top-meta":t.getQuestionCount(e),title:e.name,"cleaning-html":"",pictureUrl:e.preview,"link-options":t.getLinkOptions(e)}})})),1),t._v(" "),n("div",{staticClass:"testing-paginator"},[n("Pagination",{attrs:{value:t.page,max:t.getCountOfPages,"append-params":{category:this.category||"all"}}})],1)]),t._v(" "),n("div",{staticClass:"testing-right"},[n("CategoryList",{attrs:{items:t.getFilters,"show-all-text":"Показать все тесты","path-name":"testing-category-page","counter-field":"test","display-show-all":!!t.category}})],1)])])}),[],!1,null,"6b9e9345",null));e.default=P.exports},444:function(t,e,n){var content=n(455);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(19).default)("364f80d4",content,!0,{sourceMap:!1})},445:function(t,e,n){var content=n(463);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(19).default)("4e1ffd60",content,!0,{sourceMap:!1})},454:function(t,e,n){"use strict";var r=n(444);n.n(r).a},455:function(t,e,n){(e=n(18)(!1)).push([t.i,".pagination[data-v-433d3aa6]{text-align:center}@media (max-width:449px){.pagination[data-v-433d3aa6]{margin:8.10127rem 0}}.pagination__list[data-v-433d3aa6]{display:inline-block;padding:0;margin:0;list-style:none;height:2rem}@media (max-width:449px){.pagination__list[data-v-433d3aa6]{height:8.10127rem}}.pagination__list__item[data-v-433d3aa6]{cursor:pointer;display:inline-block;font-weight:600;text-align:center;color:#2a2626;font-size:.75rem;vertical-align:middle;width:2rem;border-radius:.2075rem}@media (max-width:449px){.pagination__list__item[data-v-433d3aa6]{width:8.10127rem;font-size:3.03797rem;border-radius:1.01266rem}}.pagination__list__item.white[data-v-433d3aa6]{background-color:#fff}.pagination__list__item a[data-v-433d3aa6]{width:100%;padding:.625rem 0;display:block}@media (max-width:449px){.pagination__list__item a[data-v-433d3aa6]{padding:2.27848rem 0}}.pagination__list__item.active[data-v-433d3aa6]{background:#3874e0;box-shadow:0 2px 8px rgba(155,161,166,.23626);cursor:default}.pagination__list__item.active a[data-v-433d3aa6]{color:#fff}.pagination__list__item.disabled[data-v-433d3aa6]{cursor:default}.pagination__list__item.hidden[data-v-433d3aa6]{display:none}.pagination__list__item:hover:not(.active):not(.disabled) .icon>*[data-v-433d3aa6],.pagination__list__item:hover:not(.active):not(.disabled) a[data-v-433d3aa6]{color:#3874e0}",""]),t.exports=e},456:function(t,e,n){"use strict";n(12),n(10),n(11),n(21);var r=n(4),o=(n(6),n(5),n(8));n(99);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={props:{value:{type:Number},max:{type:Number,required:!0},clearFirstPage:{type:Boolean,default:!0},appendParams:{type:Object,default:function(){return{}}},appendQuery:{type:Object,default:function(){return{}}}},computed:{pages:function(){if(null===this.value||this.value>this.max)return[];var t=Math.max(1,this.value-3),e=Math.min(this.max,this.value+3);return Object(o.a)(Array(e-t+1).keys()).map((function(e){return t+e}))},toLink:function(){var t=this;return function(e){var n=Number(e),r=isFinite(n)&&n>1?n:void 0,o={page:r,id:t.$route.params.id},l=c({},t.$route.query);return(r||!r&&!t.clearFirstPage)&&(o=c(c({},o),t.appendParams),l=c(c({},l),t.appendQuery)),{name:t.$route.name,params:o,query:l}}}},methods:{selectPage:function(t){t>=1&&t<=this.max&&this.$emit("input",t)}}},m=(n(454),n(17)),component=Object(m.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.value&&t.max>1?n("div",{staticClass:"pagination"},[n("ul",{staticClass:"pagination__list"},[n("li",{staticClass:"pagination__list__item",class:{hidden:t.value<=1}},[n("nuxt-link",{attrs:{to:t.toLink(t.value-1),"no-prefetch":""},nativeOn:{click:function(e){return t.selectPage(t.value-1)}}},[n("font-awesome-icon",{staticClass:"icon",attrs:{icon:"chevron-left"}})],1)],1),t._v(" "),n("li",{staticClass:"pagination__list__item white",class:{hidden:t.max<=2||1===t.pages[0]}},[n("nuxt-link",{attrs:{to:t.toLink(1),"no-prefetch":""},nativeOn:{click:function(e){return t.selectPage(1)}}},[t._v("\n                1\n            ")])],1),t._v(" "),n("li",{staticClass:"pagination__list__item disabled",class:{hidden:t.max<=2||t.pages[0]-1<=0}},[t._v("\n            ...\n        ")]),t._v(" "),t._l(t.pages,(function(i){return n("li",{key:i,staticClass:"pagination__list__item white",class:{active:i===t.value}},[n("nuxt-link",{attrs:{to:t.toLink(i),"no-prefetch":""},nativeOn:{click:function(e){return t.selectPage(i)}}},[t._v("\n                "+t._s(i)+"\n            ")])],1)})),t._v(" "),n("li",{staticClass:"pagination__list__item disabled",class:{hidden:t.max<=2||t.pages[t.pages.length-1]+1>=t.max}},[t._v("\n            ...\n        ")]),t._v(" "),n("li",{staticClass:"pagination__list__item white",class:{hidden:t.pages[t.pages.length-1]===t.max}},[n("nuxt-link",{attrs:{to:t.toLink(t.max),"no-prefetch":""},nativeOn:{click:function(e){return t.selectPage(t.max)}}},[t._v("\n                "+t._s(t.max)+"\n            ")])],1),t._v(" "),n("li",{staticClass:"pagination__list__item",class:{hidden:t.value>=t.max}},[n("nuxt-link",{attrs:{to:t.toLink(t.value+1),"no-prefetch":""},nativeOn:{click:function(e){return t.selectPage(t.value+1)}}},[n("font-awesome-icon",{staticClass:"icon",attrs:{icon:"chevron-right"}})],1)],1)],2)]):t._e()}),[],!1,null,"433d3aa6",null);e.a=component.exports},457:function(t,e,n){"use strict";var r={props:{icon:{default:null},outline:{type:Boolean,default:!1},to:{type:[String,Object],default:""},href:{type:String,default:""},size:{type:String,default:"normal"}},computed:{componentName:function(){var t="div";return this.href?t="a":this.to&&(t="nuxt-link"),t}}},o=(n(462),n(17)),component=Object(o.a)(r,(function(){var t,e=this,n=e.$createElement,r=e._self._c||n;return r(e.componentName,{tag:"component",staticClass:"btn_default",class:(t={icon:e.icon,outline:e.outline},t["size-"+e.size]=!0,t),attrs:{to:e.to,href:e.href?e.href:null,rel:e.href?"nofollow":null,target:e.href?"_blank":null,"no-prefetch":""},on:{click:function(t){return e.$emit("click")}}},[null!==e.icon?r("font-awesome-icon",{staticClass:"icon",attrs:{icon:e.icon}}):e._t("default")],2)}),[],!1,null,null,null);e.a=component.exports},462:function(t,e,n){"use strict";var r=n(445);n.n(r).a},463:function(t,e,n){(e=n(18)(!1)).push([t.i,".btn_default{display:flex;flex-direction:row;align-items:center;justify-content:center;cursor:pointer;font-size:.83rem;line-height:1.0375rem;background-color:#3874e0;border-radius:.2075rem;text-align:center;font-weight:400;color:#fff;min-height:2.49rem;min-width:2.49rem}@media (max-width:449px){.btn_default{min-height:12.1519rem;min-width:12.1519rem;font-size:4.05063rem;line-height:5.06329rem}}.btn_default.text--bold{font-weight:700;padding:.72625rem}.btn_default.outline{border:.05187rem solid #3874e0;color:#3874e0;background-color:rgba(56,116,224,0)}.btn_default.green,.btn_default.success{background-color:#68c87a}.btn_default.green.outline,.btn_default.success.outline{border-color:#68c87a;color:#68c87a;background-color:rgba(56,116,224,0)}.btn_default.grey{background-color:#d2d5d9}.btn_default.grey.outline{border-color:#d2d5d9;color:#d2d5d9;background-color:rgba(56,116,224,0)}.btn_default.red{background-color:#d1004a}.btn_default.red.outline{border-color:#d1004a;color:#d1004a;background-color:rgba(56,116,224,0)}.btn_default.white-blue{background-color:#fff}.btn_default.white-blue.outline{border-color:#93c2e8;color:#93c2e8;background-color:#fff}.btn_default.icon{min-width:0;min-height:0;border-radius:50%;color:#fff}.btn_default.icon.white-blue{color:#93c2e8}.btn_default.icon.white-blue:hover{color:#fff}.btn_default.icon.size-normal{width:2.075rem;height:2.075rem}@media (max-width:449px){.btn_default.icon.size-normal{height:10.12658rem;width:10.12658rem}}.btn_default.icon.size-small{width:1.8675rem;height:1.8675rem}@media (max-width:449px){.btn_default.icon.size-small{height:9.11392rem;width:9.11392rem}}",""]),t.exports=e},603:function(t,e,n){var content=n(889);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(19).default)("60b4f8f7",content,!0,{sourceMap:!1})},604:function(t,e,n){var content=n(893);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(19).default)("d9e7051e",content,!0,{sourceMap:!1})},605:function(t,e,n){var content=n(895);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(19).default)("85d7b6c2",content,!0,{sourceMap:!1})},888:function(t,e,n){"use strict";var r=n(603);n.n(r).a},889:function(t,e,n){var r=n(18),o=n(47),l=n(890),c=n(891);e=r(!1);var d=o(l),m=o(c);e.push([t.i,".banner[data-v-4eccac90]{box-sizing:border-box;width:100%;height:20.23125rem;padding:2.075rem;display:flex;flex-flow:column nowrap;justify-content:flex-start;align-items:flex-start;background:#fff url("+d+") no-repeat 50%/80%;border:1px solid #d2d5d9;border-radius:.2075rem}@media (max-width:449px){.banner[data-v-4eccac90]{height:124.05063rem;padding:6.07595rem!important;justify-content:flex-start;border-radius:1.01266rem;background:#fff url("+m+") no-repeat center 65%/85%}}.banner-title[data-v-4eccac90]{margin-bottom:.83rem;font-size:1.55625rem;line-height:1.97125rem;color:#2a2626}@media (max-width:449px){.banner-title[data-v-4eccac90]{width:55.6962rem;margin-bottom:4.05063rem;font-size:6.07595rem;line-height:8.10127rem}}.banner-description[data-v-4eccac90]{width:18.31188rem;font-size:.93375rem;line-height:1.34875rem;color:#2a2626}@media (max-width:449px){.banner-description[data-v-4eccac90]{width:74.68354rem;margin-bottom:6.07595rem;font-size:4.55696rem;line-height:6.58228rem}}.banner-button[data-v-4eccac90]{margin:auto 0 0 auto}@media (max-width:449px){.banner-button[data-v-4eccac90]{margin:auto 0 0}}",""]),t.exports=e},890:function(t,e,n){t.exports=n.p+"img/testing-banner.8efc932.png"},891:function(t,e,n){t.exports=n.p+"img/testing-banner-mobile.0f0659c.png"},892:function(t,e,n){"use strict";var r=n(604);n.n(r).a},893:function(t,e,n){(e=n(18)(!1)).push([t.i,".category-list[data-v-1e10a707]{box-sizing:border-box;padding:2.075rem 2.075rem 2.49rem;background:#fff;border:1px solid #d2d5d9;border-radius:.2075rem}@media (max-width:449px){.category-list[data-v-1e10a707]{padding:8.10127rem 4.05063rem;border-radius:0;border-left:none;border-right:none}}.category-list-row[data-v-1e10a707],.category-list-title-row[data-v-1e10a707]{display:flex;flex-flow:row nowrap;justify-content:space-between;align-items:center}@media (max-width:449px){.category-list-row[data-v-1e10a707],.category-list-title-row[data-v-1e10a707]{display:block}}.category-list-title-row[data-v-1e10a707]{margin-bottom:1.66rem}@media (max-width:449px){.category-list-title-row[data-v-1e10a707]{margin-bottom:6.07595rem}}.category-list-row[data-v-1e10a707]{margin-bottom:1.245rem}@media (max-width:449px){.category-list-row[data-v-1e10a707]{margin-bottom:6.07595rem}}.category-list-row[data-v-1e10a707]:last-of-type{margin-bottom:0}.category-list-title[data-v-1e10a707]{margin:0;font-weight:600;font-size:1.55625rem;line-height:1.97125rem;color:#2a2626}@media (max-width:449px){.category-list-title[data-v-1e10a707]{margin-bottom:6.07595rem;font-size:7.59494rem;line-height:9.62025rem}}.category-list-show-more[data-v-1e10a707],.category-list-text-button[data-v-1e10a707]{font-weight:600;font-size:1.0375rem;line-height:1.4525rem;color:#2a2626;cursor:pointer}@media (max-width:449px){.category-list-show-more[data-v-1e10a707],.category-list-text-button[data-v-1e10a707]{margin-top:6.07595rem;font-size:5.06329rem;line-height:7.08861rem}}@media (max-width:449px){.category-list-show-more[data-v-1e10a707]{margin-top:6.07595rem}}.category-list-content[data-v-1e10a707]{margin:0;padding:0;list-style:none}@media (max-width:449px){.category-list-link[data-v-1e10a707]{margin-bottom:1.01266rem}}.category-list-count[data-v-1e10a707]{font-weight:600;font-size:1.0375rem;line-height:1.4525rem;color:#98a0a9}@media (max-width:449px){.category-list-count[data-v-1e10a707]{font-size:5.06329rem;line-height:7.08861rem}}",""]),t.exports=e},894:function(t,e,n){"use strict";var r=n(605);n.n(r).a},895:function(t,e,n){(e=n(18)(!1)).push([t.i,".testing[data-v-6b9e9345]{width:80.095rem;margin:0 auto 4.15rem}@media (max-width:449px){.testing[data-v-6b9e9345]{width:100%;margin:0}}.testing h1[data-v-6b9e9345]{margin:0 0 2.12688rem;font-weight:600;font-size:1.8675rem;line-height:2.2825rem;color:#2a2626}@media (max-width:449px){.testing h1[data-v-6b9e9345]{margin:0 4.05063rem 6.07595rem;font-size:9.11392rem;line-height:11.13924rem}}.testing-content[data-v-6b9e9345]{display:flex;flex-flow:row nowrap;justify-content:flex-start;align-items:flex-start}@media (max-width:449px){.testing-content[data-v-6b9e9345]{flex-flow:column-reverse nowrap}}.testing-left[data-v-6b9e9345]{box-sizing:border-box;width:47.36187rem;margin-right:1.66rem}@media (max-width:449px){.testing-left[data-v-6b9e9345]{width:100%;margin:0}}.testing-card-row[data-v-6b9e9345]{display:flex;flex-flow:row wrap;justify-content:flex-start;align-items:flex-start}@media (max-width:449px){.testing-card-row[data-v-6b9e9345]{display:block;padding:0 4.05063rem}}.testing-card[data-v-6b9e9345]{margin:0 1.66rem 1.66rem 0}.testing-card[data-v-6b9e9345]:nth-of-type(3n){margin-right:0}@media (max-width:449px){.testing-card[data-v-6b9e9345]{margin:0 0 8.10127rem}}.testing-banner[data-v-6b9e9345]{margin-bottom:2.49rem}@media (max-width:449px){.testing-banner[data-v-6b9e9345]{margin-bottom:8.10127rem;padding:0 4.05063rem}}.testing-right[data-v-6b9e9345]{box-sizing:border-box;width:31.02125rem}@media (max-width:449px){.testing-right[data-v-6b9e9345]{width:100%;margin:0 0 8.10127rem}}",""]),t.exports=e}}]);