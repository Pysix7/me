_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[15],{BJfS:function(e,t){e.exports=function(e){return e.replace(/[A-Z]/g,(function(e){return"-"+e.toLowerCase()})).toLowerCase()}},QLaP:function(e,t,n){"use strict";e.exports=function(e,t,n,a,r,i,o,c){if(!e){var s;if(void 0===t)s=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[n,a,r,i,o,c],l=0;(s=new Error(t.replace(/%s/g,(function(){return u[l++]})))).name="Invariant Violation"}throw s.framesToPop=1,s}}},Tk32:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects",function(){return n("gZkK")}])},gZkK:function(e,t,n){"use strict";n.r(t);n("mN36");var a=n("N9UN"),r=n.n(a),i=(n("NcKm"),n("lbd2")),o=n.n(i),c=n("q1tI"),s=n.n(c),u=n("8Kt/"),l=n.n(u),f=n("lU33"),h=n("mB8o"),p=s.a.createElement,d=function(e){for(var t=e.columns,n=void 0===t?2:t,a=e.gap,r=void 0===a?20:a,i=e.children,o={},c=[],s=0;s<n;s++)o["column".concat(s)]=[];for(var u=0;u<i.length;u++){o["column".concat(u%n)].push(p("div",{style:{marginBottom:"".concat(r,"px")},key:"mansory-item-".concat(u)},i[u]))}for(var l=0;l<n;l++)c.push(p("div",{style:{marginLeft:"".concat(l>0?r:0,"px"),flex:1},key:"mansory-item2-".concat(l)},o["column".concat(l)]));return p("div",{style:{display:"flex"}},c)},m=(n("6KA1"),s.a.createElement),y=o.a.Title,v=o.a.Link;t.default=function(){return m(f.a,{query:"(max-width: 599px)"},(function(e){return m("div",null,m(l.a,null,m("title",null,"Projects")),m("div",{className:"container"},m(y,{level:1,className:"antdTitle"},"Projects"),m(d,{columns:e?1:2},h.a.projects.map((function(e){return m(r.a,{className:"card",key:"project-".concat(e.title),bodyStyle:{overflow:"hidden"}},m(y,{level:2,className:"projectTitle"},e.title),m("div",{style:{marginLeft:15}},m(y,{level:3,className:"antdTitle"},"features:"),m("ul",null,e.features.map((function(e){return m("li",{className:"feature",key:"feature-".concat(e)},e)}))),e.links&&e.links.length>0&&m(c.Fragment,null,m(y,{level:3,className:"antdTitle"},"links:"),m("ul",null,e.links.map((function(e,t){return m("li",{key:"link-".concat(e.url),className:"link"},m("span",null,m(v,{href:e.url,target:"_blank"},e.title)))}))))))})))))}))}},lU33:function(e,t,n){"use strict";var a=n("wx14"),r=n("s4An");var i=n("JX7q"),o=n("rePB"),c=n("q1tI"),s=n.n(c),u=n("17x9"),l=n.n(u),f=n("QLaP"),h=n.n(f),p=n("pIsd"),d=n.n(p),m=function(){function e(e,t,n){var a=this;this.nativeMediaQueryList=e.matchMedia(t),this.active=!0,this.cancellableListener=function(){a.matches=a.nativeMediaQueryList.matches,a.active&&n.apply(void 0,arguments)},this.nativeMediaQueryList.addListener(this.cancellableListener),this.matches=this.nativeMediaQueryList.matches}return e.prototype.cancel=function(){this.active=!1,this.nativeMediaQueryList.removeListener(this.cancellableListener)},e}(),y=l.a.oneOfType([l.a.string,l.a.object,l.a.arrayOf(l.a.object.isRequired)]),v=function(e){var t,n;function c(t){var n,r;return n=e.call(this,t)||this,Object(o.a)(Object(i.a)(Object(i.a)(n)),"queries",[]),Object(o.a)(Object(i.a)(Object(i.a)(n)),"getMatches",(function(){return function(e){var t=Object.keys(e);if(1===t.length&&"__DEFAULT__"===t[0])return e.__DEFAULT__;return e}(n.queries.reduce((function(e,t){var n,r=t.name,i=t.mqListener;return Object(a.a)({},e,((n={})[r]=i.matches,n))}),{}))})),Object(o.a)(Object(i.a)(Object(i.a)(n)),"updateMatches",(function(){var e=n.getMatches();n.setState((function(){return{matches:e}}),n.onChange)})),t.query||t.queries||t.query&&t.queries||h()(!1),void 0!==t.defaultMatches&&t.query&&"boolean"!==typeof t.defaultMatches&&h()(!1),void 0!==t.defaultMatches&&t.queries&&"object"!==typeof t.defaultMatches&&h()(!1),"object"!==typeof window?(r=void 0!==t.defaultMatches?t.defaultMatches:!!t.query||Object.keys(n.props.queries).reduce((function(e,t){var n;return Object(a.a)({},e,((n={})[t]=!0,n))}),{}),n.state={matches:r},Object(i.a)(n)):(n.initialize(),n.state={matches:void 0!==n.props.defaultMatches?n.props.defaultMatches:n.getMatches()},n.onChange(),n)}n=e,(t=c).prototype=Object.create(n.prototype),t.prototype.constructor=t,Object(r.a)(t,n);var u=c.prototype;return u.initialize=function(){var e=this,t=this.props.targetWindow||window;"function"!==typeof t.matchMedia&&h()(!1);var n=this.props.queries||{__DEFAULT__:this.props.query};this.queries=Object.keys(n).map((function(a){var r=n[a],i="string"!==typeof r?d()(r):r;return{name:a,mqListener:new m(t,i,e.updateMatches)}}))},u.componentDidMount=function(){this.initialize(),void 0!==this.props.defaultMatches&&this.updateMatches()},u.onChange=function(){var e=this.props.onChange;e&&e(this.state.matches)},u.componentWillUnmount=function(){this.queries.forEach((function(e){return e.mqListener.cancel()}))},u.render=function(){var e=this.props,t=e.children,n=e.render,a=this.state.matches,r="object"===typeof a?Object.keys(a).some((function(e){return a[e]})):a;return n?r?n(a):null:t?"function"===typeof t?t(a):(!Array.isArray(t)||t.length)&&r?s.a.Children.only(t)&&"string"===typeof s.a.Children.only(t).type?s.a.Children.only(t):s.a.cloneElement(s.a.Children.only(t),{matches:a}):null:null},c}(s.a.Component);Object(o.a)(v,"propTypes",{defaultMatches:l.a.oneOfType([l.a.bool,l.a.objectOf(l.a.bool)]),query:y,queries:l.a.objectOf(y),render:l.a.func,children:l.a.oneOfType([l.a.node,l.a.func]),targetWindow:l.a.object,onChange:l.a.func});t.a=v},pIsd:function(e,t,n){var a=n("BJfS"),r=function(e){var t="",n=Object.keys(e);return n.forEach((function(r,i){var o=e[r];(function(e){return/[height|width]$/.test(e)})(r=a(r))&&"number"===typeof o&&(o+="px"),t+=!0===o?r:!1===o?"not "+r:"("+r+": "+o+")",i<n.length-1&&(t+=" and ")})),t};e.exports=function(e){var t="";return"string"===typeof e?e:e instanceof Array?(e.forEach((function(n,a){t+=r(n),a<e.length-1&&(t+=", ")})),t):r(e)}}},[["Tk32",0,1,2,3,4,6,8,9,7,5]]]);