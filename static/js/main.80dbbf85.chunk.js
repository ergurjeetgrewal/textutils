(this.webpackJsonptextutils=this.webpackJsonptextutils||[]).push([[0],{10:function(e,t,a){},12:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),s=a(4),r=a.n(s),l=(a(9),a(2)),o=(a(10),a(0));function i(){var e=Object(c.useState)({color:"black",backgroundColor:"white"}),t=Object(l.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)("Enable Dark Mode"),r=Object(l.a)(s,2),i=r[0],b=r[1];return Object(o.jsxs)("div",{className:"container my-2",style:a,children:[Object(o.jsxs)("div",{className:"card text-center",style:a,children:[Object(o.jsx)("h1",{children:"About Us"}),Object(o.jsx)("div",{className:"card-header",children:"Featured"}),Object(o.jsxs)("div",{className:"card-body",children:[Object(o.jsx)("h5",{className:"card-title",children:"Special title treatment"}),Object(o.jsx)("p",{className:"card-text",children:"With supporting text below as a natural lead-in to additional content."}),Object(o.jsx)("a",{href:"/",className:"btn btn-primary",children:"Go somewhere"})]}),Object(o.jsx)("div",{className:"card-footer text-muted",children:"2 days ago"})]}),Object(o.jsx)("button",{className:"btn btn-primary my-2",onClick:function(){"black"===a.color?(n({color:"white",backgroundColor:"black",border:"1px solid white"}),b("Enable Light Mode")):(n({color:"black",backgroundColor:"white"}),b("Enable Dark Mode"))},children:i})]})}function b(e){return Object(o.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(o.jsxs)("div",{className:"container-fluid",children:[Object(o.jsx)("a",{className:"navbar-brand",href:"/",children:e.title}),Object(o.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(o.jsx)("span",{className:"navbar-toggler-icon"})}),Object(o.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(o.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("a",{className:"nav-link active","aria-current":"page",href:"/",children:"Home"})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("a",{className:"nav-link",href:"/about",children:"About"})})]}),Object(o.jsxs)("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light"),children:[Object(o.jsx)("input",{className:"form-check-input",type:"checkbox",onClick:e.toggleMode,id:"flexSwitchCheckDefault"}),Object(o.jsx)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",children:"Dark Mode"})]})]})]})})}function d(e){var t=Object(c.useState)(""),a=Object(l.a)(t,2),n=a[0],s=a[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:"container",style:{color:"dark"===e.mode?"white":"black"},children:[Object(o.jsx)("h1",{className:"mt-2",children:e.heading}),Object(o.jsx)("div",{className:"mb-3",children:Object(o.jsx)("textarea",{className:"form-control",rows:"8",id:"mybox",value:n,onChange:function(e){s(e.target.value)},style:{backgroundColor:"dark"===e.mode?"grey":"white",color:"dark"===e.mode?"white":"black"}})}),Object(o.jsx)("button",{type:"submit",className:"btn btn-primary mx-1",onClick:function(){s(n.toUpperCase()),e.setalert("Converted to upper case","success")},children:"Convert to uppercase"}),Object(o.jsx)("button",{type:"submit",className:"btn btn-primary mx-1",onClick:function(){s(n.toLowerCase()),e.setalert("Converted to lower case","success")},children:"Convert to lowercase"}),Object(o.jsx)("button",{type:"submit",className:"btn btn-primary mx-1",onClick:function(){s(""),e.setalert("Text Cleared!","success")},children:"Clear Box"}),Object(o.jsx)("button",{type:"submit",className:"btn btn-primary mx-1",onClick:function(){var t=document.getElementById("mybox");t.select(),navigator.clipboard.writeText(t.value),e.setalert("Text Selected to clipboard!","success")},children:"Copy Text"}),Object(o.jsx)("button",{type:"submit",className:"btn btn-primary mx-1",onClick:function(){var t=n.split(/[ ]+/);s(t.join(" ")),e.setalert("Extra Spaces removed!","success")},children:"Remove Extra Spaces"})]}),Object(o.jsxs)("div",{className:"container my-2",style:{color:"dark"===e.mode?"white":"black"},children:[Object(o.jsx)("h2",{children:"Your text summary"}),Object(o.jsxs)("p",{children:[n.split(" ").length," words and ",n.length," characters"]}),Object(o.jsxs)("p",{children:[.008*n.split(" ").length," Minutes required to read whole paragraph"]}),Object(o.jsx)("h3",{children:"Preview"}),Object(o.jsx)("p",{children:n.length>0?n:"Enter something above to preview"})]})]})}function j(e){return e.alert&&Object(o.jsx)("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert",children:Object(o.jsx)("strong",{children:e.alert.msg})})}b.defaultProps={title:"Set title here"};var m=function(){var e=Object(c.useState)("light"),t=Object(l.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)(null),r=Object(l.a)(s,2),m=r[0],u=r[1],h=function(e,t){u({msg:e,type:t}),setTimeout((function(){u(null)}),1500)};return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(b,{title:"TextUtils",mode:a,toggleMode:function(){"light"===a?(n("dark"),document.body.style.backgroundColor="#26273a",h("Dark Mode has been enabled","success"),document.title="Textutils Home - darkmode"):(n("light"),document.body.style.backgroundColor="white",h("Light Mode has been enabled","success"),document.title="Textutils Home")}}),Object(o.jsx)(j,{alert:m}),Object(o.jsx)(d,{heading:"Enter the text below to analyze",setalert:h,mode:a}),Object(o.jsx)(i,{})]})},u=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,13)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),c(e),n(e),s(e),r(e)}))};r.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(m,{})}),document.getElementById("root")),u()},9:function(e,t,a){}},[[12,1,2]]]);
//# sourceMappingURL=main.80dbbf85.chunk.js.map