import{d as t,aK as e,K as i,o as s,i as o,l as r,k as n}from"./index.6cf10de3.js";import{c as d}from"./index.1477e102.js";import"./vendor.3b1829c7.js";import"./isNumeric.2bec345d.js";import"./RightOutlined.7e972f0b.js";import"./LeftOutlined.7ae18e20.js";import"./index.16d57d04.js";import"./EllipsisOutlined.2c5f8025.js";import"./types.fb3d6a87.js";import"./isEqual.b94b8d79.js";import"./toInteger.d71d002f.js";/* empty css              */import"./useTimeout.0ebe11aa.js";import"./useHeaderSetting.707af898.js";import"./domUtils.a05fef99.js";import"./_stringToArray.f18cff21.js";import"./useSortable.606fed89.js";import"./index.7f70dfbd.js";import"./index.de38b9ef.js";import"./useScrollTo.d2340d63.js";import"./animation.76ef2551.js";import"./index.c975b98c.js";import"./useWindowSizeFn.c49b1c44.js";import"./usePageContext.8bbc80e1.js";import"./index.fee0d968.js";import"./clickOutside.f5711e02.js";import"./index.a77b2a3e.js";import"./UpOutlined.74e210f0.js";import"./DownOutlined.07599049.js";import"./PlusOutlined.78650164.js";import"./index.d64015e1.js";var a=t({name:"MenuItemTag",props:d,setup(t){const{prefixCls:s}=e("basic-menu-item-tag"),o=i((()=>{const{item:e,showTitle:i,isHorizontal:s}=t;if(!e||i||s)return!1;const{tag:o}=e;if(!o)return!1;const{dot:r,content:n}=o;return!(!r&&!n)})),r=i((()=>{if(!o.value)return"";const{item:e}=t,{tag:i}=e,{dot:s,content:r}=i;return s?"":r})),n=i((()=>{const{item:e}=t,{tag:i={}}=e||{},{dot:o,type:r="error"}=i;return[s,[`${s}--${r}`],{[`${s}--dot`]:o}]}));return{prefixCls:s,getTagClass:n,getShowTag:o,getContent:r}}});a.render=function(t,e,i,d,a,m){return t.getShowTag?(s(),o("span",{key:0,class:t.getTagClass},r(t.getContent),3)):n("",!0)};export default a;