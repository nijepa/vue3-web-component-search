import{useCssVars as h,useAttrs as b,ref as d,onMounted as x,watch as y,openBlock as p,createElementBlock as m,normalizeClass as u,normalizeStyle as v,createElementVNode as r,Fragment as w,renderList as k,toDisplayString as j,defineCustomElement as z}from"vue";(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const E=async(n,l=void 0)=>{try{const s=[["Accept","application/json"]],e={method:n,headers:new Headers(s)},t=await fetch("https://incentivemall.srv-test05.cadooz.systems/mall/rest/catalog/getproductteasers",e);if(t.error)console.log(1,t);else return console.log(2,t),t.json()}catch(a){return console.log("Error: ",a),[{name:"aaa",img:"../assets/attribute.product.img_bus_por_200x200.jpg"},{name:"aaa",img:"../assets/attribute.product.img_bus_por_200x200.jpg"},{name:"aaa",img:"../assets/attribute.product.img_bus_por_200x200.jpg"},{name:"aaa",img:"../assets/attribute.product.img_bus_por_200x200.jpg"},{name:"aaa",img:"../assets/attribute.product.img_bus_por_200x200.jpg"},{name:"aaa",img:"../assets/attribute.product.img_bus_por_200x200.jpg"},{name:"aaa",img:"../assets/attribute.product.img_bus_por_200x200.jpg"}]}},S=`.filter-results{display:flex;flex-direction:row;flex-wrap:wrap;margin-bottom:2rem;column-gap:1em;row-gap:1em;width:90%}.filter-results>article{flex-basis:calc(25% - 1.5rem)}.product{box-shadow:0 .125rem .5rem #2222221f;width:100%;border-radius:.5rem;transition:all .15s ease-in}.card{border:none}.card{position:relative;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;min-width:0;word-wrap:break-word;background-color:#fff;background-clip:border-box;border:1px solid rgba(0,0,0,.125);border-radius:.25rem}.product .card-body{position:relative;padding:1rem}.card-body{-ms-flex:1 1 auto;flex:1 1 auto;min-height:1px;padding:1.25rem}.product__image-container{position:relative;width:100%;margin-bottom:1rem;padding-top:62.5%}.product__image-container__image{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);max-width:100%;max-height:100%;overflow:hidden}img{vertical-align:middle;border-style:none}.product__name{height:2.5rem;color:#333;line-height:1.25;overflow:hidden;font-weight:600}.search-box{display:flex;width:300px;column-gap:1em;height:50px;margin:1em 0}.btn-close{cursor:pointer}.form-control{display:block;width:100%;padding:.4rem 1.4rem;font-size:1rem;font-weight:400;line-height:1.5;color:#333;background-color:#fff;background-clip:padding-box;border:1px solid #ced4da;appearance:none;border-radius:0;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out}#toast-wrapper{font-family:Avenir,Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;color:#2c3e50;position:fixed;top:0;bottom:0;left:0;right:0;z-index:-9;display:flex;height:0}.infront{z-index:9999!important}.toast__open:after{position:absolute;top:0;left:0;right:0;bottom:0;background:transparent;content:"";transition:all 5s;opacity:1}.backdrop:after{background:rgba(0,0,0,.5)}.toast__open.hide{display:none;opacity:0}.toast{min-width:150px;background-color:#fff;border-bottom-left-radius:.5em;border-bottom-right-radius:0,5em;box-shadow:5px 5px 12px #00000026;display:flex;align-items:center;flex-direction:column;padding:1em;z-index:999;transition:.5s all ease;opacity:1;overflow:hidden;height:500px;width:100%;top:130px;position:relative}.toast.hide{padding:.5em;opacity:0;height:3.5em;z-index:-1}.toast__title{display:flex;justify-content:space-between;align-items:center;font-weight:600;margin:-1rem;padding:.5rem;border-bottom:2px solid var(--19200ed9)}#toast-title{display:flex;align-items:center;column-gap:.5rem;color:var(--19200ed9)}.toast__close{color:var(--19200ed9);cursor:pointer;transition:all 1.4s ease}.toast__close:hover svg{filter:brightness(.55)}.toast__content{display:flex;align-items:center;column-gap:.5em;text-align:left;padding-top:2em;word-break:break-all}.center{justify-content:center;align-items:center}.left-top{justify-content:flex-start;align-items:flex-start}.right-top{justify-content:flex-end;align-items:flex-start}.left-bottom{justify-content:flex-start;align-items:flex-end}.right-bottom{justify-content:flex-end;align-items:flex-end}.colorized{border:2px solid var(--19200ed9)}.colorized .toast__title{background-color:var(--19200ed9);border:2px solid var(--19200ed9)}.colorized .toast__title span{background-color:var(--19200ed9);color:#fff!important}.colorized .toast__title svg{fill:#fff}.wobble-enter-active{animation:wobbles .8s ease}.wobble-leave-active{transition:all 1s ease}@keyframes wobbles{0%{transform:translateY(-20px);opacity:0}50%{transform:translateY(0);opacity:.3}60%{transform:translate(8px);opacity:.3}70%{transform:translate(-8px);opacity:.7}80%{transform:translate(4px);opacity:.7}90%{transform:translate(-4px);opacity:1}to{transform:translate(0);opacity:1}}
`,L=(n,l)=>{const a=n.__vccOpts||n;for(const[s,e]of l)a[s]=e;return a},A={class:"search-box"},C=r("path",{d:"M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z"},null,-1),O=[C],D={class:"filter-results"},N={class:"card product"},H={class:"card-body"},B={class:"product__image-container logo-product"},F=["src"],M={class:"product__name"},V={__name:"Custom-Search.ce",props:{isActive:{type:String,default:!1},toastData:{type:String,default:[{name:"aaa"}]},toastStyle:{type:String}},emits:["close-toast"],setup(n,{emit:l}){const a=n;h(i=>({"19200ed9":i.typeColor})),b();const s=d(null);x(()=>{console.log(8)});const e=d([]),t=async()=>{const i=await E("GET");i.error||console.log("mfa download codes",i),console.log("err",i),e.value=i},o=d(!1);y(()=>a.isActive,(i,_)=>{o.value=i==="true",o.value&&(t(),s.value.focus())});const f=d(null),g=()=>{o.value=!1,f.value.dispatchEvent(new CustomEvent("close-toast",{bubbles:!0,composed:!0}))};return(i,_)=>(p(),m("div",{ref_key:"toastWrapper",ref:f,class:u({infront:o.value}),id:"toast-wrapper",style:v({height:o.value?"100%":0})},[r("div",{class:u(["toast__open",{hide:!o.value}]),onClick:g},null,2),r("div",{id:"toast",class:u(["toast",{hide:!o.value}])},[r("div",A,[r("input",{type:"text",class:"form-control",name:"",id:"",ref_key:"search",ref:s},null,512),(p(),m("svg",{onClick:g,class:"btn-close",xmlns:"http://www.w3.org/2000/svg",width:"20px",viewBox:"0 0 16 16",fill:"greey"},O))]),r("div",D,[(p(!0),m(w,null,k(e.value,c=>(p(),m("article",null,[r("div",N,[r("div",H,[r("div",B,[r("img",{src:c.img,alt:"",class:"product__image-container__image"},null,8,F)]),r("div",M,j(c==null?void 0:c.name),1)])])]))),256))])],2)],6))}},q=L(V,[["styles",[S]]]),I=z(q);customElements.define("custom-search",I);
