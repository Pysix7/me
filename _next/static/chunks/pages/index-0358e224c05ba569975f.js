_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[14],{"/EDR":function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t("QeBL")}])},"6VBw":function(n,e,t){"use strict";var o=t("ODXe"),a=t("rePB"),r=t("Ff2n"),i=t("q1tI"),c=t.n(i),l=t("TSYQ"),s=t.n(l),u=Object(i.createContext)({}),d=t("VTBJ"),m=t("U8pU"),f=t("AJpP"),b=t("Kwbf"),p=t("Gu+u");function g(n){return"object"===Object(m.a)(n)&&"string"===typeof n.name&&"string"===typeof n.theme&&("object"===Object(m.a)(n.icon)||"function"===typeof n.icon)}function y(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object.keys(n).reduce((function(e,t){var o=n[t];switch(t){case"class":e.className=o,delete e.class;break;default:e[t]=o}return e}),{})}function C(n){return Object(f.generate)(n)[0]}function h(n){return n?Array.isArray(n)?n:[n]:[]}var v="\n.anticon {\n  display: inline-block;\n  color: inherit;\n  font-style: normal;\n  line-height: 0;\n  text-align: center;\n  text-transform: none;\n  vertical-align: -0.125em;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.anticon > * {\n  line-height: 1;\n}\n\n.anticon svg {\n  display: inline-block;\n}\n\n.anticon::before {\n  display: none;\n}\n\n.anticon .anticon-icon {\n  display: block;\n}\n\n.anticon[tabindex] {\n  cursor: pointer;\n}\n\n.anticon-spin::before,\n.anticon-spin {\n  display: inline-block;\n  -webkit-animation: loadingCircle 1s infinite linear;\n  animation: loadingCircle 1s infinite linear;\n}\n\n@-webkit-keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n",w=!1,k={primaryColor:"#333",secondaryColor:"#E6E6E6",calculated:!1};var O=function(n){var e,t,o=n.icon,a=n.className,l=n.onClick,s=n.style,u=n.primaryColor,m=n.secondaryColor,f=Object(r.a)(n,["icon","className","onClick","style","primaryColor","secondaryColor"]),h=k;if(u&&(h={primaryColor:u,secondaryColor:m||C(u)}),function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v;Object(i.useEffect)((function(){w||(Object(p.insertCss)(n,{prepend:!0}),w=!0)}),[])}(),e=g(o),t="icon should be icon definiton, but got ".concat(o),Object(b.a)(e,"[@ant-design/icons] ".concat(t)),!g(o))return null;var O=o;return O&&"function"===typeof O.icon&&(O=Object(d.a)(Object(d.a)({},O),{},{icon:O.icon(h.primaryColor,h.secondaryColor)})),function n(e,t,o){return o?c.a.createElement(e.tag,Object(d.a)(Object(d.a)({key:t},y(e.attrs)),o),(e.children||[]).map((function(o,a){return n(o,"".concat(t,"-").concat(e.tag,"-").concat(a))}))):c.a.createElement(e.tag,Object(d.a)({key:t},y(e.attrs)),(e.children||[]).map((function(o,a){return n(o,"".concat(t,"-").concat(e.tag,"-").concat(a))})))}(O.icon,"svg-".concat(O.name),Object(d.a)({className:a,onClick:l,style:s,"data-icon":O.name,width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"},f))};O.displayName="IconReact",O.getTwoToneColors=function(){return Object(d.a)({},k)},O.setTwoToneColors=function(n){var e=n.primaryColor,t=n.secondaryColor;k.primaryColor=e,k.secondaryColor=t||C(e),k.calculated=!!t};var j=O;function E(n){var e=h(n),t=Object(o.a)(e,2),a=t[0],r=t[1];return j.setTwoToneColors({primaryColor:a,secondaryColor:r})}E("#1890ff");var N=i.forwardRef((function(n,e){var t,c=n.className,l=n.icon,d=n.spin,m=n.rotate,f=n.tabIndex,b=n.onClick,p=n.twoToneColor,g=Object(r.a)(n,["className","icon","spin","rotate","tabIndex","onClick","twoToneColor"]),y=i.useContext(u).prefixCls,C=void 0===y?"anticon":y,v=s()(C,(t={},Object(a.a)(t,"".concat(C,"-").concat(l.name),!!l.name),Object(a.a)(t,"".concat(C,"-spin"),!!d||"loading"===l.name),t),c),w=f;void 0===w&&b&&(w=-1);var k=m?{msTransform:"rotate(".concat(m,"deg)"),transform:"rotate(".concat(m,"deg)")}:void 0,O=h(p),E=Object(o.a)(O,2),N=E[0],T=E[1];return i.createElement("span",Object.assign({role:"img","aria-label":l.name},g,{ref:e,tabIndex:w,onClick:b,className:v}),i.createElement(j,{icon:l,primaryColor:N,secondaryColor:T,style:k}))}));N.displayName="AntdIcon",N.getTwoToneColor=function(){var n=j.getTwoToneColors();return n.calculated?[n.primaryColor,n.secondaryColor]:n.primaryColor},N.setTwoToneColor=E;e.a=N},QeBL:function(n,e,t){"use strict";t.r(e);t("hr7U");var o=t("9xET"),a=t.n(o),r=(t("NcKm"),t("lbd2")),i=t.n(r),c=t("q1tI"),l=t.n(c),s=t("8Kt/"),u=t.n(s),d=(t("ReYU"),l.a.createElement),m=function(n){var e=n.icon,t=n.title,o=n.url;return d("div",{className:"linkComp"},d("a",{href:o,target:"blank"},e,d("span",null,t)))},f={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M847.7 112H176.3c-35.5 0-64.3 28.8-64.3 64.3v671.4c0 35.5 28.8 64.3 64.3 64.3h671.4c35.5 0 64.3-28.8 64.3-64.3V176.3c0-35.5-28.8-64.3-64.3-64.3zm0 736c-447.8-.1-671.7-.2-671.7-.3.1-447.8.2-671.7.3-671.7 447.8.1 671.7.2 671.7.3-.1 447.8-.2 671.7-.3 671.7zM230.6 411.9h118.7v381.8H230.6zm59.4-52.2c37.9 0 68.8-30.8 68.8-68.8a68.8 68.8 0 10-137.6 0c-.1 38 30.7 68.8 68.8 68.8zm252.3 245.1c0-49.8 9.5-98 71.2-98 60.8 0 61.7 56.9 61.7 101.2v185.7h118.6V584.3c0-102.8-22.2-181.9-142.3-181.9-57.7 0-96.4 31.7-112.3 61.7h-1.6v-52.2H423.7v381.8h118.6V604.8z"}}]},name:"linkedin",theme:"outlined"},b=t("6VBw"),p=function(n,e){return c.createElement(b.a,Object.assign({},n,{ref:e,icon:f}))};p.displayName="LinkedinOutlined";var g=c.forwardRef(p),y={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"}}]},name:"github",theme:"outlined"},C=function(n,e){return c.createElement(b.a,Object.assign({},n,{ref:e,icon:y}))};C.displayName="GithubOutlined";var h=c.forwardRef(C),v=l.a.createElement,w=[{title:"LinkedIn",url:"https://www.linkedin.com/in/prathap-k-923312168",icon:v(g,null)},{title:"Github",url:"https://www.github.com/pysix7",icon:v(h,null)}],k=(t("IUKP"),l.a.createElement),O=i.a.Title;e.default=function(){return k(c.Fragment,null,k(u.a,null,k("title",null,"About")),k(O,{level:1,className:"welcome"},"Welcome to My Portfolio"),k("p",{className:"about"},"i am a Software Developer from Bengaluru, India.",k("br",null),"currently working with MERN stack, building both WEB and Mobile applications."),k("div",{className:"socialLinks"},"Social links:",k(a.a,null,w&&w.length>0?w.map((function(n){return k("div",{key:n.title},k(m,n))})):null)))}}},[["/EDR",0,1,2,3,4,8,9,5]]]);