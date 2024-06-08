import{r as d,j as s,F as x,e as f,A as g,k as l}from"./index-C-U8uR4l.js";/* empty css              */import{C as y}from"./concatenateErrors-CCuSbzXI.js";import{a as h}from"./axios-U3mhuuG9.js";const w=({...e})=>{const t=d.useRef(null);return d.useEffect(()=>{const a=t.current;if(a&&e.type==="number"){const n=r=>{document.activeElement===a&&r.preventDefault()};return a.addEventListener("wheel",n),()=>{a.removeEventListener("wheel",n)}}},[e.type]),s.jsxs("div",{className:e.divAddCss,children:[s.jsx("div",{className:"flex items-center justify-between mt-0",children:s.jsx("div",{className:"flex justify-start items-center gap-2 text-lg "+e.labelAddCss,children:s.jsxs("div",{className:"font-bold tracking-wide text-sm "+(e.required&&e.value==""?"text-red-500":""),children:[e.labelText,e.required?" *":""]})})}),s.jsx("div",{className:"mt-1 flex justify-between w-[100%]",children:s.jsx("input",{ref:t,disabled:e.disabled,autoFocus:!!e.hasFocus,type:e.type?e.type:"textarea",name:e.name,value:e.value,onChange:a=>e.setValue(a.target.value),required:e.required,autoComplete:"off",title:e.title?e.title:"",className:y("pl-2 w-[100%] text-md py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500",e.inputAddCss??"",(e.type==="number"?" no-spinner ":"")+" mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md ")},"genericInput"+e.name)})]})};function N({...e}){return s.jsx("main",{className:"grid min-h-full place-items-center px-6 py-10 sm:py-5 lg:px-8",children:s.jsxs("div",{className:"flex flex-col items-center justify-center text-center",children:[s.jsx("p",{className:"text-base font-semibold text-indigo-600 dark:text-indigo-400",children:"¡Ups!"}),s.jsx("h1",{className:"mt-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl",children:"Sin resultados"}),s.jsx("p",{className:"mt-4 text-base leading-7 text-gray-600 dark:text-gray-200",children:"Lo sentimos, no hemos encontrado información con los filtros empleados."}),s.jsx("div",{className:"mt-5 flex items-center justify-center gap-x-6",children:s.jsxs("a",{onClick:e.clearFilters,className:"rounded-md bg-indigo-600 dark:bg-indigo-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 dark:hover:bg-indigo-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 cursor-pointer",children:[s.jsx(x,{icon:f,className:"mr-2"}),"Borrar Filtros"]})})]})})}const $=({childs:e})=>s.jsx("nav",{"aria-label":"breadcrumb",className:"w-max",children:s.jsx("ol",{className:"flex flex-wrap items-center w-full px-2 py-2 rounded-md",children:e&&e.map((t,a)=>s.jsxs("li",{className:"flex items-center font-sans text-sm font-normal leading-normal transition-colors duration-300 cursor-default",children:[s.jsx("a",{className:"text-gray-400 hover:text-blue-500 ",children:t}),a<e.length-1&&s.jsx("span",{className:"mx-2 font-sans text-sm font-normal leading-normal select-none text-blue-500",children:"/"})]},a))})}),k=({...e})=>(d.useEffect(()=>{},[e.options]),s.jsxs("div",{className:e.divAddCss,children:[s.jsx("div",{className:"flex items-center justify-between mt-0",children:s.jsx("div",{className:`flex justify-start items-center gap-2 text-lg ${e.labelAddCss}`,children:s.jsxs("div",{className:"font-bold tracking-wide text-sm "+(e.required&&e.value==""?"text-red-600 dark:text-red-400":""),children:[e.labelText,e.required?" *":""]})})}),s.jsx("div",{className:"mt-2 flex justify-between w-[100%]",children:s.jsx("select",{className:"cursor-pointer pl-2 w-full text-md py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500",value:e.value,onChange:t=>{t.preventDefault(),t.stopPropagation(),e.setValue(t.target.value)},onClick:t=>{t.stopPropagation(),t.preventDefault()},required:e.required,autoComplete:"off",children:e.options.map((t,a)=>s.jsx("option",{value:t,className:"text-gray-600 dark:text-gray-200 bg-gray-100 dark:bg-gray-900",children:t},a))})})]})),C={table:"",topCount:"",select:"",expand:"",filter:"",apply:"",orderBy:""};let c=!1;const u=h.create({baseURL:g});u.interceptors.response.use(e=>(c=!1,e),e=>{var t,a,n,r,o;if(!c){if(e.response){const{status:i}=e.response,m=(a=(t=e.response.data)==null?void 0:t.error)==null?void 0:a.message;(n=e==null?void 0:e.response)!=null&&n.data.errors?l.error((o=(r=e==null?void 0:e.response)==null?void 0:r.data)==null?void 0:o.errors):i===400?l.error("Lo sentimos ha ocurrido un error en la petición. "+m):i===401?l.error("Tu sesión ha caducado, inicia de nuevo por favor."):i===403?l.info("¡Ups! No tienes permiso para consultar esta sección."):i===404?l.error("El usuario no está registrado/activo en nuestra plataforma, contacta a un administrador por favor."):i===500&&l.error("Error en la validación de tus datos de sesión. ")}else e.request?l.error("Error en la solicitud, informa al administrador por favor. "+e.request):l.warning(e.message);c=!0}return Promise.reject(e)});u.interceptors.request.use(e=>e,e=>Promise.reject(e));const E=async(e,t,a)=>{try{return(await u.get(`/${t}`,{headers:{Authorization:e,Permiso:a}})).data}catch(n){if(n.response.status===400)throw new Error("BadRequest");if(n.response.status===401||n.response.status===500)throw new Error("Unauthorized");if(n.response.status===403)throw new Error("Forbidden");if(n.response.status===404)throw new Error("NotFound")}},q=e=>e.map(t=>{const a=t.type==="string"?t.contains?`'${String(t.value).toLowerCase()}'`:`'${t.value}'`:t.value,n=t.type==="string"&&t.contains?"contains":"eq";if(t.key.includes("/")){const r=t.key.split("/"),o=r.slice(0,r.length-1).join("/"),i=r[r.length-1];return o.endsWith("s")?t.type==="string"&&t.contains?`${o}/any(x: ${n}(tolower(x/${i}), ${a}))`:`${o}/any(x: x/${i} ${n} ${a})`:t.type==="string"&&t.contains?`${n}(tolower(${t.key}), ${a})`:`${t.key} ${n} ${a}`}else return t.type==="string"&&t.contains?`${n}(tolower(${t.key}), ${a})`:`${t.key} ${n} ${a}`}).join(" and ");export{$ as B,E as F,N,w as S,k as a,q as b,C as d};