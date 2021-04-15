(self.webpackChunkdate_picker=self.webpackChunkdate_picker||[]).push([[104],{7275:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return c}});var r=t(7294),a=t(316),l=t(7821);function o(e,n,t){var a=(0,r.useRef)(),o=(0,r.useRef)(),c=(0,r.useRef)(),s=(0,r.useState)(!1),i=s[0],u=s[1],d=(0,r.useState)(!1),f=d[0],m=d[1],h=(0,r.useState)(!1),p=h[0],C=h[1],b=(0,r.useState)(!1),k=b[0],v=b[1],R=(0,r.useState)(new l.NT({calendar:"en"===n?"gregorian":"persian",locale:n})),E=R[0],g=R[1],w=(0,r.useRef)();return[{title:"Descriptions",description:"forward_ref_description",code:'import React, { useRef } from "react"\nimport { Calendar } from "react-multi-date-picker"\n\nexport default function Example() {\n  const calendarRef = useRef()\n\n  return (\n    <Calendar ref={calendarRef} />\n  )\n}'},{title:"Opene & Close Calendar By DatePicker Ref",description:"date_picker_ref",code:"const datePickerRef = useRef()\n.\n.\n.\n<div>\n  <button\n    onClick={() => datePickerRef.current.openCalendar()}\n  >\n    "+e("open")+"\n  </button>\n  <DatePicker \n    ref={datePickerRef} \n"+("en"===n?"  >":'    calendar="persian"\n    locale="fa"\n    calendarPosition="auto-right"\n  >')+'\n    <button\n      style={{ margin: "5px" }}\n      onClick={() => datePickerRef.current.closeCalendar()}\n    >\n      '+e("close")+"\n    </button>\n  </DatePicker>\n</div>",jsx:r.createElement("div",null,r.createElement("button",{onClick:function(){return a.current.openCalendar()}},e("open")),r.createElement(l.ZP,Object.assign({ref:a},t),r.createElement("button",{style:{margin:"5px"},onClick:function(){return a.current.closeCalendar()}},e("close"))))},{title:"Refresh Position",description:"refresh_position",code:"const ref = useRef()\nconst ref2 = useRef()\nconst [visible, setVisible] = useState(false)\nconst [visible2, setVisible2] = useState(false)\nconst [shouldCloseCalendar, setShouldCloseCalendar] = useState(false)\nconst [shouldCloseCalendar2, setShouldCloseCalendar2] = useState(false)\n.\n.\n.\n<div>\n  <h2>"+e("Example 1 (without using refresh position)")+" :</h2>\n  {visible && <span>"+e("a demo text to force the datepicker to move forward!")+'</span>}\n  <DatePicker\n    value={{}}\n    placeholder="'+e("first click here")+'"\n    ref={ref}\n    onOpen={() => setShouldCloseCalendar(false)}\n    onClose={() => shouldCloseCalendar}\n  '+("en"===n?"/>":'  calendar="persian"\n    locale="fa"\n    calendarPosition="auto-right"\n  />')+'\n  <button\n    onClick={() => {\n      if (!visible) {\n        setVisible(true)\n      } else {\n        setVisible(false)\n        setShouldCloseCalendar(true)\n        setTimeout(() => {\n          ref.current.closeCalendar()\n        }, 20);\n      }\n    }}\n  >\n    {visible ? "'+e("refresh and close calendar")+'" : "'+e("then click here")+'"}\n  </button>\n  <h2>'+e("Example 2 (with using refresh position)")+" :</h2>\n  {visible2 && <span>"+e("a demo text to force the datepicker to move forward!")+'</span>}\n  <DatePicker\n    value={{}}\n    placeholder="'+e("first click here")+'"\n    ref={ref2}\n    onOpen={() => setShouldCloseCalendar2(false)}\n    onClose={() => shouldCloseCalendar2}\n  '+("en"===n?"/>":'  calendar="persian"\n    locale="fa"\n    calendarPosition="auto-right"\n  />')+'\n  <button\n    onClick={() => {\n      if (!visible2) {\n        setVisible2(true)\n        setTimeout(() => {\n          ref2.current.refreshPosition()\n        }, 20);\n      } else {\n        setVisible2(false)\n        setShouldCloseCalendar2(true)\n        setTimeout(() => {\n          ref2.current.closeCalendar()\n        }, 20);\n      }\n    }}\n  >\n    {visible2 ? "'+e("refresh and close calendar")+'" : "'+e("then click here")+'"}      \n  </button>\n</div>',jsx:r.createElement("div",null,r.createElement("h2",null,e("Example 1 (without using refresh position)")," :"),i&&r.createElement("span",null,e("a demo text to force the datepicker to move forward!")),r.createElement(l.ZP,Object.assign({value:{},placeholder:e("first click here"),ref:o,onOpen:function(){return C(!1)},onClose:function(){return p}},t)),r.createElement("button",{onClick:function(){i?(u(!1),C(!0),setTimeout((function(){o.current.closeCalendar()}),20)):u(!0)}},e(i?"refresh and close calendar":"then click here")),r.createElement("h2",null,e("Example 2 (with using refresh position)")," :"),f&&r.createElement("span",null,e("a demo text to force the datepicker to move forward!")),r.createElement(l.ZP,Object.assign({value:{},placeholder:e("first click here"),ref:c,onOpen:function(){return v(!1)},onClose:function(){return k}},t)),r.createElement("button",{onClick:function(){f?(m(!1),v(!0),setTimeout((function(){c.current.closeCalendar()}),20)):(m(!0),setTimeout((function(){c.current.refreshPosition()}),20))}},e(f?"refresh and close calendar":"then click here")," "))},{title:"Manually Set Year And Month In Calendar",description:"year_month_ref",code:'import React, { useRef, useState } from "react";\nimport { Calendar, DateObject } from "react-multi-date-picker";\n\nexport default function Example() {\n  const [date, setDate] = useState({\n    new DateObject('+("en"===n?"":'{ calendar: "persian", locale: "fa" }')+')\n  });\n\n  const calendarRef = useRef();\n\n  return (\n    <>\n      <div>\n        <button\n          onClick={() => {\n            let date = calendarRef.current.date;\n\n            calendarRef.current.set("month", date.month.number + 1);\n\n            setDate(new DateObject(date));\n          }}\n        >\n          +\n        </button>\n        <span>{date.month.name}</span>\n        <button\n          onClick={() => {\n            let date = calendarRef.current.date;\n\n            calendarRef.current.set("month", date.month.number - 1);\n\n            setDate(new DateObject(date));\n          }}\n        >\n          -\n        </button>\n      </div>\n      <div>\n        <button\n          onClick={() => {\n            let date = calendarRef.current.date;\n\n            calendarRef.current.set("year", date.year + 1);\n\n            setDate(new DateObject(date));\n          }}\n        >\n          +\n        </button>\n        <span>{date.year}</span>\n        <button\n          onClick={() => {\n            let date = calendarRef.current.date;\n\n            calendarRef.current.set("year", date.year - 1);\n\n            setDate(new DateObject(date));\n          }}\n        >\n          -\n        </button>\n      </div>\n      <Calendar \n        ref={calendarRef} \n      '+("en"===n?"/>":'  calendar="persian" \n        locale="fa" \n      />')+"\n    </>\n  )\n}  ",jsx:r.createElement(r.Fragment,null,r.createElement("div",null,r.createElement("button",{onClick:function(){var e=w.current.date;w.current.set("month",e.month.number+1),g(new l.NT(e))}},"+"),r.createElement("span",null,E.month.name),r.createElement("button",{onClick:function(){var e=w.current.date;w.current.set("month",e.month.number-1),g(new l.NT(e))}},"-")),r.createElement("div",null,r.createElement("button",{onClick:function(){var e=w.current.date;w.current.set("year",e.year+1),g(new l.NT(e))}},"+"),r.createElement("span",null,E.year),r.createElement("button",{onClick:function(){var e=w.current.date;w.current.set("year",e.year-1),g(new l.NT(e))}},"-")),r.createElement(l.f,Object.assign({ref:w},t)))}]}function c(e){var n=e.pageContext.language||"en";return r.createElement(a.Z,{language:n,doc:o})}}}]);
//# sourceMappingURL=component---src-pages-ref-js-ee024c47c637bd29e158.js.map