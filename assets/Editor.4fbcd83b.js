import{_ as e}from"./index.62b6b966.js";import{a as i}from"./index.65229165.js";import{d as t,bP as s,g as r,h as o,o as d,i as n,w as a,j as m}from"./index.5083dc91.js";import{M as p}from"./index.3809e600.js";import{_ as c}from"./index.136e7d6e.js";import"./index.1c59bd17.js";import"./index.cf567728.js";import"./responsiveObserve.c545f1cc.js";import"./vendor.3b1829c7.js";import"./findIndex.d667fd27.js";import"./isEqual.54d9b6d5.js";import"./get.1bdf74a7.js";import"./_baseProperty.74f89655.js";import"./toInteger.368318f3.js";import"./index.0cc01a94.js";import"./index.47fe438f.js";import"./SearchOutlined.bbd8729c.js";import"./EyeOutlined.b4b248e9.js";import"./index.3ae1bbe2.js";import"./CheckOutlined.d6ac4a16.js";import"./DownOutlined.ad3384b4.js";import"./index.e662a5af.js";import"./colors.cbbbc0c2.js";import"./index.a9223e98.js";import"./UpOutlined.6d16ca11.js";import"./index.ec10f4ee.js";import"./RightOutlined.e15855c8.js";import"./RedoOutlined.1d1b9d98.js";import"./index.e7b0242c.js";import"./EllipsisOutlined.3b6bce0a.js";import"./types.7d0557e6.js";import"./Tree.62ba477a.js";import"./util.1cd56a81.js";import"./useAttrs.5e2798d7.js";/* empty css              */import"./uuid.6199f68d.js";import"./index.c7d6f120.js";import"./DeleteOutlined.f5481f39.js";import"./index.4b14cc02.js";import"./index.ff339dff.js";import"./useTimeout.6f85263a.js";import"./useWindowSizeFn.b104c8eb.js";import"./FullscreenOutlined.0c5bdf7c.js";import"./index.7cf3cb61.js";import"./index.b0b4264c.js";import"./index.71d590fa.js";import"./LeftOutlined.033237a7.js";import"./download.3be52d8b.js";import"./domUtils.57616fad.js";import"./_stringToArray.267a0e21.js";import"./index.ec9957f2.js";import"./useScrollTo.946cd9d0.js";import"./animation.543b2081.js";import"./index.dcb73a74.js";import"./index.ec0ccb98.js";import"./usePageContext.d8053a7f.js";import"./transButton.8328ef76.js";import"./ArrowLeftOutlined.f35b6c77.js";const l=[{field:"title",component:"Input",label:"title",defaultValue:"标题",rules:[{required:!0}]},{field:"markdown",component:"Input",label:"markdown",defaultValue:"defaultValue",rules:[{required:!0,trigger:"blur"}],render:({model:e,field:i})=>s(p,{value:e[i],onChange:t=>{e[i]=t}})}];var j=t({components:{BasicForm:e,CollapseContainer:i,PageWrapper:c},setup(){const{createMessage:e}=r();return{schemas:l,handleSubmit:i=>{e.success("click search,values:"+JSON.stringify(i))}}}});j.render=function(e,i,t,s,r,p){const c=o("BasicForm"),l=o("CollapseContainer"),j=o("PageWrapper");return d(),n(j,{title:"MarkDown组件嵌入Form示例"},{default:a((()=>[m(l,{title:"MarkDown表单"},{default:a((()=>[m(c,{labelWidth:100,schemas:e.schemas,actionColOptions:{span:24},onSubmit:e.handleSubmit},null,8,["schemas","onSubmit"])])),_:1})])),_:1})};export default j;