webpackJsonp([0],{"/E+L":function(t,e){},0:function(t,e){},"28QG":function(t,e,a){"use strict";e.a={props:{title:{type:String,required:!0}}}},"6VBK":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hc-banner jumbotron jumbotron-fluid bg-info text-white my-0 p-4"},[a("div",{staticClass:"container"},[a("h1",{staticClass:"hc-banner-title font-weight-bold m-0"},[t._v("\n      "+t._s(t.title)+"\n    ")]),t._v(" "),a("nav",{attrs:{"aria-label":"breadcrumbs"}},[a("ol",{staticClass:"breadcrumb hc-banner-breadcrumb mb-0"},[t._t("default"),t._v(" "),a("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[t._v(t._s(t.title))])],2)])])])},s=[],r={render:n,staticRenderFns:s};e.a=r},"6XRP":function(t,e,a){"use strict";var n=a("NYxO"),s=a("ScBB");e.a={mixins:[s.a],computed:Object(n.c)({footerLinks:function(t){return t.footer.links},socialLinks:function(t){return t.social.links},logoUrl:function(t){return t.footer.logoUrl}})}},"7xpi":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-white",attrs:{id:"hc-nav"}},[a("div",{staticClass:"container-fluid"},[a("a",{staticClass:"navbar-brand",attrs:{href:t.logoHref,target:t.logoTarget}},[a("img",{staticClass:"logo",attrs:{src:t.logoUrl,alt:"Hillsborough County Logo"}})]),t._v(" "),a("button",{ref:"navToggler",staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})]),t._v(" "),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[a("ul",{staticClass:"navbar-nav ml-auto"},[t.showForm?a("li",{staticClass:"nav-item order-lg-12 dropdown"},[a("a",{staticClass:"nav-link dropdown-toggle d-none d-lg-inline-block",attrs:{href:"#",title:"Search",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},on:{click:function(e){t.focusSearch()}}},[a("i",{staticClass:"fa fa-fw fa-search"})]),t._v(" "),a("div",{ref:"searchDropdown",staticClass:"dropdown-menu"},[a("NavSearchForm",{ref:"searchForm",attrs:{action:t.formAction,method:t.formMethod,target:t.formTarget,"show-filters":"formShowFilters"}})],1)]):t._e(),t._v(" "),t.customNav?t._t("default"):t._l(t.navLinks,function(e){return a("li",{staticClass:"nav-item order-lg-1 dropdown"},[a("a",{staticClass:"nav-link dropdown-toggle",class:e.linkClass,attrs:{href:"#",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[t._v("\n            "+t._s(e.text)+"\n          ")]),t._v(" "),a("div",{staticClass:"dropdown-menu"},[a("h4",{staticClass:"d-none d-lg-block text-info font-serif font-weight-bold"},[t._v(t._s(e.text))]),t._v(" "),a("div",{staticClass:"dropdown-menu-2-col"},t._l(e.children,function(e){return a("a",{staticClass:"dropdown-item",attrs:{href:"http://hcflgov.net/"+e.ItemUrl,target:t.linkTargets}},[t._v("\n                "+t._s(e.DisplayName)+"\n              ")])}))])])})],2)])])])},s=[],r={render:n,staticRenderFns:s};e.a=r},CENP:function(t,e,a){"use strict";a.d(e,"b",function(){return s}),a.d(e,"c",function(){return r});var n=a("7+uW");e.a={state:{logoUrl:"https://github.com/Commbocc/html-wrapper/raw/master/src/assets/hc-logo-horizontal-RGB.png",links:[{text:"Residents",identifier:"residents-children",linkClass:null,children:[]},{text:"Businesses",identifier:"businesses-children",linkClass:null,children:[]},{text:"Government",identifier:"government-children",linkClass:null,children:[]},{text:"About Hillsborough",identifier:"about-hillsborough-children",linkClass:null,children:[]},{text:"I Want To...",identifier:"i-want-to-children",linkClass:"text-primary",children:[]}]},actions:{fetchNavChildren:function(t){t.state.links.forEach(function(t){var e="https://gist.githubusercontent.com/mccarthyk/93e7ece6a2d1ba903261c6f25479a6cd/raw/2b01d85967dfb2a7727caba9b8f8f44b5010fea9/"+t.identifier+".json";n.a.http.get(e).then(function(e){t.children=e.body.filter(function(t){return t["Show in Menu"]})})})}}};var s={state:{logoUrl:"https://raw.githubusercontent.com/Commbocc/html-wrapper/master/src/assets/hc-logo-horizontal-RGB_drkbgrd.png",links:[{text:"Board of County Commissioners",href:"http://www.hillsboroughcounty.org/en/government/board-of-county-commissioners"},{text:"County Locations",href:"http://www.hillsboroughcounty.org/en/residents/citizens/county-locations"},{text:"Jobs",href:"http://www.hillsboroughcounty.org/en/about-hillsborough/jobs"},{text:"Contact Us",href:"http://www.hillsboroughcounty.org/en/about-hillsborough/contact-us"}]}},r={state:{links:[{name:"Facebook",href:"https://www.facebook.com/HillsboroughFL/",iconClass:"fa-facebook"},{name:"Twitter",href:"https://twitter.com/HillsboroughFL",iconClass:"fa-twitter"},{name:"YouTube",href:"https://www.youtube.com/user/HillsboroughCounty",iconClass:"fa-youtube"},{name:"InstaGram",href:"https://www.instagram.com/hillsboroughfl/",iconClass:"fa-instagram"},{name:"LinkedIn",href:"https://www.linkedin.com/company/hillsborough-county",iconClass:"fa-linkedin"}]}}},IcnI:function(t,e,a){"use strict";var n=a("7+uW"),s=a("NYxO"),r=a("CENP"),o=a("dI8L");n.a.use(s.a),e.a=new s.a.Store({modules:{navigation:r.a,footer:r.b,social:r.c,search:o.a}})},L9eR:function(t,e,a){"use strict";function n(t){a("/E+L")}var s=a("6XRP"),r=a("Va8m"),o=a("VU/8"),i=n,l=o(s.a,r.a,!1,i,null,null);e.a=l.exports},LDOc:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("form",{attrs:{action:t.action,method:t.method,target:t.target}},[a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-lg-8"},[a("hr",{staticClass:"mb-2 mb-lg-0 d-lg-none"}),t._v(" "),a("div",{staticClass:"input-group input-group-lg",attrs:{id:"hc-nav-search-input-group"}},[a("input",{ref:"searchInput",staticClass:"form-control",attrs:{name:"q",type:"search",placeholder:"Search For...","aria-label":"Search",required:""}}),t._v(" "),t._m(0)]),t._v(" "),a("hr",{staticClass:"mt-2 mt-lg-0 mb-0 mb-lg-2"})])]),t._v(" "),t.showFilters?a("ul",{staticClass:"list-inline small text-center d-none d-lg-block mt-3 mb-0"},t._l(t.filters,function(e){return a("li",{staticClass:"list-inline-item px-2"},[a("input",{attrs:{name:"t",type:"checkbox",id:"searchFilter-"+e.key},domProps:{value:e.key,checked:e.checked}}),t._v(" "),a("label",{attrs:{for:"searchFilter-"+e.key}},[a("span",{staticClass:"fa fa-fw",class:e.icon}),t._v("\n        "+t._s(e.text)+"\n      ")])])})):t._e()])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"input-group-btn"},[a("button",{staticClass:"btn btn-link",attrs:{type:"submit"}},[a("span",{staticClass:"fa fa-fw fa-search",attrs:{"aria-label":"Search"}})])])}],r={render:n,staticRenderFns:s};e.a=r},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("7+uW"),s=a("8+8L"),r=a("IcnI"),o=a("K3J8"),i=(a.n(o),a("md8n")),l=a("PyiM"),c=a("L9eR");n.a.use(s.a),n.a.config.productionTip=!1,new n.a({el:"#hc-main",store:r.a,components:{HcNavigation:i.a,HcBanner:l.a,HcFooter:c.a}})},PyiM:function(t,e,a){"use strict";var n=a("28QG"),s=a("6VBK"),r=a("VU/8"),o=r(n.a,s.a,!1,null,null,null);e.a=o.exports},ScBB:function(t,e,a){"use strict";e.a={props:{linkTargets:{type:String,default:"_self"}}}},Va8m:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"bg-secondary text-white py-5",attrs:{id:"hc-footer"}},[a("div",{staticClass:"container"},[a("section",{staticClass:"row align-items-center text-center"},[a("div",{staticClass:"col-md-4 mb-4 order-md-4"},[a("ul",{staticClass:"list-inline mb-0"},t._l(t.footerLinks,function(e){return a("li",{staticClass:"list-inline-item mx-3"},[a("a",{staticClass:"text-white",attrs:{href:e.href,target:t.linkTargets}},[t._v("\n              "+t._s(e.text)+"\n            ")])])}))]),t._v(" "),a("div",{staticClass:"col-md-4 mb-4 order-md-1"},[a("a",{attrs:{href:"http://hcflgov.net",target:t.linkTargets}},[a("img",{staticClass:"logo img-fluid",attrs:{src:t.logoUrl,alt:"Hillsborough County Logo"}})])]),t._v(" "),a("div",{staticClass:"col-md-4 mb-4 order-md-12"},[a("ul",{staticClass:"list-inline mb-0 hide-external-indicator"},t._l(t.socialLinks,function(t){return a("li",{staticClass:"list-inline-item"},[a("a",{staticClass:"text-white",attrs:{href:t.href,title:t.name,target:"_blank"}},[a("i",{staticClass:"fa fa-fw",class:t.iconClass})])])}))])]),t._v(" "),t._m(0)])])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",{staticClass:"text-center small mt-3 mb-0"},[a("a",{staticClass:"text-white hide-external-indicator",attrs:{href:"https://goo.gl/maps/jetXJdK71mu",target:"_blank"}},[t._v("\n        601 E. Kennedy Blvd."),a("br"),t._v("\n        Tampa, FL 33602\n      ")])])}],r={render:n,staticRenderFns:s};e.a=r},dI8L:function(t,e,a){"use strict";e.a={state:{filters:[{key:"article",text:"Web Pages",icon:"fa-file-o",checked:!0},{key:"story",text:"Newsroom Stories",icon:"fa-newspaper-o",checked:!0},{key:"documents",text:"Documents",icon:"fa-file-pdf-o",checked:!1},{key:"events",text:"Events",icon:"fa-calendar",checked:!1},{key:"locations",text:"Locations",icon:"fa-map-marker",checked:!1},{key:"departments",text:"Departments",icon:"fa-building-o",checked:!1}]}}},eMYj:function(t,e,a){"use strict";var n=a("mTMR"),s=a("LDOc"),r=a("VU/8"),o=r(n.a,s.a,!1,null,null,null);e.a=o.exports},geF4:function(t,e,a){"use strict";var n=a("NYxO");e.a={methods:Object(n.b)(["fetchNavChildren"]),computed:Object(n.c)({navLinks:function(t){return t.navigation.links}}),mounted:function(){this.fetchNavChildren()}}},mTMR:function(t,e,a){"use strict";var n=a("NYxO");e.a={props:["action","method","target","showFilters"],computed:Object(n.c)({filters:function(t){return t.search.filters}})}},md8n:function(t,e,a){"use strict";var n=a("siLz"),s=a("7xpi"),r=a("VU/8"),o=r(n.a,s.a,!1,null,null,null);e.a=o.exports},siLz:function(t,e,a){"use strict";var n=a("7+uW"),s=a("NYxO"),r=a("eMYj"),o=a("geF4"),i=a("ScBB");e.a={mixins:[o.a,i.a],props:{logoHref:{type:String,default:"http://hcflgov.net"},logoTarget:{type:String,default:"_self"},showForm:{type:Boolean,default:!0},formAction:{type:String,default:"http://www.hillsboroughcounty.org/en/search"},formMethod:{type:String,default:"get"},formTarget:{type:String,default:"_self"},formShowFilters:{type:Boolean,default:!0},customNav:{type:Boolean,default:!1}},components:{NavSearchForm:r.a},computed:Object(s.c)({logoUrl:function(t){return t.navigation.logoUrl}}),methods:{focusSearch:function(){var t=this;n.a.nextTick(function(){t.$refs.searchForm.$refs.searchInput.focus()})},showSearchWhenMobile:function(){this.$refs.navToggler.offsetLeft>0?this.$refs.searchDropdown.classList.add("show"):this.$refs.searchDropdown.classList.remove("show")}},mounted:function(){window.onload=this.showSearchWhenMobile,window.onresize=this.showSearchWhenMobile}}}},["NHnr"]);
//# sourceMappingURL=app.js.map