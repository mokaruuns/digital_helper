(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{441:function(t,e,r){var content=r(447);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(19).default)("81be1f20",content,!0,{sourceMap:!1})},442:function(t,e,r){var content=r(450);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(19).default)("64caf822",content,!0,{sourceMap:!1})},443:function(t,e,r){"use strict";r(12),r(10),r(6),r(5),r(11);var n=r(4);r(21);function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var l={props:{label:String,to:{type:[String,Object],default:null}},methods:{navigate:function(){if(this.to)this.$router.push(this.to);else{var t={name:this.$route.name,params:c({},this.$route.params),query:c({},this.$route.query)};delete t.query.mView,this.$router.push(t)}}}},d=(r(446),r(17)),m=Object(d.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"mobile-breadcrumbs"},[e("a",{on:{click:this.navigate}},[this._v(this._s(this.label))])])}),[],!1,null,"524da1f4",null).exports,h=r(31);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var w={components:{CloseDetail:m},props:{items:{type:Array,default:function(){return[{text:"Главная",path:{name:"index"}}]}}},computed:v(v({},Object(h.c)(["is_collapsed"])),{},{mobileItem:function(){return this.items.length>1?this.items[this.items.length-2]:this.items[this.items.length-1]},displayBack:function(){return this.is_collapsed&&this.items.length>2}})},x=(r(449),Object(d.a)(w,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.displayBack?r("CloseDetail",{attrs:{label:t.mobileItem.text,to:t.mobileItem.path}}):r("div",{staticClass:"breadcrumbs"},[t._l(t.items,(function(e,i){return[i+1<t.items.length?r("nuxt-link",{key:e.text,staticClass:"item grey",attrs:{to:e.path,"no-prefetch":""}},[t._v("\n            "+t._s(e.text)+"\n        ")]):r("div",{key:e.text,staticClass:"item current"},[t._v("\n            "+t._s(e.text)+"\n        ")])]}))],2)}),[],!1,null,"93a71902",null));e.a=x.exports},445:function(t,e,r){var content=r(463);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(19).default)("4e1ffd60",content,!0,{sourceMap:!1})},446:function(t,e,r){"use strict";var n=r(441);r.n(n).a},447:function(t,e,r){var n=r(18),o=r(47),c=r(448);e=n(!1);var l=o(c);e.push([t.i,'.mobile-breadcrumbs[data-v-524da1f4]{display:flex;align-items:center;margin:1.245rem 0;cursor:pointer}@media (max-width:449px){.mobile-breadcrumbs[data-v-524da1f4]{margin:6.07595rem 4.05063rem}}.mobile-breadcrumbs a[data-v-524da1f4]{font-style:normal;font-weight:600;color:#bac5cb;font-size:.83rem;line-height:1.0375rem}@media (max-width:449px){.mobile-breadcrumbs a[data-v-524da1f4]{font-size:3.03797rem;line-height:3.79747rem}}.mobile-breadcrumbs[data-v-524da1f4]:before{content:" ";width:.415rem;height:.67437rem;margin-right:.415rem;display:block;background:no-repeat 50%/contain url('+l+")}@media (max-width:449px){.mobile-breadcrumbs[data-v-524da1f4]:before{width:3.29114rem;height:3.29114rem;margin-right:2.02532rem}}",""]),t.exports=e},448:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOCIgaGVpZ2h0PSIxMyIgdmlld0JveD0iMCAwIDggMTMiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0yLjQxNDIxIDYuNUw3LjcwNzExIDEuNTg1MTdDOC4wOTc2MyAxLjIyMjU0IDguMDk3NjMgMC42MzQ2MDIgNy43MDcxMSAwLjI3MTk3MkM3LjMxNjU4IC0wLjA5MDY1NzUgNi42ODM0MiAtMC4wOTA2NTc1IDYuMjkyODkgMC4yNzE5NzJMMC4yOTI4OTMgNS44NDM0Qy0wLjA5NzYzMTEgNi4yMDYwMyAtMC4wOTc2MzExIDYuNzkzOTcgMC4yOTI4OTMgNy4xNTY2TDYuMjkyODkgMTIuNzI4QzYuNjgzNDIgMTMuMDkwNyA3LjMxNjU4IDEzLjA5MDcgNy43MDcxMSAxMi43MjhDOC4wOTc2MyAxMi4zNjU0IDguMDk3NjMgMTEuNzc3NSA3LjcwNzExIDExLjQxNDhMMi40MTQyMSA2LjVaIiBmaWxsPSIjQkFDNUNCIi8+Cjwvc3ZnPgo="},449:function(t,e,r){"use strict";var n=r(442);r.n(n).a},450:function(t,e,r){(e=r(18)(!1)).push([t.i,"@media (max-width:449px){.breadcrumbs[data-v-93a71902]{margin:6.07595rem 4.05063rem;font-size:12px;line-height:15px}}",""]),t.exports=e},451:function(t,e,r){var content=r(466);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(19).default)("3f7f94cb",content,!0,{sourceMap:!1})},457:function(t,e,r){"use strict";var n={props:{icon:{default:null},outline:{type:Boolean,default:!1},to:{type:[String,Object],default:""},href:{type:String,default:""},size:{type:String,default:"normal"}},computed:{componentName:function(){var t="div";return this.href?t="a":this.to&&(t="nuxt-link"),t}}},o=(r(462),r(17)),component=Object(o.a)(n,(function(){var t,e=this,r=e.$createElement,n=e._self._c||r;return n(e.componentName,{tag:"component",staticClass:"btn_default",class:(t={icon:e.icon,outline:e.outline},t["size-"+e.size]=!0,t),attrs:{to:e.to,href:e.href?e.href:null,rel:e.href?"nofollow":null,target:e.href?"_blank":null,"no-prefetch":""},on:{click:function(t){return e.$emit("click")}}},[null!==e.icon?n("font-awesome-icon",{staticClass:"icon",attrs:{icon:e.icon}}):e._t("default")],2)}),[],!1,null,null,null);e.a=component.exports},462:function(t,e,r){"use strict";var n=r(445);r.n(n).a},463:function(t,e,r){(e=r(18)(!1)).push([t.i,".btn_default{display:flex;flex-direction:row;align-items:center;justify-content:center;cursor:pointer;font-size:.83rem;line-height:1.0375rem;background-color:#3874e0;border-radius:.2075rem;text-align:center;font-weight:400;color:#fff;min-height:2.49rem;min-width:2.49rem}@media (max-width:449px){.btn_default{min-height:12.1519rem;min-width:12.1519rem;font-size:4.05063rem;line-height:5.06329rem}}.btn_default.text--bold{font-weight:700;padding:.72625rem}.btn_default.outline{border:.05187rem solid #3874e0;color:#3874e0;background-color:rgba(56,116,224,0)}.btn_default.green,.btn_default.success{background-color:#68c87a}.btn_default.green.outline,.btn_default.success.outline{border-color:#68c87a;color:#68c87a;background-color:rgba(56,116,224,0)}.btn_default.grey{background-color:#d2d5d9}.btn_default.grey.outline{border-color:#d2d5d9;color:#d2d5d9;background-color:rgba(56,116,224,0)}.btn_default.red{background-color:#d1004a}.btn_default.red.outline{border-color:#d1004a;color:#d1004a;background-color:rgba(56,116,224,0)}.btn_default.white-blue{background-color:#fff}.btn_default.white-blue.outline{border-color:#93c2e8;color:#93c2e8;background-color:#fff}.btn_default.icon{min-width:0;min-height:0;border-radius:50%;color:#fff}.btn_default.icon.white-blue{color:#93c2e8}.btn_default.icon.white-blue:hover{color:#fff}.btn_default.icon.size-normal{width:2.075rem;height:2.075rem}@media (max-width:449px){.btn_default.icon.size-normal{height:10.12658rem;width:10.12658rem}}.btn_default.icon.size-small{width:1.8675rem;height:1.8675rem}@media (max-width:449px){.btn_default.icon.size-small{height:9.11392rem;width:9.11392rem}}",""]),t.exports=e},465:function(t,e,r){"use strict";var n=r(451);r.n(n).a},466:function(t,e,r){(e=r(18)(!1)).push([t.i,".hash-tags[data-v-d81dadaa]{padding:0}.hash-tags-item[data-v-d81dadaa]{color:#98a0a9;line-height:.88187rem;display:inline-block;margin:.25937rem;font-size:.72625rem;font-weight:600}.hash-tags-item[data-v-d81dadaa]:hover{cursor:pointer;color:#3874e0}@media (max-width:449px){.hash-tags-item[data-v-d81dadaa]{font-size:3.03797rem;line-height:5.56962rem;margin:1.51899rem}}.hash-tags .circle[data-v-d81dadaa]{height:1.8675rem;border:.05187rem solid #d2d5d9;box-sizing:border-box;border-radius:5.1875rem;padding:.415rem .83rem}.hash-tags .circle[data-v-d81dadaa]:hover{cursor:pointer;color:#3874e0;border-color:#3874e0}@media (max-width:449px){.hash-tags .circle[data-v-d81dadaa]{height:9.62025rem;border:.25316rem solid #d2d5d9;box-sizing:border-box;border-radius:25.31646rem;padding:2.02532rem 4.05063rem}}.hash-tags.blue *[data-v-d81dadaa]{color:#3874e0}",""]),t.exports=e},470:function(t,e,r){"use strict";r(12),r(10),r(6),r(5),r(11);var n=r(4),o=(r(21),r(99),r(31));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={props:{items:{type:Array,default:function(){return[]}},pathName:{type:String,default:""},type:{type:String,default:""},circle:{type:Boolean,default:!1},limit:{type:[Number,String],default:0}},computed:{displayItems:function(){return this.items?this.limit?this.items.slice(0,this.limit):this.items:[]},pathOptions:function(){return{name:this.pathName||this.$route.name,params:{id:this.$route.params.id,page:"1",type:this.$route.params.type}}}},methods:l(l({},Object(o.b)("hashtags",["setTag"])),{},{selectTag:function(t){this.setTag({type:this.type,tag:t}),this.scrollToTop()},scrollToTop:function(){window.scrollTo({top:0,behavior:"smooth"})}})},m=(r(465),r(17)),component=Object(m.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"hash-tags"},t._l(t.displayItems,(function(e,n){return r("nuxt-link",{key:n,staticClass:"hash-tags-item",class:{circle:t.circle},attrs:{title:e,to:t.pathOptions,"no-prefetch":""},nativeOn:{click:function(r){return t.selectTag(e)}}},[t._v("\n        "+t._s(t._f("cutString")(t.circle?e:"#"+e))+"\n    ")])})),1)}),[],!1,null,"d81dadaa",null);e.a=component.exports},566:function(t,e,r){var content=r(820);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(19).default)("3884f581",content,!0,{sourceMap:!1})},567:function(t,e,r){var content=r(822);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(19).default)("4519a99b",content,!0,{sourceMap:!1})},568:function(t,e,r){var content=r(824);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(19).default)("7b8892f2",content,!0,{sourceMap:!1})},685:function(t,e,r){"use strict";var n=r(470),o=r(457),c={name:"ParticipationButton",props:{project:Object},data:function(){return{}},components:{Btn:o.a},computed:{btnText:function(){return this.isRegistrationOpen?"Зарегистрироваться":"Регистрация завершена"},isBtnDisabled:function(){return!this.isRegistrationOpen},btnClass:function(){return{green:!0,disabled:this.isBtnDisabled}},isBtnShown:function(){return"active"===this.project.current_status&&this.project.nominations.filter((function(t){return t.is_registration_opened})).length>0},isRegistrationOpen:function(){return this.project.nominations.filter((function(t){return t.is_registration_opened&&!t.is_registration_closed})).length>0}},methods:{onClick:function(){window.location="".concat(window.location.origin,"/portal/competition-system/").concat(this.project.project_id)}}},l=(r(819),r(17)),d=Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{directives:[{name:"show",rawName:"v-show",value:t.isBtnShown,expression:"isBtnShown"}],staticClass:"registration"},[r("div",{staticClass:"btn-row"},[t.btnText?r("Btn",{staticClass:"btn",class:t.btnClass,attrs:{disabled:t.isBtnDisabled},on:{click:t.onClick}},[r("span",{staticClass:"btn-text"},[t._v(t._s(t.btnText))])]):t._e()],1)])}),[],!1,null,"7a1a8370",null).exports,m={name:"CompetitionsDetailsView",components:{Hashtags:n.a,ParticipationButton:d},props:{item:{type:Object,default:function(){return{}}},linkText:{type:String,default:""},listPathName:{type:String,default:""}},data:function(){return{}},computed:{backgroundStyle:function(){var t=this.item.big_picture_link||this.item.picture_link||"";return t?"".concat(t):""}}},h=(r(821),r(823),Object(l.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"details-view"},[r("h1",{staticClass:"details-view-title"},[t._v("\n            "+t._s(t.item.title)+"\n        ")]),t._v(" "),t.item.site_link?r("a",{staticClass:"hover-link-underlined details-view-link",attrs:{href:t.item.site_link,target:"_blank"}},[t._v("\n            "+t._s(t.linkText)+"\n        ")]):t._e(),t._v(" "),r("img",{staticClass:"details-view-picture",attrs:{src:t.backgroundStyle}}),t._v(" "),r("ParticipationButton",{attrs:{project:t.item}}),t._v(" "),r("div",{staticClass:"detail-html",domProps:{innerHTML:t._s(t.item.text)}}),t._v(" "),t.item.tags&&t.item.tags.length?r("Hashtags",{staticClass:"details-view-hash-tags",attrs:{items:t.item.tags,"path-name":t.listPathName,type:"projects",circle:""}}):t._e()],1)}),[],!1,null,"0f990e2c",null));e.a=h.exports},819:function(t,e,r){"use strict";var n=r(566);r.n(n).a},820:function(t,e,r){(e=r(18)(!1)).push([t.i,".registration[data-v-7a1a8370]{margin-top:1.66rem;margin-bottom:2.075rem}@media (max-width:449px){.registration[data-v-7a1a8370]{margin-bottom:5.56962rem}}.registration .btn[data-v-7a1a8370]{width:19.7125rem;height:2.49rem}@media (max-width:449px){.registration .btn[data-v-7a1a8370]{height:10.12658rem;width:100%;margin-top:6.07595rem;border-radius:1.01266rem}}.registration .btn .btn-text[data-v-7a1a8370]{font-weight:700;font-size:.83rem;line-height:1.245rem}@media (max-width:449px){.registration .btn .btn-text[data-v-7a1a8370]{font-weight:600;font-size:3.5443rem;line-height:4.3038rem}}.registration .btn.disabled[data-v-7a1a8370]{opacity:.5;cursor:default}.registration .left[data-v-7a1a8370]{text-align:center;width:19.7125rem;font-weight:600;font-size:.83rem;line-height:1.245rem;color:#2a2626;margin-top:.83rem}@media (max-width:449px){.registration .left[data-v-7a1a8370]{font-size:4.05063rem;line-height:6.07595rem;height:10.12658rem;width:100%;margin-top:4.05063rem}}.btn-row[data-v-7a1a8370]{display:flex;justify-content:center;flex-flow:row nowrap;align-items:center}@media (max-width:449px){.btn-row[data-v-7a1a8370]{display:block}}",""]),t.exports=e},821:function(t,e,r){"use strict";var n=r(567);r.n(n).a},822:function(t,e,r){(e=r(18)(!1)).push([t.i,".details-view[data-v-0f990e2c]{box-sizing:border-box;width:54.26125rem;margin:0 auto 4.15rem;padding:3.32rem;border:1px solid #d2d5d9;border-radius:.2075rem;background-color:#fff}@media (max-width:449px){.details-view[data-v-0f990e2c]{width:100%;padding:8.10127rem 4.05063rem;border-radius:0;border-left:none;border-right:none}}.details-view h1[data-v-0f990e2c]{margin:0 0 1.245rem;font-weight:600;font-size:1.8675rem;line-height:2.2825rem;color:#2a2626}@media (max-width:449px){.details-view h1[data-v-0f990e2c]{margin-bottom:4.05063rem;font-size:7.59494rem;line-height:9.62025rem}}.details-view-link[data-v-0f990e2c]{display:inline-block;margin-bottom:1.245rem}@media (max-width:449px){.details-view-link[data-v-0f990e2c]{margin-bottom:6.07595rem}}.details-view-picture[data-v-0f990e2c]{width:47.62125rem;height:31.7475rem;margin-bottom:1.66rem;background:no-repeat 50%/contain}@media (max-width:449px){.details-view-picture[data-v-0f990e2c]{width:100%;height:75.6962rem;margin-bottom:6.07595rem}}.details-view-description[data-v-0f990e2c]{margin-bottom:2.075rem;font-size:.93375rem;line-height:1.34875rem;color:#2a2626}@media (max-width:449px){.details-view-description[data-v-0f990e2c]{margin-bottom:6.07595rem;font-size:4.55696rem;line-height:6.58228rem}}.details-view-button-row[data-v-0f990e2c]{display:flex;flex-flow:row nowrap;justify-content:center;align-items:center}.details-view-button[data-v-0f990e2c]{width:23.24rem}@media (max-width:449px){.details-view-button[data-v-0f990e2c]{width:100%}}.details-view-hash-tags[data-v-0f990e2c]{margin-top:2.075rem}@media (max-width:449px){.details-view-hash-tags[data-v-0f990e2c]{margin-top:6.07595rem}}",""]),t.exports=e},823:function(t,e,r){"use strict";var n=r(568);r.n(n).a},824:function(t,e,r){(e=r(18)(!1)).push([t.i,".ql-video{width:100%;height:24.485rem}.detail-html *{max-width:100%}@media (max-width:449px){.detail-html *{font-size:4.55696rem;line-height:6.58228rem}}",""]),t.exports=e}}]);