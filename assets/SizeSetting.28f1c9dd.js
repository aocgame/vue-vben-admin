import{j as e,a0 as t,a1 as n,d as o,b2 as i,bo as a,aa as s,u as l,r,b4 as c,h as u,o as d,i as p,w as m,l as f}from"./index.1913eb94.js";import{u as b}from"./index.1268fe0c.js";import"./_stringToArray.5cb95166.js";import"./domUtils.0258b8bd.js";import"./index.18ad5efb.js";import"./index.783d6b86.js";import"./index.bdf910cd.js";import"./index.f94b9e9e.js";import"./FullscreenOutlined.6d692539.js";import"./RightOutlined.2ee7001c.js";import"./useTimeout.9da07028.js";import"./index.8f8f83b3.js";import"./animation.3a00ce01.js";import"./useScrollTo.e2974638.js";import"./useAttrs.693b4d98.js";import"./useWindowSizeFn.eef1c2fa.js";import"./index.5acc6e7c.js";import"./uuid.a6cec785.js";import"./download.71135c62.js";var g={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M840 836H184c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h656c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8zm0-724H184c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h656c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8zM610.8 378c6 0 9.4-7 5.7-11.7L515.7 238.7a7.14 7.14 0 00-11.3 0L403.6 366.3a7.23 7.23 0 005.7 11.7H476v268h-62.8c-6 0-9.4 7-5.7 11.7l100.8 127.5c2.9 3.7 8.5 3.7 11.3 0l100.8-127.5c3.7-4.7.4-11.7-5.7-11.7H548V378h62.8z"}}]},name:"column-height",theme:"outlined"};function j(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var y=function(o,i){var a=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?Object(arguments[t]):{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){j(e,t,n[t])}))}return e}({},o,i.attrs);return e(n,t(a,{icon:g}),null)};y.displayName="ColumnHeightOutlined",y.inheritAttrs=!1;var h=o({name:"SizeSetting",components:{ColumnHeightOutlined:y,Tooltip:i,Dropdown:a,Menu:s,MenuItem:s.Item},setup(){const e=b(),{t:t}=l(),n=r([e.getSize()]);return{handleTitleClick:function({key:t}){n.value=[t],e.setProps({size:t})},selectedKeysRef:n,getPopupContainer:c,t:t}}});h.render=function(t,n,o,i,a,s){const l=u("ColumnHeightOutlined"),r=u("MenuItem"),c=u("Menu"),b=u("Dropdown"),g=u("Tooltip");return d(),p(g,{placement:"top"},{title:m((()=>[e("span",null,f(t.t("component.table.settingDens")),1)])),default:m((()=>[e(b,{placement:"bottomCenter",trigger:["click"],getPopupContainer:t.getPopupContainer},{overlay:m((()=>[e(c,{onClick:t.handleTitleClick,selectable:"",selectedKeys:t.selectedKeysRef,"onUpdate:selectedKeys":n[1]||(n[1]=e=>t.selectedKeysRef=e)},{default:m((()=>[e(r,{key:"default"},{default:m((()=>[e("span",null,f(t.t("component.table.settingDensDefault")),1)])),_:1}),e(r,{key:"middle"},{default:m((()=>[e("span",null,f(t.t("component.table.settingDensMiddle")),1)])),_:1}),e(r,{key:"small"},{default:m((()=>[e("span",null,f(t.t("component.table.settingDensSmall")),1)])),_:1})])),_:1},8,["onClick","selectedKeys"])])),default:m((()=>[e(l)])),_:1},8,["getPopupContainer"])])),_:1})};export default h;