import n from"@@COMPONENT_SRC@@";import{createComponent as r,render as d}from"solid-js/web";var p={id:"@@ID@@",name:"@@NAME@@",icon:"@@ICON@@",init(o,t){let e=document.createElement("astro-dev-toolbar-window");o.appendChild(e),e.insertAdjacentHTML("beforebegin","<style>@@STYLE@@</style>"),d(()=>r(n,{props:{canvas:o,eventTarget:t,renderWindow:e},slots:{}}),e)}};export{p as default};
//# sourceMappingURL=solid.js.map