import{_ as t}from"./index.016bc34a.js";import{D as s}from"./index.b44f1792.js";import{u as e}from"./useDescription.f1044d86.js";import{d as i,u as o,h as r,o as a,i as n,w as d,j as m,a7 as p}from"./index.2ebd7bfa.js";import{getDescSchema as c}from"./data.4eee8a48.js";import"./useTimeout.def0159f.js";import"./useAttrs.11cd1fa7.js";import"./useWindowSizeFn.227bb415.js";import"./index.c9fd18b2.js";import"./index.704fa2a9.js";import"./domUtils.e1c3618e.js";import"./_stringToArray.bc74427c.js";import"./RightOutlined.62bde205.js";/* empty css              */import"./useScrollTo.d9e2f1b0.js";import"./animation.2dca1ea3.js";import"./FullscreenOutlined.92085b1f.js";import"./isEqual.0a78f514.js";import"./index.64db7749.js";import"./responsiveObserve.c545f1cc.js";import"./get.cc921876.js";import"./vendor.3b1829c7.js";import"./index.dbc26e07.js";import"./colors.70040742.js";var j=i({name:"ErrorLogDetailModal",components:{BasicModal:t,Description:s},props:{info:{type:Object,default:null}},setup(){const{t:t}=o(),[s]=e({column:2,schema:c()});return{register:s,useI18n:o,t:t}}});j.render=function(t,s,e,i,o,c){const j=r("Description"),f=r("BasicModal");return a(),n(f,p({width:800,title:t.t("sys.errorLog.tableActionDesc")},t.$attrs),{default:d((()=>[m(j,{data:t.info,onRegister:t.register},null,8,["data","onRegister"])])),_:1},16,["title"])};export default j;