import{J as w,r as s,j as e,K as b,F as v,t as I,$ as C,H as S,R as F,I as $,N as M}from"./index-C-U8uR4l.js";import{H as O}from"./heartIcon-CuaaLVBi.js";import{c as E,a as A,b as L,d as U,e as V,f as _,g as z,h as D,i as K,j as P,k as R,l as G,m as H}from"./cop13-7Zieeorr.js";import{G as T}from"./axios-U3mhuuG9.js";import{u as B}from"./sSession-C4IKiUuh.js";/* empty css              */import{u as q}from"./sSite-CM3hR3NN.js";var j={};(function(a){Object.defineProperty(a,"__esModule",{value:!0});var r="fas",d="key",i=512,l=512,o=[128273],c="f084",u="M336 352c97.2 0 176-78.8 176-176S433.2 0 336 0S160 78.8 160 176c0 18.7 2.9 36.8 8.3 53.7L7 391c-4.5 4.5-7 10.6-7 17v80c0 13.3 10.7 24 24 24h80c13.3 0 24-10.7 24-24V448h40c13.3 0 24-10.7 24-24V384h40c6.4 0 12.5-2.5 17-7l33.3-33.3c16.9 5.4 35 8.3 53.7 8.3zM376 96a40 40 0 1 1 0 80 40 40 0 1 1 0-80z";a.definition={prefix:r,iconName:d,icon:[i,l,o,c,u]},a.faKey=a.definition,a.prefix=r,a.iconName=d,a.width=i,a.height=l,a.ligatures=o,a.unicode=c,a.svgPathData=u,a.aliases=o})(j);const J=({handleSubmit:a,usuario:r,setUsuario:d,contrasena:i,setContrasena:l,handleRestrictEvent:o,isLoading:c})=>{const[u,f]=s.useState(""),[g,t]=s.useState(""),[p,x]=s.useState(!0),[n,k]=s.useState(!1);return s.useEffect(()=>{const m=S;let N=Math.round(Math.floor(Math.random()*m.numberOfImages)+1);const h=`${m.nameOfImages}${N}`;f(h),setTimeout(()=>{switch(x(!1),h){case"cop1":t(H);break;case"cop2":t(G);break;case"cop3":t(R);break;case"cop4":t(P);break;case"cop5":t(K);break;case"cop6":t(D);break;case"cop7":t(z);break;case"cop8":t(_);break;case"cop9":t(V);break;case"cop10":t(U);break;case"cop11":t(L);break;case"cop12":t(A);break;case"cop13":t(E);break}},100)},[]),s.useEffect(()=>{k(r!=null&&r!=""&&i!=null&&i!="")},[r,i]),e.jsxs("div",{className:"lg:flex justify-center justify-items-center dark:bg-gray-900 h-full min-h-[100vh]",children:[e.jsxs("div",{className:"flex flex-1 flex-col justify-center px-6 py-12 lg:px-8 min-h-[100vh]",children:[e.jsxs("div",{className:"sm:mx-auto sm:w-full sm:max-w-sm",children:[e.jsx(b,{to:"/",children:e.jsx("div",{className:"cursor-pointer flex items-center justify-center",children:e.jsx(O,{fill:"#FF5555",className:"size-12"})})}),e.jsx("h2",{className:"mt-10 text-center text-3xl font-bold leading-9 tracking-tight text-indigo-600 dark:text-indigo-500",children:"Iniciar sesión"})]}),e.jsxs("div",{className:"mt-10 sm:mx-auto sm:w-full sm:max-w-sm",children:[e.jsxs("form",{className:"space-y-6",onSubmit:a,autoComplete:"off",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex justify-start items-center gap-2 text-gray-600 text-lg",children:[e.jsx(v,{icon:I}),e.jsx("div",{className:" font-bold tracking-wide",children:"Usuario"})]}),e.jsx("div",{className:"mt-2",children:e.jsx("input",{name:"usuario",type:"text",value:r,onChange:m=>d(m.target.value),placeholder:"",autoFocus:!0,required:!0,autoComplete:"off",className:"pl-2 w-full text-xl py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"})})]}),e.jsxs("div",{children:[e.jsx("div",{className:"flex items-center justify-between",children:e.jsxs("div",{className:"flex justify-start items-center gap-2 text-gray-600 text-lg",children:[e.jsx(v,{icon:j.faKey}),e.jsx("div",{className:"font-bold tracking-wide",children:"Contraseña"})]})}),e.jsx("div",{className:"mt-1",children:e.jsx("input",{name:"contrasena",type:"textarea",id:"password",value:i,onChange:m=>l(m.target.value),required:!0,autoComplete:"off",onCopy:o,onCut:o,onPaste:o,onDragStart:o,className:"pl-2 w-full text-xl py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"})})]}),e.jsxs("div",{className:"mt-10 flex-1 flex-wrap",children:[e.jsx("i",{className:c?"!-mt-1 absolute visible":"hidden",children:e.jsx(C,{width:"120",color:"gray"})}),e.jsx("button",{type:"submit",disabled:c||!n,className:(!c||!n?"cursor-pointer":"pointer-events-none cursor-default")+" max-h-20 bg-indigo-500 text-gray-100 p-2.5 w-full rounded-full tracking-wide font-semibold font-display shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 shadow-lg disabled:bg-gray-300 disabled:text-gray-900 text-xl",children:"Ingresar"})]})]}),e.jsxs("p",{className:"mt-10 text-center text-md text-gray-500",children:["¿No tienes cuenta? ",e.jsx(b,{className:"cursor-pointer text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-600",to:"/",children:"Clic para ir al inicio"})]})]})]}),e.jsx(Y,{style:{backgroundImage:`url(${g})`},className:u+`${p?" fade-out":""}`,$loginbackgroundimage:""})]})},Y=w.div`
//   display: none;
  
  @media (min-width: 1024px) {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #d6e4ff;
    flex: 1;
    min-height: 100vh;
    background-size: cover;
    //background-image: url('${a=>a.$loginbackgroundimage}');

    transition: opacity 3s ease; // Transición de opacidad durante 1 segundo
    opacity: .8;
    //animation: zoomInOut 5s infinite alternate;

    background-position-x: center;
    &::after {
      content: "";
      width: 100%;
      min-height: 100%;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      //background-color: #3b82f6;

      background: linear-gradient(145deg, #2e00ff, #3b82f6);
      opacity: 0.5;
    }
  }  
  @keyframes zoomInOut {    
    0% { transform: scale(1); }
    50% { transform: scale(1.1); }
    100% { transform: scale(1); }
}
`,y=document.createElement("script");y.src=`${F}${$}`;document.body.appendChild(y);const se=()=>{const{token:a,setSesion:r}=B(n=>n);s.useEffect(()=>{setTimeout(()=>{T("visible")},100)},[]);const[d,i]=s.useState(!1),[l,o]=s.useState(""),[c,u]=s.useState(""),[f,g]=s.useState(!1),{setManagementVisited:t}=q(n=>({setManagementVisited:n.setManagementVisited}));if(s.useEffect(()=>(a&&(t("/administracion/inicio"),g(!0)),()=>{}),[a]),f)return e.jsx(M,{to:"/administracion/inicio"});function p(n){n.preventDefault()}async function x(n){n.preventDefault(),i(!0),await r(l,c),i(!1)}return e.jsx(e.Fragment,{children:e.jsx(J,{isLoading:d,handleSubmit:x,usuario:l,setUsuario:o,contrasena:c,setContrasena:u,handleRestrictEvent:p})})};export{se as default};
