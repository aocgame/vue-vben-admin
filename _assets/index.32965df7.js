import{a as e,r as a,f as s,h as o,i as t,o as i,j as r,k as p,w as n,p as l}from"./index.f774190a.js";import"./xlsx.a48e520c.js";import"./_baseSlice.1123a25b.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.7ad475f3.js";import{a as u}from"./index.aa1eff48.js";import"./RightOutlined.03811c7b.js";import"./useTimeout.04d2c2bd.js";import"./tsxHelper.d9af66ea.js";import"./index.4ac354fa.js";import"./domUtils.697d239b.js";import"./index.b93bb98e.js";import"./animation.e1ae5215.js";import"./useScrollTo.5921c7fb.js";import{u as c}from"./useCopyToClipboard.87916bae.js";var d=e({name:"Copy",components:{CollapseContainer:u},setup(){const e=a(""),{createMessage:t}=o(),{clipboardRef:i,copiedRef:r}=c();return{handleCopy:function(){const a=s(e);a?(i.value=a,s(r)&&t.warning("copy success！")):t.warning("请输入要拷贝的内容！")},value:e}}});const m={class:"p-4"},f={class:"flex justify-center"},j=l("Copy");d.render=function(e,a,s,o,l,u){const c=t("a-input"),d=t("a-button"),b=t("CollapseContainer");return i(),r("div",m,[p(b,{class:"px-20 bg-white w-full h-32 rounded-md",title:"Copy Example"},{default:n((()=>[p("div",f,[p(c,{placeholder:"请输入",value:e.value,"onUpdate:value":a[1]||(a[1]=a=>e.value=a)},null,8,["value"]),p(d,{type:"primary",onClick:e.handleCopy},{default:n((()=>[j])),_:1},8,["onClick"])])])),_:1})])};export default d;