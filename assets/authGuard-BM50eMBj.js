import{r as e,j as r,N as o}from"./index-C-U8uR4l.js";import{u as m}from"./sSession-C4IKiUuh.js";import{G as s}from"./axios-U3mhuuG9.js";const x=({children:n})=>{const t=m(u=>u),[a,f]=e.useState(!0),[d,i]=e.useState(!0);return e.useEffect(()=>(t!=null&&t.token||setTimeout(()=>{f(!1)},100),()=>{}),[t==null?void 0:t.token]),e.useEffect(()=>(t!=null&&t.authorized||i(!1),()=>{}),[t==null?void 0:t.authorized]),d?a?(setTimeout(()=>{s("hidden")},100),r.jsx(r.Fragment,{children:n})):(s("visible"),r.jsx(o,{to:"/"})):(i(!0),t.setAuthorized(!0),s("visible"),r.jsx(o,{to:"/administracion/inicio"}))};export{x as default};
