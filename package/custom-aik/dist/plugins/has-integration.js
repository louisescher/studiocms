var s=e=>e;import{AstroError as f}from"astro/errors";var g=({name:e,position:t,relativeTo:o,config:r})=>{let n=r.integrations.findIndex(a=>a.name===e);if(n===-1)return!1;if(t===void 0)return!0;if(o===void 0)throw new f("Cannot perform a relative integration check without a relative reference.","Pass `relativeTo` on your call to `hasIntegration` or remove the `position` option.");let i=r.integrations.findIndex(a=>a.name===o);if(i===-1)throw new f("Cannot check relative position against an absent integration.");return t==="before"?n<i:n>i};var d=s({name:"hasIntegration",hook:"astro:config:setup",implementation:({config:e},{name:t})=>(o,r,n)=>g({name:o,relativeTo:n??t,position:r,config:e})});export{d as hasIntegrationPlugin};
//# sourceMappingURL=has-integration.js.map