import{H as e,a as t,r as s,I as a,f as i,ay as l,Z as o,de as r,cY as n}from"./index.f774190a.js";import"./xlsx.a48e520c.js";import"./_baseSlice.1123a25b.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.7ad475f3.js";import{a as d}from"./index.aa1eff48.js";import"./RightOutlined.03811c7b.js";import{D as p}from"./index.381f6089.js";import"./useTimeout.04d2c2bd.js";import{g as c}from"./tsxHelper.d9af66ea.js";import"./index.4ac354fa.js";import"./domUtils.697d239b.js";import"./index.b93bb98e.js";import"./animation.e1ae5215.js";import"./useScrollTo.5921c7fb.js";var m={useCollapse:e.bool.def(!0),title:e.string.def(""),size:e.oneOf(["small","default","middle",void 0]).def("small"),bordered:e.bool.def(!0),column:{type:[Number,Object],default:()=>({xxl:4,xl:3,lg:3,md:3,sm:2,xs:1})},collapseOptions:{type:Object,default:null},schema:{type:Array,default:()=>[]},data:e.object};var u=t({name:"Description",props:m,emits:["register"],setup(e,{attrs:t,slots:m,emit:u}){const f=s(null),b=a((()=>({...e,...i(f)}))),j=a((()=>({...i(b),title:void 0}))),x=a((()=>!!i(b).title)),h=a((()=>({canExpand:!1,...i(j).collapseOptions}))),y=a((()=>({...t,...i(j)})));function g({label:e,labelMinWidth:t,labelStyle:s}){if(!s&&!t)return e;const a={...s,minWidth:`${t}px `};return l("div",{style:a},e)}const v=()=>l(p,{class:"description",...i(y)},(()=>function(){const{schema:e}=i(j);return i(e).map((e=>{const{render:t,field:s,span:a,show:r,contentMinWidth:n}=e,{data:d}=i(j);if(r&&o(r)&&!r(d))return null;const c=()=>o(t)?t(null==d?void 0:d[s],d):i(d)&&i(d)[s],m=n;return l(p.Item,{label:g(e),key:s,span:a},(()=>n?l("div",{style:{minWidth:`${m}px`}},c()):c()))}))}()));return u("register",{setDescProps:function(e){const t=r(i(f)||{},e);f.value=n(t)}}),()=>i(x)?(()=>{const t=e.useCollapse?v():l("div",null,v());if(!e.useCollapse)return t;const{canExpand:s,helpMessage:a}=i(h),{title:o}=i(b);return l(d,{title:o,canExpan:s,helpMessage:a},{default:()=>t,action:()=>c(m,"action")})})():v()}});export default u;