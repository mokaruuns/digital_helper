(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{1092:function(e,t,n){"use strict";n.r(t);n(7);var r=n(0),c=(n(21),n(443)),o=n(691),m={name:"OtherSkill",components:{Breadcrumbs:c.a,Competence:o.a},head:function(){return{title:this.pageTitle,link:[{rel:"canonical",href:"https://".concat(this.$config.rsvDomain,"/other-skills/").concat(this.$route.params.id,"/")}]}},data:function(){return{key:"soft",loading:!1}},computed:{pageTitle:function(){return"Компетенция: ".concat(this.competence?this.competence.name:"")},competence:function(){var e=this.$route.params.id;return this.$store.getters["newCompetences/competenceByKeyAndId"](this.key,e)},breadcrumbs:function(){var e=[{text:"Главная",path:{name:"index"}},{text:"Компетенции",path:{name:"other-skills"}}];return this.competence?e.push({text:this.competence.name,path:this.$route.path}):e.push({text:this.loading?"":"Компетенция не найдена",path:this.$route.path}),e}},fetch:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading=!0,t.next=3,e.$store.dispatch("newCompetences/loadByKey",e.key);case 3:e.competence||e.$nuxt.context.error({status:404,message:"Компетенция не найдена"}),e.loading=!1;case 5:case"end":return t.stop()}}),t)})))()}},d=(n(874),n(17)),component=Object(d.a)(m,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"other-skill"},[t("Breadcrumbs",{staticClass:"breadcrumbs-container",attrs:{items:this.breadcrumbs}}),this._v(" "),t("Competence",{directives:[{name:"loading",rawName:"v-loading",value:this.loading,expression:"loading"}],attrs:{mode:this.key}})],1)}),[],!1,null,"973a5b82",null);t.default=component.exports},460:function(e,t,n){var content=n(490);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(19).default)("081e972b",content,!0,{sourceMap:!1})},480:function(e,t,n){var content=n(590);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(19).default)("72584c78",content,!0,{sourceMap:!1})},489:function(e,t,n){"use strict";var r=n(460);n.n(r).a},490:function(e,t,n){var r=n(18),c=n(47),o=n(491),m=n(492),d=n(493);t=r(!1);var l=c(o),h=c(m),f=c(d);t.push([e.i,".competence-link[data-v-4693ad7b]{display:flex;align-items:center}.competence-link:hover .competence-icon[data-v-4693ad7b]{background-image:url("+l+")}.competence-link:hover .competence-name[data-v-4693ad7b]{color:#3874e0}.competence-icon[data-v-4693ad7b]{width:1.14125rem;height:1.14125rem;flex:none;background:no-repeat 50%/contain}@media (max-width:449px){.competence-icon[data-v-4693ad7b]{width:5.56962rem;height:5.56962rem}}.soft-icon[data-v-4693ad7b]{background-image:url("+h+")}.hard-icon[data-v-4693ad7b]{background-image:url("+f+")}.competence-name[data-v-4693ad7b]{font-weight:600;font-size:.93375rem;line-height:1.34875rem;color:#2a2626;margin-left:.415rem}@media (max-width:449px){.competence-name[data-v-4693ad7b]{font-size:4.55696rem;line-height:6.58228rem;margin-left:2.02532rem}}",""]),e.exports=t},491:function(e,t,n){e.exports=n.p+"img/hover-competence.bd3b0f2.svg"},492:function(e,t,n){e.exports=n.p+"img/soft-competence.bf65159.svg"},493:function(e,t,n){e.exports=n.p+"img/hard-competence.f68c5d2.svg"},500:function(e,t,n){"use strict";n(21),n(99);var r={soft:"other-skills",hard:"hard-skills"},c={name:"CompetenceLink",props:{cid:[String,Number],name:String,mode:String,competenceType:{type:String,default:""}},computed:{to:function(){return{name:this.mode?r[this.mode]:"".concat(this.$route.name,"-id"),params:{id:this.cid}}}}},o=(n(489),n(17)),component=Object(o.a)(c,(function(){var e=this.$createElement,t=this._self._c||e;return t("router-link",{staticClass:"competence-link",attrs:{to:this.to}},[t("div",{staticClass:"competence-icon",class:"soft"===this.competenceType?"soft-icon":"hard-icon"}),this._v(" "),t("div",{staticClass:"competence-name"},[this._v(this._s(this.name))])])}),[],!1,null,"4693ad7b",null);t.a=component.exports},589:function(e,t,n){"use strict";var r=n(480);n.n(r).a},590:function(e,t,n){var r=n(18),c=n(47),o=n(591),m=n(592);t=r(!1);var d=c(o),l=c(m);t.push([e.i,".competence[data-v-c63a60ac]{width:54.26125rem;margin:0 auto 3.32rem}@media (max-width:449px){.competence[data-v-c63a60ac]{width:100%;margin:0 auto 16.20253rem}}.content-block[data-v-c63a60ac]{margin:0 0 .83rem;padding:2.49rem 3.32rem 2.905rem;border:1px solid #d2d5d9;border-radius:.2075rem;background:#fff}@media (max-width:449px){.content-block[data-v-c63a60ac]{margin:0 0 4.05063rem;padding:8.10127rem 4.05063rem 10.12658rem;border-left:none;border-right:none;border-radius:0}}h1[data-v-c63a60ac]{margin:0 0 1.66rem;font-size:1.66rem;font-weight:600;color:#2a2626}@media (max-width:449px){h1[data-v-c63a60ac]{margin:0;font-size:6.07595rem;line-height:7.34177rem}}.description[data-v-c63a60ac]{font-size:.83rem;color:#2a2626;line-height:165%}@media (max-width:449px){.description[data-v-c63a60ac]{font-size:3.79747rem;margin-top:4.05063rem}}.buttons[data-v-c63a60ac]{display:flex;justify-content:space-between}@media (max-width:449px){.buttons[data-v-c63a60ac]{flex-direction:column}}.buttons .button[data-v-c63a60ac]{width:48%;margin-top:1.66rem;font-size:1.0375rem;line-height:1.4525rem;height:2.905rem}@media (max-width:449px){.buttons .button[data-v-c63a60ac]{width:100%;height:12.1519rem;margin-top:6.07595rem;font-size:4.55696rem;line-height:6.58228rem}}.buttons .icon[data-v-c63a60ac]{background:no-repeat 50%/contain;margin-left:.83rem}.buttons .icon.add[data-v-c63a60ac]{width:1.97125rem;height:1.4525rem;background-image:url("+d+")}.buttons .icon.added[data-v-c63a60ac]{width:1.4525rem;height:1.4525rem;background-image:url("+l+")}@media (max-width:449px){.buttons .icon[data-v-c63a60ac]{margin-left:4.05063rem}.buttons .icon.add[data-v-c63a60ac]{width:9.62025rem;height:7.08861rem}.buttons .icon.added[data-v-c63a60ac]{width:7.08861rem;height:7.08861rem}}h2[data-v-c63a60ac]{font-size:1.0375rem;font-weight:600;margin-top:2.49rem;margin-bottom:0}@media (max-width:449px){h2[data-v-c63a60ac]{font-size:5.06329rem;margin-top:12.1519rem;margin-bottom:-4.05063rem}}.indicators ul[data-v-c63a60ac]{background:#f7f7f8;padding:.51875rem 2.49rem 1.245rem;border-radius:1.245rem}@media (max-width:449px){.indicators ul[data-v-c63a60ac]{padding:2.53165rem 12.1519rem 6.07595rem;border-radius:6.07595rem;margin-top:10.12658rem}}.indicators li[data-v-c63a60ac]{font-size:.83rem;line-height:1.34875rem;margin-top:.72625rem}@media (max-width:449px){.indicators li[data-v-c63a60ac]{font-size:3.5443rem;line-height:5.06329rem;margin-top:3.5443rem}}.essence[data-v-c63a60ac]{margin-top:1.66rem}@media (max-width:449px){.essence[data-v-c63a60ac]{margin-top:10.12658rem}}.interests[data-v-c63a60ac]{margin-bottom:1.4525rem}.interests-title[data-v-c63a60ac]{margin:0 0 1.66rem;font-weight:600;font-size:1.55625rem;line-height:1.97125rem;color:#2a2626}@media (max-width:449px){.interests-title[data-v-c63a60ac]{margin:0 0 6.07595rem;font-size:6.58228rem;line-height:8.60759rem}}.interests-list[data-v-c63a60ac]{display:flex;flex-flow:row wrap;justify-content:flex-start;align-items:flex-start}@media (max-width:449px){.interests-list[data-v-c63a60ac]{display:block}}.interests-item[data-v-c63a60ac]{box-sizing:border-box;width:50%;margin:0 0 1.0375rem}.interests-item[data-v-c63a60ac]:nth-of-type(odd){padding:0 2.075rem 0 0}@media (max-width:449px){.interests-item[data-v-c63a60ac]{width:100%;margin:0 0 5.06329rem;padding:0}}.pre-footer[data-v-c63a60ac]{font-size:.72625rem;font-weight:600;color:#d2d5d9;margin:0 0 .83rem}@media (max-width:449px){.pre-footer[data-v-c63a60ac]{font-size:3.5443rem;margin:3.03797rem 0 3.5443rem}}footer[data-v-c63a60ac]{display:flex;flex-flow:row nowrap;justify-content:flex-start;align-items:center}.competence-block[data-v-c63a60ac]{width:54.26125rem;margin:0 0 .83rem}@media (max-width:449px){.competence-block[data-v-c63a60ac]{width:100%;margin:0 auto 16.20253rem}}",""]),e.exports=t},591:function(e,t,n){e.exports=n.p+"img/add.c65447f.svg"},592:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTciIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAxNyAxNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE2LjQzMDUgMi4yMDMyN0wxNC45ODg4IDAuNjg1Njk1QzE0Ljc5MTEgMC40Nzc0NTIgMTQuNTUwNyAwLjM3MzI5MSAxNC4yNjgxIDAuMzczMjkxQzEzLjk4NTMgMC4zNzMyOTEgMTMuNzQ0OCAwLjQ3NzQ1MiAxMy41NDcyIDAuNjg1Njk1TDYuNTkyODUgOC4wMTcwOEwzLjQ3NjE2IDQuNzI1MTdDMy4yNzgyNSA0LjUxNjg1IDMuMDM3OTggNC40MTI4MSAyLjc1NTM4IDQuNDEyODFDMi40NzI2IDQuNDEyODEgMi4yMzIzMyA0LjUxNjg1IDIuMDM0NDIgNC43MjUxN0wwLjU5MjcxOSA2LjI0Mjc5QzAuMzk0ODE0IDYuNDUxMDcgMC4yOTU4OTggNi43MDQwNyAwLjI5NTg5OCA3LjAwMTdDMC4yOTU4OTggNy4yOTkwOSAwLjM5NDgxNCA3LjU1MjMyIDAuNTkyNzE5IDcuNzYwNTdMNC40MzAxOSAxMS43OTk5TDUuODcyIDEzLjMxNzVDNi4wNjk3OSAxMy41MjU5IDYuMzEwMTQgMTMuNjMgNi41OTI4NSAxMy42M0M2Ljg3NTQ1IDEzLjYzIDcuMTE1OCAxMy41MjU2IDcuMzEzNyAxMy4zMTc1TDguNzU1NDggMTEuNzk5OUwxNi40MzA1IDMuNzIwOTdDMTYuNjI4MiAzLjUxMjY1IDE2LjcyNzMgMy4yNTk2OSAxNi43MjczIDIuOTYyMDZDMTYuNzI3NSAyLjY2NDU5IDE2LjYyODIgMi40MTE2IDE2LjQzMDUgMi4yMDMyN1oiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo="},596:function(e,t,n){var content=n(875);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(19).default)("a31fa476",content,!0,{sourceMap:!1})},691:function(e,t,n){"use strict";n(12),n(10),n(6),n(5),n(11);var r=n(4),c=(n(7),n(0)),o=(n(49),n(67),n(31)),m=n(500),d=n(458),l=n(488),h=n(502);function f(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function v(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var x={name:"Competence",components:{CompetenceLink:m.a,SocialLinks:d.a,ScrollTop:l.a,ProfessionWhereToStudy:h.a},props:{mode:String},computed:{currentUrl:function(){return"https://".concat(this.$config.rsvDomain).concat(this.$route.fullPath)},id:function(){return this.$route.params.id},competence:function(){return this.$store.getters["newCompetences/competenceByKeyAndId"](this.mode,this.id)},indicators:function(){return this.competence.indicators.reduce((function(e,t){return t.deleted||e.push(t.value),e}),[])},interest:function(){var e=this.$store.getters["newCompetences/competencesByKey"](this.mode),t=this.competence.relatedCompetences;return e.filter((function(e){return e.isPublish&&t.includes(e.id)}))}},watch:{id:function(){this.loadContent()}},created:function(){var e=this;return Object(c.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.loadContent();case 2:case"end":return t.stop()}}),t)})))()},methods:v(v({},Object(o.b)(["login"])),{},{loadContent:function(){var e=this;return Object(c.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("newCompetences/loadByKey",e.mode);case 2:case"end":return t.stop()}}),t)})))()},startTest:function(){this.login()},addToTrack:function(){this.login()}})},w=(n(589),n(17)),component=Object(w.a)(x,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"competence"},[e.competence?n("div",{staticClass:"content-block"},[n("h1",[e._v(e._s(e.competence.name))]),e._v(" "),n("div",{staticClass:"description"},[e._v(e._s(e.competence.description))]),e._v(" "),e.competence.isPublish?n("div",{staticClass:"buttons"},[n("button",{staticClass:"blue-button button",on:{click:e.addToTrack}},[n("span",[e._v("Добавить в трек")]),e._v(" "),n("div",{staticClass:"icon add"})]),e._v(" "),e.competence.test?n("span",{staticClass:"green-button button",attrs:{target:"_blank",rel:"noopener"},on:{click:e.startTest}},[n("span",[e._v("Проверь свой уровень")])]):e._e()]):e._e(),e._v(" "),e.indicators.length?n("div",{staticClass:"indicators"},[n("h2",[e._v("Индикаторы компетенции")]),e._v(" "),n("ul",e._l(e.indicators,(function(t,r){return n("li",{key:r},[e._v("\n                    "+e._s(t)+"\n                ")])})),0)]):e._e()]):e._e(),e._v(" "),e.competence&&e.competence.isPublish?n("ProfessionWhereToStudy",{staticClass:"competence-block",attrs:{entityId:e.$route.params.id,entityType:"competence",competence:e.competence}}):e._e(),e._v(" "),e.competence?n("div",{staticClass:"content-block"},[e.interest.length?n("div",{staticClass:"interests"},[n("h2",{staticClass:"interests-title"},[e._v("\n                Вам может быть интересно\n            ")]),e._v(" "),n("div",{staticClass:"interests-list"},e._l(e.interest,(function(t){return n("CompetenceLink",{key:t.id,staticClass:"interests-item",attrs:{cid:t.id,name:t.name,mode:e.mode,"competence-type":e.mode}})})),1)]):e._e(),e._v(" "),n("div",{staticClass:"pre-footer"},[e._v("Поделиться в социальных сетях")]),e._v(" "),n("footer",[n("SocialLinks",{staticClass:"footer__actions__share",attrs:{mode:"share",vk:"",ok:"",tg:"",fb:"","copy-link":e.currentUrl}}),e._v(" "),n("ScrollTop",{staticClass:"footer__actions__scroll"})],1)]):e._e()],1)}),[],!1,null,"c63a60ac",null);t.a=component.exports},874:function(e,t,n){"use strict";var r=n(596);n.n(r).a},875:function(e,t,n){(t=n(18)(!1)).push([e.i,".breadcrumbs-container[data-v-973a5b82]{padding:0 9.7525rem}@media (max-width:449px){.breadcrumbs-container[data-v-973a5b82]{padding:0}}",""]),e.exports=t}}]);