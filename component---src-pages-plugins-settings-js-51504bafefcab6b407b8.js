(self.webpackChunkdate_picker=self.webpackChunkdate_picker||[]).push([[403],{955:function(e,t,n){"use strict";var r=n(7378);var a=function(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}(r);function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function d(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=n){var r,a,l=[],i=!0,o=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(l.push(r.value),!t||l.length!==t);i=!0);}catch(e){o=!0,a=e}finally{try{i||null==n.return||n.return()}finally{if(o)throw a}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var m=["state","setState","position","registerListener","calendarProps","datePickerProps","handleChange","nodes","Calendar","DatePicker","handlePropsChange","handleFocusedDate"];function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function g(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function f(e){var t=e.size,n=void 0===t?24:t,a=e.color,l=void 0===a?"currentColor":a,i=e.stroke,o=void 0===i?2:i,c=g(e,["size","color","stroke"]);return r.createElement("svg",p({className:"icon icon-tabler icon-tabler-calendar-event",width:n,height:n,viewBox:"0 0 24 24",strokeWidth:o,stroke:l,fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},c),r.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),r.createElement("rect",{x:4,y:5,width:16,height:16,rx:2}),r.createElement("line",{x1:16,y1:3,x2:16,y2:7}),r.createElement("line",{x1:8,y1:3,x2:8,y2:7}),r.createElement("line",{x1:4,y1:11,x2:20,y2:11}),r.createElement("rect",{x:8,y:15,width:2,height:2}))}function h(e){var t=e.size,n=void 0===t?24:t,a=e.color,l=void 0===a?"currentColor":a,i=e.stroke,o=void 0===i?2:i,c=g(e,["size","color","stroke"]);return r.createElement("svg",p({className:"icon icon-tabler icon-tabler-circles",width:n,height:n,viewBox:"0 0 24 24",strokeWidth:o,stroke:l,fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},c),r.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),r.createElement("circle",{cx:12,cy:7,r:4}),r.createElement("circle",{cx:6.5,cy:17,r:4}),r.createElement("circle",{cx:17.5,cy:17,r:4}))}function b(e){var t=e.size,n=void 0===t?24:t,a=e.color,l=void 0===a?"currentColor":a,i=e.stroke,o=void 0===i?2:i,c=g(e,["size","color","stroke"]);return r.createElement("svg",p({className:"icon icon-tabler icon-tabler-clock",width:n,height:n,viewBox:"0 0 24 24",strokeWidth:o,stroke:l,fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},c),r.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),r.createElement("circle",{cx:12,cy:12,r:9}),r.createElement("polyline",{points:"12 7 12 12 15 15"}))}function v(e){var t=e.size,n=void 0===t?24:t,a=e.color,l=void 0===a?"currentColor":a,i=e.stroke,o=void 0===i?2:i,c=g(e,["size","color","stroke"]);return r.createElement("svg",p({className:"icon icon-tabler icon-tabler-language",width:n,height:n,viewBox:"0 0 24 24",strokeWidth:o,stroke:l,fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},c),r.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),r.createElement("path",{d:"M5 7h7m-2 -2v2a5 8 0 0 1 -5 8m1 -4a7 4 0 0 0 6.7 4"}),r.createElement("path",{d:"M11 19l4 -9l4 9m-.9 -2h-6.2"}))}!function(e,t){void 0===t&&(t={});var n=t.insertAt;if("undefined"!=typeof document){var r=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css","top"===n&&r.firstChild?r.insertBefore(a,r.firstChild):r.appendChild(a),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(document.createTextNode(e))}}(".settings {\r\n  display: flex;\r\n  justify-content: space-around;\r\n  padding: 0 5px;\r\n}\r\n\r\n.settings.bottom,\r\n.settings.top {\r\n  padding-bottom: 8px;\r\n  padding-top: 8px;\r\n}\r\n\r\n.settings.left,\r\n.settings.right {\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin: 5px;\r\n}\r\n\r\n.setting {\r\n  width: 24px;\r\n  height: 24px;\r\n  padding: 2px;\r\n  border-radius: 15px;\r\n  background-color: #0074d9;\r\n  color: white;\r\n  box-shadow: 0 0 3px 1px #8798ad;\r\n  display: flex;\r\n  transition: 0.4s;\r\n  margin: auto 3px;\r\n}\r\n\r\n.left .setting,\r\n.right .setting {\r\n  display: grid;\r\n}\r\n\r\n.setting.active {\r\n  flex: 1;\r\n}\r\n\r\n.left .setting.active,\r\n.right .setting.active {\r\n  height: 100%;\r\n}\r\n\r\n.setting .icon {\r\n  cursor: pointer;\r\n  margin: 2.5px;\r\n  transition: 0.4s;\r\n}\r\n\r\n.top .setting,\r\n.bottom .setting {\r\n  margin: auto 2px;\r\n}\r\n\r\n.setting .items {\r\n  width: 0;\r\n  overflow: hidden;\r\n  visibility: hidden;\r\n}\r\n\r\n.setting.active .items {\r\n  flex: 1;\r\n  box-shadow: inset 0 0 3px #8798ad;\r\n  visibility: visible;\r\n  flex: 1;\r\n  display: flex;\r\n  justify-content: space-around;\r\n  margin: 0 1px;\r\n  border-radius: 15px;\r\n  padding: 0 5px;\r\n  width: unset;\r\n  background-color: white;\r\n  transition: 0.4s;\r\n}\r\n\r\n.left .setting.active .items,\r\n.right .setting.active .items {\r\n  display: grid;\r\n}\r\n\r\n.items .item {\r\n  background-color: rgb(126, 166, 240);\r\n  box-shadow: 0 0 3px 1px #8798ad;\r\n  width: 16px;\r\n  height: 16px;\r\n  margin: auto 0;\r\n  font-size: 9px;\r\n  line-height: 16px;\r\n  border-radius: 50%;\r\n  cursor: pointer;\r\n}\r\n\r\n.items .item.active {\r\n  background-color: #0074d9;\r\n  color: white;\r\n}\r\n\r\n.green .items .item {\r\n  background-color: #2ecc40;\r\n}\r\n\r\n.green .setting {\r\n  background-color: #3d9970;\r\n}\r\n\r\n.green .items .item.active {\r\n  background-color: #3d9970;\r\n}\r\n\r\n.purple .items .item {\r\n  background-color: #d500f9;\r\n}\r\n\r\n.purple .setting {\r\n  background-color: #9c27b0;\r\n}\r\n\r\n.purple .items .item.active {\r\n  background-color: #9c27b0;\r\n}\r\n\r\n.red .items .item {\r\n  background-color: #ff6687;\r\n}\r\n\r\n.red .setting {\r\n  background-color: #ea0034;\r\n}\r\n\r\n.red .items .item.active {\r\n  background-color: #ea0034;\r\n}\r\n\r\n.teal .items .item {\r\n  background-color: #4db6ac;\r\n}\r\n\r\n.teal .setting {\r\n  background-color: #009688;\r\n}\r\n\r\n.teal .items .item.active {\r\n  background-color: #009688;\r\n}\r\n\r\n.yellow .items .item {\r\n  background-color: #ffeb3b;\r\n}\r\n\r\n.yellow .setting {\r\n  background-color: #f7da37;\r\n}\r\n\r\n.yellow .items .item.active {\r\n  background-color: #f7da37;\r\n}\r\n\r\n@media (max-width: 400px) {\r\n  .rmdp-wrapper:not(.rmdp-mobile) .settings:not(.left):not(.right) {\r\n    height: 35px;\r\n    overflow: hidden;\r\n    margin: auto;\r\n  }\r\n}\r\n\r\n@media (max-height: 400px) {\r\n  .rmdp-wrapper .settings:not(.left):not(.right) {\r\n    height: 35px;\r\n    overflow: hidden;\r\n    margin: auto;\r\n  }\r\n}\r\n");var y=["state","setState","position","setProps","calendars","locales","modes","others","defaultActive","disabledList","defaultFormat","className","handlePropsChange","names","titles"];t.Z=function(e){var t=e.state;e.setState;var n=e.position,l=e.setProps,u=e.calendars,p=void 0===u?["gregorian","persian","arabic","indian"]:u,g=e.locales,k=void 0===g?["en","fa","ar","hi"]:g,E=e.modes,P=void 0===E?["single","multiple","range"]:E,x=e.others,Y=void 0===x?["onlyMonthPicker","onlyYearPicker"]:x,O=e.defaultActive,w=void 0===O?"":O,D=e.disabledList,M=void 0===D?[]:D,j=e.defaultFormat,C=void 0===j?{}:j,S=e.className,A=void 0===S?"":S,N=e.handlePropsChange,L=e.names,z=void 0===L?{gregorian:"GE",persian:"PE",arabic:"AR",indian:"IN",en:"EN",fa:"FA",ar:"AR",hi:"HI",single:"SI",multiple:"MU",range:"RA",disable:"DI",onlyMonthPicker:"OM",onlyYearPicker:"OY"}:L,I=e.titles,F=void 0===I?{calendar:"Calendar",locale:"Locale",mode:"Mode",otherPickers:"Other Pickers",gregorian:"Gregorian",persian:"Persian",arabic:"Arabic",indian:"Indian",en:"English",fa:"Farsi",ar:"Arabic",hi:"Hindi",single:"Single",multiple:"Multiple",range:"Range",disable:"Disable",onlyMonthPicker:"Only Month Picker",onlyYearPicker:"Only Year Picker"}:I,R=s(e,y),Z=d(r.useState(w),2),H=Z[0],B=Z[1],T={size:19,stroke:1.5,className:"icon"};return a.default.createElement("div",c({className:"settings ".concat(n," ").concat(A)},function(e){return e.state,e.setState,e.position,e.registerListener,e.calendarProps,e.datePickerProps,e.handleChange,e.nodes,e.Calendar,e.DatePicker,e.handlePropsChange,e.handleFocusedDate,s(e,m)}(R)),!M.includes("calendar")&&a.default.createElement("div",{title:F.calendar,className:"setting ".concat("calendar"===H?"active":"")},a.default.createElement(f,c({},T,{onClick:function(){return B("calendar"===H?"":"calendar")}})),a.default.createElement("div",{className:"items"},p.map((function(e,n){return a.default.createElement("span",{key:n,className:"item ".concat(t.date.calendar===e?"active":""),title:F[e],onClick:function(){return U("calendar",e)}},z[e])})))),!M.includes("locale")&&a.default.createElement("div",{title:F.locale,className:"setting ".concat("locale"===H?"active":"")},a.default.createElement(v,c({},T,{onClick:function(){return B("locale"===H?"":"locale")}})),a.default.createElement("div",{className:"items"},k.map((function(e,n){return a.default.createElement("span",{key:n,className:"item ".concat(t.date.locale===e?"active":""),title:F[e],onClick:function(){return U("locale",e)}},z[e])})))),!M.includes("mode")&&a.default.createElement("div",{title:F.mode,className:"setting ".concat("mode"===H?"active":"")},a.default.createElement(h,c({},T,{onClick:function(){return B("mode"===H?"":"mode")}})),a.default.createElement("div",{className:"items"},P.map((function(e,n){return a.default.createElement("span",{key:n,className:"item ".concat(t[e]?"active":t.range||t.multiple||"single"!==e?"":"active"),title:F[e],onClick:G},z[e])})))),!M.includes("other")&&a.default.createElement("div",{title:F.otherPickers,className:"setting ".concat("others"===H?"active":"")},a.default.createElement(b,c({},T,{onClick:function(){return B("others"===H?"":"others")}})),a.default.createElement("div",{className:"items"},a.default.createElement("span",{className:"item ".concat(t.onlyMonthPicker||t.onlyYearPicker?"":"active"),title:F.disable,onClick:_},z.disable),Y.map((function(e,n){return a.default.createElement("span",{key:n,className:"item ".concat(t[e.replace(/\s\w/g,(function(e){return e[1].toUpperCase()}))]?"active":""),title:F[e],onClick:function(){return _(e)}},z[e])})))));function U(e,n){t[e]!==n&&$(i(i({},t),{},o({date:t.date.set(e,n)},e,n)))}function G(e){var n;switch(e.target.title.toLowerCase()){case"multiple":n=i(i({},t),{},{selectedDate:Array.isArray(t.selectedDate)?t.selectedDate:[t.selectedDate],multiple:!0,range:!1});break;case"range":(n=i(i({},t),{},{selectedDate:Array.isArray(t.selectedDate)?t.selectedDate:[t.selectedDate],multiple:!1,range:!0})).selectedDate.length>2&&(n.selectedDate=[n.selectedDate[0],W(n.selectedDate)]);break;default:n=i(i({},t),{},{selectedDate:Array.isArray(t.selectedDate)?W(t.selectedDate):t.selectedDate,multiple:!1,range:!1})}$(n)}function W(e){return e[e.length-1]}function _(e){var n;switch(e){case"onlyMonthPicker":n=i(i({},t),{},{onlyMonthPicker:!0,onlyYearPicker:!1,format:(null==C?void 0:C.onlyMonthPicker)||"MM/YYYY"});break;case"onlyYearPicker":n=i(i({},t),{},{onlyMonthPicker:!1,onlyYearPicker:!0,format:(null==C?void 0:C.onlyYearPicker)||"YYYY"});break;default:n=i(i({},t),{},{onlyMonthPicker:!1,onlyYearPicker:!1,format:(null==C?void 0:C.single)||"YYYY/MM/DD"})}$(n)}function $(e){e.value=e.selectedDate,l instanceof Function&&("_self"in a.default.createElement("div")&&console.warn(["setProps is deprecated and will not available in the next versions.","Use onPropsChange instead","https://shahabyazdi.github.io/react-multi-date-picker/events/#onpropschange"].join("\n")),l((function(t){return i(i({},t),e)}))),N(e)}}},729:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return s}});var r=n(7378),a=n(316),l=n(7821),i=n(955),o=n(2128);function c(e,t,n){var a=(0,r.useState)(Object.assign({},n)),c=a[0],s=a[1],d=(0,r.useState)(Object.assign({multiple:!0},n)),u=d[0],m=d[1],p=(0,r.useState)(Object.assign({value:new Date,format:"MM-DD-YYYY"},n)),g=p[0],f=p[1];return[{title:"Props",description:r.createElement("table",null,r.createElement("thead",null,r.createElement("tr",null,r.createElement("th",null,e("Prop")),r.createElement("th",null,e("Type")),r.createElement("th",null,e("Default")))),r.createElement("tbody",null,r.createElement("tr",null,r.createElement("td",null,"calendars"),r.createElement("td",null,"Array"),r.createElement("td",null,'["gregorian", "persian", "arabic", "indian"]')),r.createElement("tr",null,r.createElement("td",null,"locales"),r.createElement("td",null,"Array"),r.createElement("td",null,'["en", "fa", "ar", "hi"]')),r.createElement("tr",null,r.createElement("td",null,"modes"),r.createElement("td",null,"Array"),r.createElement("td",null,'["single", "multiple", "range"]')),r.createElement("tr",null,r.createElement("td",null,"others"),r.createElement("td",null,"Array"),r.createElement("td",null,'["onlyMonthPicker", "onlyYearPicker"]')),r.createElement("tr",null,r.createElement("td",null,"defaultActive"),r.createElement("td",null,"string"),r.createElement("td",null,'""')),r.createElement("tr",null,r.createElement("td",null,"disabledList"),r.createElement("td",null,"Array"),r.createElement("td",null,"[]")),r.createElement("tr",null,r.createElement("td",null,"defaultFormat"),r.createElement("td",null,"Object"),r.createElement("td",null,"{}")),r.createElement("tr",null,r.createElement("td",null,"names"),r.createElement("td",null,"Object"),r.createElement("td",null,r.createElement("pre",{className:"language-jsx"},r.createElement("code",null,'{\n  gregorian: "GE",\n  persian: "PE",\n  arabic: "AR",\n  indian: "IN",\n  en: "EN",\n  fa: "FA",\n  ar: "AR",\n  hi: "HI",\n  single: "SI",\n  multiple: "MU",\n  range: "RA",\n  disable: "DI",\n  onlyMonthPicker: "OM",\n  onlyYearPicker: "OY",\n}')))),r.createElement("tr",null,r.createElement("td",null,"titles"),r.createElement("td",null,"Object"),r.createElement("td",null,r.createElement("pre",{className:"language-jsx"},r.createElement("code",null,'{\n  calendar: "Calendar",\n  locale: "Locale",\n  mode: "Mode",\n  otherPickers: "Other Pickers",\n  gregorian: "Gregorian",\n  persian: "Persian",\n  arabic: "Arabic",\n  indian: "Indian",\n  en: "English",\n  fa: "Farsi",\n  ar: "Arabic",\n  hi: "Hindi",\n  single: "Single",\n  multiple: "Multiple",\n  range: "Range",\n  disable: "Disable",\n  onlyMonthPicker: "Only Month Picker",\n  onlyYearPicker: "Only Year Picker",\n}'))))))},{title:"Settings Bottom",description:r.createElement("div",null),code:'import React, { useState } from "react"\nimport DatePicker from "react-multi-date-picker"\nimport Settings from "react-multi-date-picker/plugins/settings"\nimport DatePanel from "react-multi-date-picker/plugins/date_panel"\n.\n.\n.\nconst [props, setProps] = useState('+("en"===t?"{}":'{\n  calendar: "persian",\n  locale: "fa",\n  calendarPosition: "bottom-right"\n}')+')\n.\n.\n.\n<DatePicker\n  {...props}\n  onPropsChange={setProps}\n  plugins={[\n    <Settings\n      position="bottom"\n      defaultActive="mode"\n    />,\n    <DatePanel \n      disabled={!props.multiple && !props.range} \n      position={["fa", "ar"].includes(props.locale) ? "left" : "right"}\n    />\n  ]}\n/> ',jsx:r.createElement(l.ZP,Object.assign({},c,{onPropsChange:s,plugins:[r.createElement(i.Z,{position:"bottom",defaultActive:"mode"}),r.createElement(o.Z,{disabled:!c.multiple&&!c.range,position:["fa","ar"].includes(c.locale)?"left":"right"})]}))},{title:"Custom Settings",code:'import React, { useState } from "react"\nimport DatePicker from "react-multi-date-picker"\nimport Settings from "react-multi-date-picker/plugins/settings"\n.\n.\n.\nconst [props, setProps] = useState('+("en"===t?"{ multiple: true }":'{\n  calendar: "persian",\n  locale: "fa",\n  calendarPosition: "bottom-right",\n  multiple: true\n}')+')\n.\n.\n.\n<DatePicker\n  {...props}\n  onPropsChange={setProps}\n  plugins={[\n    <Settings\n      position="left"\n      calendars={["gregorian", "persian"]}\n      locales={["en", "fa"]}\n      modes={["multiple", "range"]}\n      disabledList={["other"]}\n    />\n  ]}\n/> ',jsx:r.createElement(l.ZP,Object.assign({},u,{onPropsChange:m,plugins:[r.createElement(i.Z,{position:"left",calendars:["gregorian","persian"],locales:["en","fa"],modes:["multiple","range"],disabledList:["other"]})]}))},{title:"Other Pickers",code:'import React, { useState } from "react"\nimport DatePicker from "react-multi-date-picker"\nimport Settings from "react-multi-date-picker/plugins/settings"\n.\n.\n.\nconst initialProps = '+("en"===t?'{ \n  value: new Date(), \n  format: "MM-DD-YYYY", \n}':'{ \n  value: new Date(), \n  format: "MM-DD-YYYY", \n  calendar: "persian",\n  locale: "fa",\n  calendarPosition:"bottom-right"\n}')+'\n\nconst [props, setProps] = useState(initialProps)\n.\n.\n.\n<DatePicker\n  {...props}\n  onPropsChange={setProps}\n  plugins={[\n    <Settings\n      position="bottom"\n      disabledList={["calendar", "locale", "mode"]}\n      defaultActive="others"\n      defaultFormat={{\n        single: "MM-DD-YYYY",\n        onlyMonthPicker: "MMMM YYYY",\n        onlyYearPicker: "YYYY",\n      }}\n    />\n  ]}\n/> ',jsx:r.createElement(l.ZP,Object.assign({},g,{onPropsChange:f,plugins:[r.createElement(i.Z,{position:"bottom",disabledList:["calendar","locale","mode"],defaultActive:"others",defaultFormat:{single:"MM-DD-YYYY",onlyMonthPicker:"MMMM YYYY",onlyYearPicker:"YYYY"}})]}))}]}function s(e){var t=e.pageContext.language||"en";return r.createElement(a.Z,{language:t,doc:c,section:"plugins"})}}}]);
//# sourceMappingURL=component---src-pages-plugins-settings-js-51504bafefcab6b407b8.js.map