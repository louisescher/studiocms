import{readdirSync as c,statSync as f}from"node:fs";import{join as l,relative as p,resolve as m}from"pathe";var n=(e,r=e)=>{let a=c(e),o=[];for(let s of a){let t=l(e,s);if(f(t).isDirectory()){let i=n(t,r);o=o.concat(i)}else{let i=p(r,t);o.push(i)}}return o},h=({addWatchFile:e,command:r,dir:a,updateConfig:o})=>{if(r!=="dev")return;let s=n(a).map(t=>m(a,t));for(let t of s)e(t);o({vite:{plugins:[{name:"rollup-plugin-astro-tailwind-config-viewer",buildStart(){for(let t of s)this.addWatchFile(t)}}]}})};export{h as watchIntegration};
//# sourceMappingURL=watch-integration.js.map