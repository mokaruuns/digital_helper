(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{441:function(e,t,r){var content=r(447);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(19).default)("81be1f20",content,!0,{sourceMap:!1})},442:function(e,t,r){var content=r(450);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(19).default)("64caf822",content,!0,{sourceMap:!1})},443:function(e,t,r){"use strict";r(12),r(10),r(6),r(5),r(11);var n=r(4);r(21);function o(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var m={props:{label:String,to:{type:[String,Object],default:null}},methods:{navigate:function(){if(this.to)this.$router.push(this.to);else{var e={name:this.$route.name,params:c({},this.$route.params),query:c({},this.$route.query)};delete e.query.mView,this.$router.push(e)}}}},d=(r(446),r(17)),l=Object(d.a)(m,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"mobile-breadcrumbs"},[t("a",{on:{click:this.navigate}},[this._v(this._s(this.label))])])}),[],!1,null,"524da1f4",null).exports,h=r(31);function f(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function v(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var y={components:{CloseDetail:l},props:{items:{type:Array,default:function(){return[{text:"Главная",path:{name:"index"}}]}}},computed:v(v({},Object(h.c)(["is_collapsed"])),{},{mobileItem:function(){return this.items.length>1?this.items[this.items.length-2]:this.items[this.items.length-1]},displayBack:function(){return this.is_collapsed&&this.items.length>2}})},x=(r(449),Object(d.a)(y,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.displayBack?r("CloseDetail",{attrs:{label:e.mobileItem.text,to:e.mobileItem.path}}):r("div",{staticClass:"breadcrumbs"},[e._l(e.items,(function(t,i){return[i+1<e.items.length?r("nuxt-link",{key:t.text,staticClass:"item grey",attrs:{to:t.path,"no-prefetch":""}},[e._v("\n            "+e._s(t.text)+"\n        ")]):r("div",{key:t.text,staticClass:"item current"},[e._v("\n            "+e._s(t.text)+"\n        ")])]}))],2)}),[],!1,null,"93a71902",null));t.a=x.exports},446:function(e,t,r){"use strict";var n=r(441);r.n(n).a},447:function(e,t,r){var n=r(18),o=r(47),c=r(448);t=n(!1);var m=o(c);t.push([e.i,'.mobile-breadcrumbs[data-v-524da1f4]{display:flex;align-items:center;margin:1.245rem 0;cursor:pointer}@media (max-width:449px){.mobile-breadcrumbs[data-v-524da1f4]{margin:6.07595rem 4.05063rem}}.mobile-breadcrumbs a[data-v-524da1f4]{font-style:normal;font-weight:600;color:#bac5cb;font-size:.83rem;line-height:1.0375rem}@media (max-width:449px){.mobile-breadcrumbs a[data-v-524da1f4]{font-size:3.03797rem;line-height:3.79747rem}}.mobile-breadcrumbs[data-v-524da1f4]:before{content:" ";width:.415rem;height:.67437rem;margin-right:.415rem;display:block;background:no-repeat 50%/contain url('+m+")}@media (max-width:449px){.mobile-breadcrumbs[data-v-524da1f4]:before{width:3.29114rem;height:3.29114rem;margin-right:2.02532rem}}",""]),e.exports=t},448:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOCIgaGVpZ2h0PSIxMyIgdmlld0JveD0iMCAwIDggMTMiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0yLjQxNDIxIDYuNUw3LjcwNzExIDEuNTg1MTdDOC4wOTc2MyAxLjIyMjU0IDguMDk3NjMgMC42MzQ2MDIgNy43MDcxMSAwLjI3MTk3MkM3LjMxNjU4IC0wLjA5MDY1NzUgNi42ODM0MiAtMC4wOTA2NTc1IDYuMjkyODkgMC4yNzE5NzJMMC4yOTI4OTMgNS44NDM0Qy0wLjA5NzYzMTEgNi4yMDYwMyAtMC4wOTc2MzExIDYuNzkzOTcgMC4yOTI4OTMgNy4xNTY2TDYuMjkyODkgMTIuNzI4QzYuNjgzNDIgMTMuMDkwNyA3LjMxNjU4IDEzLjA5MDcgNy43MDcxMSAxMi43MjhDOC4wOTc2MyAxMi4zNjU0IDguMDk3NjMgMTEuNzc3NSA3LjcwNzExIDExLjQxNDhMMi40MTQyMSA2LjVaIiBmaWxsPSIjQkFDNUNCIi8+Cjwvc3ZnPgo="},449:function(e,t,r){"use strict";var n=r(442);r.n(n).a},450:function(e,t,r){(t=r(18)(!1)).push([e.i,"@media (max-width:449px){.breadcrumbs[data-v-93a71902]{margin:6.07595rem 4.05063rem;font-size:12px;line-height:15px}}",""]),e.exports=t},460:function(e,t,r){var content=r(490);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(19).default)("081e972b",content,!0,{sourceMap:!1})},489:function(e,t,r){"use strict";var n=r(460);r.n(n).a},490:function(e,t,r){var n=r(18),o=r(47),c=r(491),m=r(492),d=r(493);t=n(!1);var l=o(c),h=o(m),f=o(d);t.push([e.i,".competence-link[data-v-4693ad7b]{display:flex;align-items:center}.competence-link:hover .competence-icon[data-v-4693ad7b]{background-image:url("+l+")}.competence-link:hover .competence-name[data-v-4693ad7b]{color:#3874e0}.competence-icon[data-v-4693ad7b]{width:1.14125rem;height:1.14125rem;flex:none;background:no-repeat 50%/contain}@media (max-width:449px){.competence-icon[data-v-4693ad7b]{width:5.56962rem;height:5.56962rem}}.soft-icon[data-v-4693ad7b]{background-image:url("+h+")}.hard-icon[data-v-4693ad7b]{background-image:url("+f+")}.competence-name[data-v-4693ad7b]{font-weight:600;font-size:.93375rem;line-height:1.34875rem;color:#2a2626;margin-left:.415rem}@media (max-width:449px){.competence-name[data-v-4693ad7b]{font-size:4.55696rem;line-height:6.58228rem;margin-left:2.02532rem}}",""]),e.exports=t},491:function(e,t,r){e.exports=r.p+"img/hover-competence.bd3b0f2.svg"},492:function(e,t,r){e.exports=r.p+"img/soft-competence.bf65159.svg"},493:function(e,t,r){e.exports=r.p+"img/hard-competence.f68c5d2.svg"},500:function(e,t,r){"use strict";r(21),r(99);var n={soft:"other-skills",hard:"hard-skills"},o={name:"CompetenceLink",props:{cid:[String,Number],name:String,mode:String,competenceType:{type:String,default:""}},computed:{to:function(){return{name:this.mode?n[this.mode]:"".concat(this.$route.name,"-id"),params:{id:this.cid}}}}},c=(r(489),r(17)),component=Object(c.a)(o,(function(){var e=this.$createElement,t=this._self._c||e;return t("router-link",{staticClass:"competence-link",attrs:{to:this.to}},[t("div",{staticClass:"competence-icon",class:"soft"===this.competenceType?"soft-icon":"hard-icon"}),this._v(" "),t("div",{staticClass:"competence-name"},[this._v(this._s(this.name))])])}),[],!1,null,"4693ad7b",null);t.a=component.exports},505:function(e,t,r){var content=r(716);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(19).default)("3b52b83c",content,!0,{sourceMap:!1})},506:function(e,t,r){var content=r(718);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(19).default)("6f5d0de2",content,!0,{sourceMap:!1})},507:function(e,t,r){var content=r(720);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(19).default)("504f71b2",content,!0,{sourceMap:!1})},709:function(e,t,r){"use strict";r(21);var n={name:"CompetenceCluster",components:{CompetenceLink:r(500).a},props:{cluster:Object,hasName:Boolean,competenceType:{type:String,default:""}},computed:{competences:function(){return this.cluster.competences.filter((function(e){return e.isPublish}))}}},o=(r(715),r(17)),c={name:"CompetenceType",components:{CompetenceCluster:Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"competence-cluster"},[e.hasName?r("div",{staticClass:"name"},[e._v("\n        "+e._s(e.cluster.name)+"\n    ")]):e._e(),e._v(" "),r("div",{staticClass:"competences"},e._l(e.competences,(function(t){return r("CompetenceLink",{key:t.id,staticClass:"link",attrs:{cid:t.id,name:t.name,"competence-type":e.competenceType}})})),1)])}),[],!1,null,"678a15d1",null).exports},props:{type:Object},data:function(){return{isOpen:!1}},computed:{backgroundImage:function(){var e=this.type&&this.type.logo?this.type.logo.url:"";return"url(".concat(e,")")},displayName:function(){if(this.type){var e=this.type.name||"",t=(this.type.clusters||[]).reduce((function(e,t){return e+=(t.competences||[]).reduce((function(e,t){return t.isPublish&&(e+=1),e}),0)}),0);return"".concat(e).concat(t?" (".concat(t,")"):"")}return""}}},m=(r(717),{name:"Competences",components:{CompetenceType:Object(o.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"competence-type"},[r("div",{staticClass:"competence-card",on:{click:function(t){e.isOpen=!e.isOpen}}},[r("div",{staticClass:"img",style:{backgroundImage:e.backgroundImage}}),e._v(" "),r("div",{staticClass:"text"},[r("div",{staticClass:"name-control"},[r("div",{staticClass:"name"},[e._v(e._s(e.displayName))]),e._v(" "),r("div",{staticClass:"control"},[r("svg",{class:{open:e.isOpen},attrs:{width:"14",height:"7",viewBox:"0 0 14 7",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{d:"M13.667 0.33313L7.00033 6.9998L0.33366 0.33313H13.667Z",fill:"#3874E0"}})])])]),e._v(" "),r("div",{staticClass:"description"},[e._v("\n                "+e._s(e.type.description)+"\n            ")])])]),e._v(" "),e.isOpen?r("div",{staticClass:"competence-details"},e._l(e.type.clusters,(function(t){return r("CompetenceCluster",{key:t.id,attrs:{"competence-type":e.type.key,cluster:t,hasName:e.type.clusters.length>1}})})),1):e._e()])}),[],!1,null,"d58bef90",null).exports},props:{types:Array,hideEmpty:Boolean},computed:{competenceTypes:function(){return this.hideEmpty?this.types.filter((function(e){return e.clusters.some((function(e){return e.competences.some((function(e){return e.isPublish}))}))})):this.types}},created:function(){this.$mainMixinScrollUp()}}),d=(r(719),Object(o.a)(m,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"competences"},this._l(this.competenceTypes,(function(e){return t("CompetenceType",{key:e.id,attrs:{type:e}})})),1)}),[],!1,null,"6a0a2a00",null));t.a=d.exports},715:function(e,t,r){"use strict";var n=r(505);r.n(n).a},716:function(e,t,r){(t=r(18)(!1)).push([e.i,".name[data-v-678a15d1]{width:100%;background:#ecf2f9;color:#3874e0;font-weight:600;font-size:.83rem;line-height:1.0375rem;padding:.72625rem 1.66rem}@media (max-width:449px){.name[data-v-678a15d1]{font-size:4.05063rem;line-height:5.06329rem;padding:3.5443rem 4.05063rem;margin-top:2.53165rem;text-align:center}}.competences[data-v-678a15d1]{display:flex;flex-wrap:wrap;padding:.83rem 0}@media (max-width:449px){.competences[data-v-678a15d1]{padding:4.05063rem 0}}.link[data-v-678a15d1]{margin:.83rem 1.4525rem;width:19.81625rem}@media (max-width:449px){.link[data-v-678a15d1]{width:100%;margin:3.03797rem 0}}",""]),e.exports=t},717:function(e,t,r){"use strict";var n=r(506);r.n(n).a},718:function(e,t,r){(t=r(18)(!1)).push([e.i,".competence-type[data-v-d58bef90]{margin-bottom:2.075rem;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.competence-card[data-v-d58bef90]{width:100%;height:8.3rem;background:#fff;border:.05187rem solid #d2d5d9;display:flex;border-radius:.2075rem}@media (max-width:449px){.competence-card[data-v-d58bef90]{flex-direction:column;height:115.94937rem;border:.25316rem solid #d2d5d9;border-radius:1.01266rem;padding:4.05063rem}}.img[data-v-d58bef90]{width:13.28rem;height:100%;background-size:100% 100%;flex:none}@media (max-width:449px){.img[data-v-d58bef90]{width:100%;height:52.1519rem;border-radius:1.01266rem}}.text[data-v-d58bef90]{padding:1.245rem 1.66rem;flex-grow:1}.name-control[data-v-d58bef90]{line-height:1.66rem;overflow:hidden;display:flex;align-items:center;margin-bottom:.2075rem}@media (max-width:449px){.name-control[data-v-d58bef90]{line-height:7.08861rem;margin:4.05063rem 0 1.51899rem}}.name[data-v-d58bef90]{color:#3874e0;font-weight:600;max-width:28.0125rem}@media (max-width:449px){.name[data-v-d58bef90]{font-size:5.06329rem;max-width:75.94937rem}}.control[data-v-d58bef90]{width:1.66rem;height:100%;flex:none;display:flex;justify-content:center;align-items:center}@media (max-width:449px){.control[data-v-d58bef90]{width:7.08861rem}}.control svg[data-v-d58bef90]{width:35%;height:35%;transition:.2s}.control svg.open[data-v-d58bef90]{transform:rotate(-180deg)}.description[data-v-d58bef90]{font-size:.77812rem;line-height:1.14125rem;color:#2a2626;height:4.20187rem;overflow:hidden;word-break:break-all}@media (max-width:449px){.description[data-v-d58bef90]{font-size:4.05063rem;line-height:5.56962rem;height:auto;max-height:20.50633rem}}.competence-details[data-v-d58bef90]{background:#fff;border:.05187rem solid #d2d5d9;border-radius:.2075rem;margin-top:.415rem;padding:1.245rem .83rem}@media (max-width:449px){.competence-details[data-v-d58bef90]{border:.25316rem solid #d2d5d9;border-radius:1.01266rem;margin-top:2.02532rem;padding:2.02532rem 4.05063rem}}",""]),e.exports=t},719:function(e,t,r){"use strict";var n=r(507);r.n(n).a},720:function(e,t,r){(t=r(18)(!1)).push([e.i,".competences[data-v-6a0a2a00]{width:47.31rem;margin:0 auto;border-radius:.2075rem}@media (max-width:449px){.competences[data-v-6a0a2a00]{width:auto;margin:0 4.05063rem 16.20253rem}}",""]),e.exports=t}}]);