import{k as e,J as t,aR as r,a as n,a_ as a,i as o,o as l,j as i}from"./index.a6ab9244.js";import"./xlsx.9d951958.js";import{D as u}from"./DoubleRightOutlined.2732270b.js";var c={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M272.9 512l265.4-339.1c4.1-5.2.4-12.9-6.3-12.9h-77.3c-4.9 0-9.6 2.3-12.6 6.1L186.8 492.3a31.99 31.99 0 000 39.5l255.3 326.1c3 3.9 7.7 6.1 12.6 6.1H532c6.7 0 10.4-7.7 6.3-12.9L272.9 512zm304 0l265.4-339.1c4.1-5.2.4-12.9-6.3-12.9h-77.3c-4.9 0-9.6 2.3-12.6 6.1L490.8 492.3a31.99 31.99 0 000 39.5l255.3 326.1c3 3.9 7.7 6.1 12.6 6.1H836c6.7 0 10.4-7.7 6.3-12.9L576.9 512z"}}]},name:"double-left",theme:"outlined"};function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var b=function(n,a){var o=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?Object(arguments[t]):{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){s(e,t,r[t])}))}return e}({},n,a.attrs);return e(r,t(o,{icon:c}),null)};b.displayName="DoubleLeftOutlined",b.inheritAttrs=!1;var f=n({name:"SiderTrigger",components:{DoubleRightOutlined:u,DoubleLeftOutlined:b},setup(){const{getCollapsed:e}=a();return{getCollapsed:e}}});f.render=function(e,t,r,n,a,u){const c=o("DoubleRightOutlined"),s=o("DoubleLeftOutlined");return e.getCollapsed?(l(),i(c,{key:0})):(l(),i(s,{key:1}))};export default f;