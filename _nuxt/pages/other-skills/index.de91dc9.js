(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{1069:function(e,t,n){"use strict";n.r(t);n(7);var r=n(0),c=n(443),o=n(709),d={name:"OtherSkills",components:{Breadcrumbs:c.a,Competences:o.a},head:function(){return{title:"Компетенции",link:[{rel:"canonical",href:"https://".concat(this.$config.rsvDomain,"/other-skills/")}]}},data:function(){return{key:"soft",breadcrumbs:[{text:"Главная",path:{name:"index"}},{text:"Компетенции",path:{name:"other-skills"}}]}},computed:{types:function(){return this.$store.getters["newCompetences/typesByKey"](this.key)}},fetch:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("newCompetences/loadByKey",e.key);case 2:e.$mainMixinScrollUp();case 3:case"end":return t.stop()}}),t)})))()}},l=(n(723),n(17)),component=Object(l.a)(d,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"other-skills"},[t("Breadcrumbs",{staticClass:"breadcrumbs-container",attrs:{items:this.breadcrumbs}}),this._v(" "),t("Competences",{attrs:{types:this.types,hideEmpty:!0,mode:this.key}})],1)}),[],!1,null,"5a0b0db8",null);t.default=component.exports},509:function(e,t,n){var content=n(724);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(19).default)("b14d0930",content,!0,{sourceMap:!1})},723:function(e,t,n){"use strict";var r=n(509);n.n(r).a},724:function(e,t,n){(t=n(18)(!1)).push([e.i,".breadcrumbs-container[data-v-5a0b0db8]{padding:0 9.7525rem}@media (max-width:449px){.breadcrumbs-container[data-v-5a0b0db8]{padding:0}}",""]),e.exports=t}}]);