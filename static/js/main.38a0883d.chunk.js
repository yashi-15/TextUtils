(this.webpackJsonptextutils=this.webpackJsonptextutils||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),r=a(2),c=a.n(r);a(12),a(13);function o(e){return n.a.createElement("div",null,n.a.createElement("nav",{className:"navbar navbar-expand-lg bg-".concat(e.mode)},n.a.createElement("div",{className:"container-fluid"},n.a.createElement("a",{className:"navbar-brand text-".concat("dark"===e.mode?"light":"dark"),href:"/"},"Text-Utils"),n.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},n.a.createElement("span",{className:"navbar-toggler-icon"})),n.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},n.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},n.a.createElement("li",{className:"nav-item"})),n.a.createElement("form",{className:"d-flex",role:"search"},n.a.createElement("input",{className:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search"}),n.a.createElement("button",{className:"btn btn-outline-primary text-".concat("dark"===e.mode?"light":"dark"),type:"submit"},"Search")),n.a.createElement("div",{className:"form-check form-switch mx-2"},n.a.createElement("input",{className:"form-check-input",type:"checkbox",role:"switch",id:"flexSwitchCheckDefault",onClick:e.toggleMode}),n.a.createElement("label",{className:"form-check-label text-".concat("dark"===e.mode?"light":"dark"),htmlFor:"flexSwitchCheckDefault"},"Enable Dark mode"))))))}function s(e){const[t,a]=Object(l.useState)("");return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"container"},n.a.createElement("h3",null,e.heading),n.a.createElement("textarea",{className:"form-control ".concat("dark"===e.mode?"text-bg-secondary":"text-bg-light"),value:t,onChange:e=>{console.log("handle on change called"),a(e.target.value)},id:"exampleFormControlTextarea1",rows:"8"}),n.a.createElement("button",{type:"button",disabled:0===t.length,onClick:()=>{console.log("text to upper case : "+t),a(t.toUpperCase())},className:"btn btn-primary m-3"}," ","UPPERCASE"),n.a.createElement("button",{type:"button",disabled:0===t.length,onClick:()=>{console.log("text to lower case : "+t),a(t.toLowerCase())},className:"btn btn-primary m-3"}," ","lowercase"),n.a.createElement("button",{type:"button",disabled:0===t.length,onClick:()=>{var e=t,l="";for(let t=0;t<e.length;t++)t%2===0?(l=e.charAt(t).toUpperCase(),e=e.slice(0,t)+l+e.slice(t+1)):(l=e.charAt(t).toLowerCase(),e=e.slice(0,t)+l+e.slice(t+1));a(e)},className:"btn btn-primary m-3"}," ","AlTeRnAtE cAsE"),n.a.createElement("button",{type:"button",disabled:0===t.length,onClick:()=>{var e=t,l="";for(let a=0;a<t.length;a++)t.charAt(a)===t.charAt(a).toLowerCase()?(l=t.charAt(a).toUpperCase(),e=e.slice(0,a)+l+e.slice(a+1)):t.charAt(a)===t.charAt(a).toUpperCase()&&(l=t.charAt(a).toLowerCase(),e=e.slice(0,a)+l+e.slice(a+1));a(e)},className:"btn btn-primary m-3"}," ","INveRSe CaSe"),n.a.createElement("button",{type:"button",disabled:0===t.length,onClick:()=>{var t=document.getElementById("exampleFormControlTextarea1");t.select(),navigator.clipboard.writeText(t.value),document.getSelection().removeAllRanges(),e.showalert("Text Copied !","success")},className:"btn btn-primary m-3"}," ","Copy Text"),n.a.createElement("button",{type:"button",disabled:0===t.length,onClick:()=>{console.log("Text cleared"),a("")},className:"btn btn-primary m-3"}," ","Clear Text")),n.a.createElement("div",{className:"container mt-5"},n.a.createElement("h3",null,"Your Text Summary Here"),n.a.createElement("p",null," ",t.split(" ").filter(e=>0!==e.length).length," words and ",t.replace(/ /g,"").length," letters"),n.a.createElement("p",null,"Average read time: ",.005*t.split(" ").filter(e=>0!==e.length).length," minutes."),n.a.createElement("h4",null,"Preview"),n.a.createElement("p",{className:"".concat("dark"===e.mode?"text-bg-primary":"bg-primary-subtle"," p-3")}," ",t)))}function m(e){return n.a.createElement("div",{style:{height:"62px"}},e.alert&&n.a.createElement("div",{class:"alert alert-".concat(e.alert.type),role:"alert"},e.alert.msg))}var i=function(){const[e,t]=Object(l.useState)("light"),[a,r]=Object(l.useState)(null);return n.a.createElement(n.a.Fragment,null,n.a.createElement(o,{mode:e,toggleMode:()=>{"light"===e?(console.log("changing mode"),t("dark"),document.body.classList.remove("text-bg-light"),document.body.classList.add("text-bg-dark")):(console.log("changing mode"),t("light"),document.body.classList.remove("text-bg-dark"),document.body.classList.add("text-bg-light"))}}),n.a.createElement(m,{alert:a}),n.a.createElement("div",{className:"container"},n.a.createElement(s,{heading:"Text to be analysed below",mode:e,showalert:(e,t)=>{r({msg:e,type:t}),setTimeout(()=>{r(null)},2e3)}})))};var d=e=>{e&&e instanceof Function&&a.e(3).then(a.bind(null,15)).then(t=>{let{getCLS:a,getFID:l,getFCP:n,getLCP:r,getTTFB:c}=t;a(e),l(e),n(e),r(e),c(e)})};c.a.createRoot(document.getElementById("root")).render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(i,null))),d()},3:function(e,t,a){e.exports=a(14)}},[[3,1,2]]]);
//# sourceMappingURL=main.38a0883d.chunk.js.map