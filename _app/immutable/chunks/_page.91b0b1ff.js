import{H as n}from"./control.e7f5239e.js";import{b as o}from"./paths.ab9b50cc.js";function t(e,r){return new n(e,r)}new TextEncoder;function a({params:e}){if(e.slug==="hello-world")return{title:"Hello world",markdown:`
            # heading 1
            ## heading 2
            some text
            ![leaf](${o}/images/moon.svg) {dark}
            inline image: ![leaf](${o}/images/sun.svg)
            sun: ![sun](${o}/images/leaf.svg)`};throw t(404,"Not found")}const i=Object.freeze(Object.defineProperty({__proto__:null,load:a},Symbol.toStringTag,{value:"Module"}));export{i as _,a as l};
